import { NextRequest, NextResponse } from 'next/server';
import { supabaseServer } from '../../../lib/supabaseServer';

export async function POST(request: NextRequest) {
  try {
    console.log('Register API called');
    
    // Check environment variables
    console.log('Environment check:', {
      hasUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
      hasServiceKey: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
      url: process.env.NEXT_PUBLIC_SUPABASE_URL?.substring(0, 20) + '...'
    });
    
    const body = await request.json();
    const { firstName, lastName, email, phone, dateOfBirth, address, city, state, zipCode } = body;

    console.log('Registration data received:', { firstName, lastName, email, city, state });

    // Validate required fields
    if (!firstName || !lastName || !email || !dateOfBirth || !address || !city || !state || !zipCode) {
      console.log('Missing required fields');
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check if user already exists
    console.log('Checking if user exists...');
    const { data: existingUser, error: checkError } = await supabaseServer
      .from('users')
      .select('id')
      .eq('email', email)
      .single();

    if (checkError && checkError.code !== 'PGRST116') { // PGRST116 = no rows returned
      console.error('Error checking existing user:', checkError);
      return NextResponse.json(
        { error: 'Database error' },
        { status: 500 }
      );
    }

    console.log('User check completed, existing user:', existingUser);

    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 409 }
      );
    }

    // Save to Supabase database
    console.log('Attempting to insert user into database...');
    const { data: newUser, error: insertError } = await supabaseServer
      .from('users')
      .insert([
        {
          first_name: firstName,
          last_name: lastName,
          email,
          phone,
          date_of_birth: dateOfBirth,
          address,
          city,
          state,
          zip_code: zipCode,
          created_at: new Date().toISOString()
        }
      ])
      .select()
      .single();

    if (insertError) {
      console.error('Error inserting user:', insertError);
      return NextResponse.json(
        { error: 'Failed to create user account', details: insertError.message },
        { status: 500 }
      );
    }

    console.log('User inserted successfully:', newUser);

    console.log('User registered successfully:', newUser);

    // Send confirmation email (you could use services like SendGrid, Mailgun, etc.)
    // await sendConfirmationEmail(email, firstName);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Registration successful',
        userId: newUser.id
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

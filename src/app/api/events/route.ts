import { NextRequest, NextResponse } from 'next/server';
import { supabaseServer } from '../../../lib/supabaseServer';

// GET - Fetch all events
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status') || 'upcoming';
    const limit = parseInt(searchParams.get('limit') || '10');
    const offset = parseInt(searchParams.get('offset') || '0');

    let query = supabaseServer
      .from('events')
      .select('*')
      .order('event_date', { ascending: true });

    // Filter by status if provided
    if (status && status !== 'all') {
      query = query.eq('status', status);
    }

    // Add pagination
    query = query.range(offset, offset + limit - 1);

    const { data: events, error } = await query;

    if (error) {
      console.error('Error fetching events:', error);
      return NextResponse.json(
        { error: 'Failed to fetch events' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      events,
      pagination: {
        limit,
        offset,
        hasMore: events.length === limit
      }
    });

  } catch (error) {
    console.error('Events fetch error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST - Create a new event
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      title,
      description,
      eventDate,
      eventTime,
      location,
      address,
      city,
      state,
      zipCode,
      eventType,
      maxAttendees,
      imageUrl
    } = body;

    // Validate required fields
    if (!title || !eventDate) {
      return NextResponse.json(
        { error: 'Title and event date are required' },
        { status: 400 }
      );
    }

    // Save to Supabase database
    const { data: newEvent, error: insertError } = await supabaseServer
      .from('events')
      .insert([
        {
          title,
          description,
          event_date: eventDate,
          event_time: eventTime,
          location,
          address,
          city,
          state,
          zip_code: zipCode,
          event_type: eventType || 'general',
          max_attendees: maxAttendees,
          image_url: imageUrl
        }
      ])
      .select()
      .single();

    if (insertError) {
      console.error('Error inserting event:', insertError);
      return NextResponse.json(
        { error: 'Failed to create event' },
        { status: 500 }
      );
    }

    console.log('Event created successfully:', newEvent);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Event created successfully',
        event: newEvent
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Event creation error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

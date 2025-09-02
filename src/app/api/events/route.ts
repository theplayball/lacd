import { NextRequest, NextResponse } from 'next/server';

// GET - Fetch all events
export async function GET() {
  try {
    // Note: Events are now stored in Google Sheets, not a database
    // This endpoint is kept for backward compatibility but returns empty data
    return NextResponse.json({
      success: true,
      events: [],
      pagination: {
        limit: 10,
        offset: 0,
        hasMore: false
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
    const { title, eventDate } = body;

    // Validate required fields
    if (!title || !eventDate) {
      return NextResponse.json(
        { error: 'Title and event date are required' },
        { status: 400 }
      );
    }

    // Note: Events are now stored in Google Sheets, not a database
    // This endpoint is kept for backward compatibility but doesn't save data
    console.log('Event creation requested (Google Sheets only):', { title, eventDate });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Event creation endpoint reached (Google Sheets only)',
        note: 'Events are stored in Google Sheets, not a database'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Event creation error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

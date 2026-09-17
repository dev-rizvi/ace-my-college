import { NextResponse } from 'next/server';
import { submitCounsellingRequest, CounsellingLead } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { full_name, email, phone, class_level, interested_stream, city, preferred_location, message } = body;

    if (!full_name || !phone || !class_level || !interested_stream) {
      return NextResponse.json(
        { error: 'Name, phone, class level, and interested stream are required.' },
        { status: 400 }
      );
    }

    const lead: CounsellingLead = {
      full_name: full_name.trim(),
      email: email ? email.trim() : '',
      phone: phone.trim(),
      city: city ? city.trim() : 'Lucknow',
      class_level,
      interested_stream,
      preferred_location: preferred_location || 'Any',
      message: message || '',
    };

    const result = await submitCounsellingRequest(lead);

    return NextResponse.json({
      success: true,
      message: 'Counselling request received successfully! An ACE MY CAMPUS advisor will reach out within 24 hours.',
      data: result.data,
    });
  } catch (error: any) {
    console.error('API Error in /api/counselling:', error);
    return NextResponse.json(
      { error: 'Failed to process request. Please try again or WhatsApp us at +91 70545 45455.' },
      { status: 500 }
    );
  }
}

import { NextResponse } from 'next/server';
import { submitInstitutionInquiry, InstitutionLead } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { institute_name, contact_person, designation, email, phone, location, services_requested, annual_intake_goal, message } = body;

    if (!institute_name || !contact_person || !phone || !email) {
      return NextResponse.json(
        { error: 'Institute name, contact person, email, and phone number are required.' },
        { status: 400 }
      );
    }

    const inquiry: InstitutionLead = {
      institute_name: institute_name.trim(),
      contact_person: contact_person.trim(),
      designation: designation || 'Dean / Director / Marketing Head',
      email: email.trim(),
      phone: phone.trim(),
      location: location || '',
      services_requested: services_requested || ['Lead Generation'],
      annual_intake_goal: annual_intake_goal || '',
      message: message || '',
    };

    const result = await submitInstitutionInquiry(inquiry);

    return NextResponse.json({
      success: true,
      message: 'Institution partnership inquiry received! Our senior education marketing strategist will contact you promptly.',
      data: result.data,
    });
  } catch (error: any) {
    console.error('API Error in /api/institutions:', error);
    return NextResponse.json(
      { error: 'Failed to process inquiry. Please email us at acemycampus@gmail.com' },
      { status: 500 }
    );
  }
}

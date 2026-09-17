-- ============================================================================
-- ACE MY CAMPUS - Supabase Database Schema
-- Run this in your Supabase SQL Editor to set up tables and security policies.
-- ============================================================================

-- 1. Students & Parents Counselling Requests
CREATE TABLE IF NOT EXISTS public.counselling_requests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    city TEXT,
    class_level TEXT NOT NULL, -- e.g. 'Class 11-12', 'UG', 'PG', 'Working Professional'
    interested_stream TEXT NOT NULL, -- e.g. 'Engineering & Tech', 'Management', etc.
    preferred_location TEXT,
    message TEXT,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'scheduled', 'completed', 'archived')),
    assigned_counsellor TEXT
);

-- Index for quick lookup
CREATE INDEX IF NOT EXISTS idx_counselling_created_at ON public.counselling_requests (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_counselling_status ON public.counselling_requests (status);

-- 2. Institutional Partnership & Marketing Inquiries
CREATE TABLE IF NOT EXISTS public.institution_inquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    institute_name TEXT NOT NULL,
    contact_person TEXT NOT NULL,
    designation TEXT,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    location TEXT,
    services_requested TEXT[] DEFAULT '{}', -- e.g. {'Lead Generation', 'Branding', 'Social Media', 'Outreach'}
    annual_intake_goal TEXT,
    message TEXT,
    status TEXT DEFAULT 'new' CHECK (status IN ('new', 'in_discussion', 'proposal_sent', 'partnered', 'closed'))
);

CREATE INDEX IF NOT EXISTS idx_institution_created_at ON public.institution_inquiries (created_at DESC);

-- 3. Colleges & Universities Directory
CREATE TABLE IF NOT EXISTS public.colleges (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    short_name TEXT,
    city TEXT NOT NULL,
    state TEXT NOT NULL,
    rating NUMERIC(2, 1) DEFAULT 4.5,
    reviews_count INT DEFAULT 120,
    established_year INT,
    accreditation TEXT, -- e.g. 'NAAC A++', 'NIRF Top 50', 'NBA'
    fees_range TEXT NOT NULL, -- e.g. '₹2.5L - ₹4.5L / year'
    avg_package TEXT, -- e.g. '₹8.5 LPA'
    highest_package TEXT, -- e.g. '₹42 LPA'
    streams TEXT[] NOT NULL DEFAULT '{}',
    campus_size TEXT,
    featured BOOLEAN DEFAULT false,
    image_url TEXT
);

-- 4. Courses & Streams Directory
CREATE TABLE IF NOT EXISTS public.courses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    title TEXT NOT NULL,
    stream TEXT NOT NULL,
    level TEXT NOT NULL, -- 'Undergraduate', 'Postgraduate', 'Diploma'
    duration TEXT NOT NULL, -- e.g. '4 Years', '2 Years'
    eligibility TEXT NOT NULL,
    career_outcomes TEXT[] DEFAULT '{}',
    avg_starting_salary TEXT,
    icon_name TEXT
);

-- 5. Row Level Security (RLS) Configuration
ALTER TABLE public.counselling_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.institution_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.colleges ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to submit counselling and institutional inquiries (insert only)
CREATE POLICY "Allow public insert on counselling_requests" 
    ON public.counselling_requests 
    FOR INSERT 
    TO anon, authenticated 
    WITH CHECK (true);

CREATE POLICY "Allow public insert on institution_inquiries" 
    ON public.institution_inquiries 
    FOR INSERT 
    TO anon, authenticated 
    WITH CHECK (true);

-- Allow public read access to colleges and courses
CREATE POLICY "Allow public read on colleges" 
    ON public.colleges 
    FOR SELECT 
    TO anon, authenticated 
    USING (true);

CREATE POLICY "Allow public read on courses" 
    ON public.courses 
    FOR SELECT 
    TO anon, authenticated 
    USING (true);

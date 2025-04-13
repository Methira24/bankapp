import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import { sanitize } from 'isomorphic-dompurify';

// Rate limiting configuration
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});

// CORS configuration
const corsOptions = {
  origin: process.env.EXPO_PUBLIC_APP_URL,
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  maxAge: 86400 // 24 hours
};

// Input sanitization middleware
const sanitizeInput = (obj: any): any => {
  if (typeof obj !== 'object') return sanitize(obj);
  
  return Object.keys(obj).reduce((acc, key) => ({
    ...acc,
    [key]: typeof obj[key] === 'object' 
      ? sanitizeInput(obj[key])
      : sanitize(obj[key])
  }), {});
};

export async function POST(request: Request) {
  try {
    // Apply rate limiting
    await limiter(request);

    // Parse and sanitize input
    const rawData = await request.json();
    const sanitizedData = sanitizeInput(rawData);

    // Initialize Supabase client with RLS
    const supabase = createServerSupabaseClient();

    // Verify JWT token
    const { data: { session }, error: authError } = await supabase.auth.getSession();
    
    if (authError || !session) {
      return new Response('Unauthorized', { status: 401 });
    }

    // Process the authenticated and sanitized request
    // Add your business logic here

    return new Response(JSON.stringify({ success: true }), {
      headers: {
        'Content-Type': 'application/json',
        ...corsOptions
      }
    });

  } catch (error) {
    console.error('API Error:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
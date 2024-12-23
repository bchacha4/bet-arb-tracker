import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    if (!RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is not set')
    }

    const { feedback, userEmail } = await req.json()
    console.log('Received feedback request:', { feedback, userEmail })

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Bettor-IQ <onboarding@resend.dev>',
        to: 'bryan@bettor-iq.com',
        subject: 'New Feedback Received',
        html: `
          <h2>New Feedback Received</h2>
          <p><strong>From:</strong> ${userEmail}</p>
          <p><strong>Feedback:</strong></p>
          <p>${feedback}</p>
        `,
      }),
    })

    const data = await res.json()
    console.log('Resend API response:', data)

    if (!res.ok) {
      throw new Error(`Failed to send email: ${JSON.stringify(data)}`)
    }

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    console.error('Error in send-feedback function:', error)
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    })
  }
})
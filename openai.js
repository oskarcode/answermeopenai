addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const { text } = await request.json()
  if (!text) {
    return new Response(JSON.stringify({ error: "No text provided" }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  const OPENAI_API_KEY = 'your_openai_api_key'
  const SYSTEM_PROMPT = `
    You are an AI assistant.
    - Explain the following text in plain English.
    - Draft a professional response to the given content.

    Provide both explanation and response.
  `

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: text },
      ],
    }),
  })

  if (!response.ok) {
    return new Response(JSON.stringify({ error: "OpenAI API Error" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  const result = await response.json()
  const explanation = result.choices[0]?.message?.content || 'Error: No content'
  return new Response(
    JSON.stringify({ explanation }),
    { headers: { 'Content-Type': 'application/json' } }
  )
}

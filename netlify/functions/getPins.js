import fetch from 'node-fetch';

export async function handler() {
  const accessToken = process.env.PINTEREST_ACCESS_TOKEN;

  if (!accessToken) {
    return { statusCode: 403, body: JSON.stringify({ error: 'Access token not set' }) };
  }

  try {
    const res = await fetch('https://api.pinterest.com/v5/me/pins', {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    const data = await res.json();
    return { statusCode: 200, body: JSON.stringify(data) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
}

export default async function handler(req, res) {
  try {
    const token = process.env.PINTEREST_ACCESS_TOKEN;

    if (!token) return res.status(500).json({ error: "Missing Pinterest access token" });

    const response = await fetch("https://api.pinterest.com/v5/boards", {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) {
      const text = await response.text();
      return res.status(response.status).json({ error: text });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (err) {
    console.error("Error in getBoards:", err);
    return res.status(500).json({ error: err.message });
  }
}

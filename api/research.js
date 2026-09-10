export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Sirf POST allowed hai' });
  }
  const { query } = req.body;
  if (!query) {
    return res.status(400).json({ error: 'query chahiye' });
  }
  const results = [];
  try {
    const redditRes = await fetch(
      'https://www.reddit.com/search.json?q=' + encodeURIComponent(query) + '&limit=6&sort=relevance',
      { headers: { 'User-Agent': 'BlackHoleAI/1.0' } }
    );
    if (redditRes.ok) {
      const redditData = await redditRes.json();
      const posts = redditData?.data?.children || [];
      for (const p of posts) {
        const d = p.data;
        results.push({ source: 'Reddit', title: d.title, snippet: (d.selftext || '').slice(0, 400), url: 'https://reddit.com' + d.permalink });
      }
    }
  } catch (e) {}
  try {
    const ddgRes = await fetch('https://api.duckduckgo.com/?q=' + encodeURIComponent(query) + '&format=json&no_html=1&skip_disambig=1');
    if (ddgRes.ok) {
      const ddgData = await ddgRes.json();
      if (ddgData.AbstractText) {
        results.push({ source: 'DuckDuckGo', title: ddgData.Heading || query, snippet: ddgData.AbstractText, url: ddgData.AbstractURL || '' });
      }
    }
  } catch (e) {}
  return res.status(200).json({ query, results });
}

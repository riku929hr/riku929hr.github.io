const OG_IMAGE_PATTERN =
  /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']|<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i;

export async function fetchOgImage(url: string): Promise<string | undefined> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; riku929hr-portfolio-ogp-fetcher/1.0)",
      },
    });
    clearTimeout(timeout);
    if (!res.ok) return undefined;

    const html = await res.text();
    const match = html.match(OG_IMAGE_PATTERN);
    return match?.[1] ?? match?.[2];
  } catch {
    return undefined;
  }
}

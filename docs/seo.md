# Search visibility

The public URL is https://mck-d.github.io/. GitHub Pages supports this static site;
no server runtime or custom domain is needed for indexing.

`pnpm build` renders the portfolio into `dist/index.html` before deployment, so
the initial HTML contains the same content as the interactive React page. The
client mounts normally, preserving the introduction and interactions.

The HTML head contains a descriptive title, canonical URL, social metadata, and
Person, WebSite and ProfilePage structured data. `public/robots.txt` allows crawling
and points to `public/sitemap.xml`. Update these URLs if the domain changes.

## After deploying

1. Publish a new version tag: the Pages workflow only deploys version tags.
2. Add `https://mck-d.github.io/` as a URL-prefix property in Google Search Console.
3. Verify ownership using the HTML file or meta tag provided by Google. Put a
   verification file in `public/`, or add the provided tag to `index.html`, then
   deploy again. Keep it in the repository to preserve verification.
4. Submit `https://mck-d.github.io/sitemap.xml` in Search Console's Sitemaps section.
5. Inspect `https://mck-d.github.io/`, test the live URL, and request indexing.
6. Link this portfolio from your GitHub and LinkedIn profiles to help discovery.

Google controls indexing and ranking. Crawling may take days to weeks; submitting
a sitemap or requesting indexing does not guarantee inclusion or a specific rank.

References:
- https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics
- https://support.google.com/webmasters/answer/9012289
- https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl

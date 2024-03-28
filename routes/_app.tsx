import { PageProps } from "$fresh/server.ts";

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="The ET Improv Club" />
        <meta name="author" content="Enric Perpinyà Pitarch" />
        <meta name="keywords" content="improv, theater, english, club" />
        <link rel="preload" href="/fonts/Montserrat-Thin.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Rye-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/background_landing.webp" as="image" type="image/webp" crossOrigin="anonymous" />
        <link rel="stylesheet" href="/styles.css" />
        <title>The ET Improv Club</title>
      </head>
      <body className="bg-[#020c2e]">
        <Component />
      </body>
    </html>
  );
}

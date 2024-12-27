import '../index.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="%PUBLIC_URL%/jewel.png" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Gems and Jewels" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/jewel.png" />
        <meta property="og:url" content="%PUBLIC_URL%/collageminifiedpng.png" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Jack's 29th Birthday" />
        <meta property="og:description" content="Gems and Jewels" />
        <meta property="og:image" content="%PUBLIC_URL%/collageminifiedpng.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="jackandlizziethrowaparty.com" />
        <meta property="twitter:url" content="%PUBLIC_URL%/collageminifiedpng.png" />
        <meta name="twitter:title" content="Jack's 29th Birthday" />
        <meta name="twitter:description" content="Gems and Jewels" />
        <meta name="twitter:image" content="%PUBLIC_URL%/collageminifiedpng.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <title>Jack&apos;s 29th Birthday</title>
      </head>

      <body>
        <div id="root">{children}</div>
      </body> 
    </html>
  )
}
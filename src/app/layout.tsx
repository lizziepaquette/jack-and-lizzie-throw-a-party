import '../index.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jack\'s 29th Birthday',
  description: 'Gems and Jewels',
  openGraph: {
    title: 'Jack\'s 29th Birthday',
    description: 'Gems and Jewels',
    url: 'https://i.postimg.cc/TPPvNbZb/collageminifiedpng.png',
    images: [
      {
        url: 'https://i.postimg.cc/TPPvNbZb/collageminifiedpng.png',
      },
    ],
    locale: 'en_US',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <title>Jack&apos;s 29th Birthday</title>
      </head>

      <body>
        <div id="root">{children}</div>
      </body> 
    </html>
  )
}
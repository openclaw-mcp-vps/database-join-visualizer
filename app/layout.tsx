import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Database Join Visualizer – Visual SQL Query Builder",
  description: "Drag-and-drop interface to build complex SQL joins with real-time visualization of table relationships."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="41edcc94-56de-4440-b6d1-94365fb2243e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}

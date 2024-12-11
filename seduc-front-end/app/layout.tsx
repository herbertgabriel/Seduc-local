export const metadata = {
  title: 'EducaRecife',
  description: 'Generated by Unit Students',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
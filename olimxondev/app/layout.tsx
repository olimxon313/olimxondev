import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "Olimxon - Creative web developer",
  description: "dev site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

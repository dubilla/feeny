import type { ReactNode } from "react";

export const metadata = {
  title: "Feeny API",
  description: "Content backend for the Feeny iPad app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

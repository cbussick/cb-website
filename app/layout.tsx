import ThemeRegistry from "@/theme/ThemeRegistry";
import { font } from "@/theme/font";
import { CssBaseline } from "@mui/material";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christopher Bussick",
  description: "My personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={font.className}>
      <body>
        <main>
          <ThemeRegistry>
            <CssBaseline />

            {children}
          </ThemeRegistry>
        </main>
      </body>
    </html>
  );
}

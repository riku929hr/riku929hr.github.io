import "@/styles/globals.css";
import { NotoSansJPRegular } from "@/app/_ui/fonts";

export const metadata = {
  title: "riku929hr",
  description: "Rikuto Sato (@riku929hr) - Web Developer / Software Engineer",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${NotoSansJPRegular.className} antialiased`}>
      <body>{children}</body>
    </html>
  );
}

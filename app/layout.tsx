import type { Metadata } from "next";
import './globals.css'
import { WeatherProvider } from "@/components/WeatherContext";
export const metadata: Metadata = {
  title: "Daily Weather",
  description: "Get accurate, up-to-the-minute weather forecasts for any location. Plan your day with current conditions, hourly, and daily predictions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <WeatherProvider>
          {children}
        </WeatherProvider>
      </body>
    </html>
  );
}

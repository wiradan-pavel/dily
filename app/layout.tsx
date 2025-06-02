import type { Metadata } from "next";
import { PagesLayout, StoreProvider } from "@/components/layouts";
import "./globalStyles/globals.scss";

export const metadata: Metadata = {
  title: "Dily.ru | Интернет-магазин",
  description: "Интернет-магазин",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <PagesLayout>{children}</PagesLayout>
    </StoreProvider>
  );
}

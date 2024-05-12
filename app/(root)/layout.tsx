
import Header from "@/components/shared/Header";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import('@/components/shared/Footer'), { ssr: false })

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    );
  }
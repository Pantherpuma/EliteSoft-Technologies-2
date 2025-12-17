import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "EliteSoft Technologies",
  description:
    "EliteSoft Technologies delivers AI, cloud, cybersecurity, and full-stack software solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen bg-black text-gray-100">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

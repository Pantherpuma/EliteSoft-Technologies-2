import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black border-b border-gray-800 px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold text-white">
        EliteSoft Technologies
      </Link>
      <div className="space-x-6 text-gray-300">
        <Link href="/services">Services</Link>
        <Link href="/products">Products</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}

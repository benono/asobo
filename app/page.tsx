import Link from "next/link";

const items = [
  { label: "Home", href: "/" },
  { label: "いろあそび", href: "/color" },
  { label: "どうぶつなあに", href: "/animal" },
];

export default function Home() {
  return (
    <main className="">
      <nav className="flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          {items.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </main>
  );
}

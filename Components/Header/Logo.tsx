import Link from "next/link";
export default function Logo() {
  return (
    <Link
      href={"/"}
      title="Taksi Arama Servisi"
      className="text-2xl font-bold text-white"
    >
      TAKSİ <span className="text-primary">ARAMA</span>
    </Link>
  );
}

import Image from "next/image";
import img from "../public/assets/images/404err.jpg";
export default function NotFound() {
  return (
    <section className="flex items-center justify-center">
      <Image src={img} width={500} height={400} alt="Not Found" />
    </section>
  );
}

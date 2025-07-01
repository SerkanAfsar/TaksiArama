import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";

export default function Footer() {
  return (
    <footer className="bg-footerBg mt-auto block w-full">
      <FooterTop />
      <FooterBottom />
    </footer>
  );
}

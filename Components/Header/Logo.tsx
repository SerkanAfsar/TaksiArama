import Image from "next/image";
import logo from "../../public/assets/images/logo.png";
export default function Logo() {
  return <Image src={logo} alt="Taksi Durakları" width={163} height={42} />;
}

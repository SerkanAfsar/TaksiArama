import Link from "next/link";
import ContainerWrapper from "../Common/ContainerWrapper";

export default function FooterBottom() {
  return (
    <section className="bg-footerBottomBg block w-full py-3 text-sm font-bold text-white">
      <ContainerWrapper className="flex flex-col items-center justify-between gap-3 md:flex-row">
        <span>Copyright 2025 © Taksi Durakları</span>
        <div>
          Powered By{" "}
          <Link
            href={"https://www.linkedin.com/feed/"}
            className="text-primary underline"
            target="_blank"
          >
            JesterColony
          </Link>
        </div>
      </ContainerWrapper>
    </section>
  );
}

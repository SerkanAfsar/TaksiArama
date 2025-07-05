import CustomSeoTags from "@/Components/Common/CustomSeoTags";
import CityListSection from "@/Sections/CityListSection";
import { envVariables } from "@/Utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Türkiye İl İlçe Taksi Durakları | Taksi Numaraları",
  description: "Türkiye İl İlçe Taksi Durakları | Taksi Numaraları",
  robots: "index,follow",
  publisher: "Taksi Durakları",
  authors: [
    {
      name: "Taksi Durakları",
      url: envVariables.NEXT_PUBLIC_SITE_NAME,
    },
  ],

  openGraph: {
    title: "Türkiye İl İlçe Taksi Durakları | Taksi Numaraları",
    description: "Türkiye İl İlçe Taksi Durakları | Taksi Numaraları",
    url: envVariables.NEXT_PUBLIC_SITE_NAME,
    locale: "tr_TR",
    siteName: "Taksi Durakları",
    authors: ["Taksi Durakları"],
    emails: ["info@taksiduraklari.net"],
  },

  twitter: {
    card: "summary",
    description: "Türkiye İl İlçe Taksi Durakları | Taksi Numaraları",
    title: "Türkiye İl İlçe Taksi Durakları | Taksi Numaraları",
    creator: "@taksiduraklari",
  },

  alternates: {
    canonical: envVariables.NEXT_PUBLIC_SITE_NAME,
  },
};

export default function Page() {
  return (
    <>
      <CustomSeoTags title="Türkiye İl İlçe" h1Show={true} />
      <CityListSection />
    </>
  );
}

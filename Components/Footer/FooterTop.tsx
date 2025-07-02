import Link from "next/link";
import ContainerWrapper from "../Common/ContainerWrapper";
import { generateCityUrl } from "@/Utils";

export default function FooterTop() {
  return (
    <ContainerWrapper className="font-Poppins flex flex-col gap-6 py-10 text-white md:flex-row">
      <div className="flex basis-1 flex-col gap-3 md:basis-1/3">
        <h6 className="text-primary text-xl font-bold uppercase">Hakkımızda</h6>
        <p>
          Taksi Durakları sitesi sizlere Türkiye il ve ilçelerine göre arama
          listesi sunar. Telefon ve adres detaylarına bakarak taksi listelerine
          ulaşabilirsiniz. İyi günler dileriz.
        </p>
      </div>
      <div className="flex basis-1 flex-col gap-3 md:basis-2/3">
        <h6 className="text-primary text-xl font-bold uppercase">Hızlı Menü</h6>
        <ul className="footerNavigation">
          <li>
            <Link
              href={generateCityUrl("istanbul")}
              title="İstanbul Taksi Durakları"
            >
              İstanbul Taksi Durakları
            </Link>
          </li>
          <li>
            <Link
              href={generateCityUrl("ankara")}
              title="Ankara Taksi Durakları"
            >
              Ankara Taksi Durakları
            </Link>
          </li>
          <li>
            <Link href={generateCityUrl("izmir")} title="İzmir Taksi Durakları">
              İzmir Taksi Durakları
            </Link>
          </li>
          <li>
            <Link href={generateCityUrl("bursa")} title="Bursa Taksi Durakları">
              Bursa Taksi Durakları
            </Link>
          </li>
          <li>
            <Link
              href={generateCityUrl("eskişehir")}
              title="Eskişehir Taksi Durakları"
            >
              Eskişehir Taksi Durakları
            </Link>
          </li>
          <li>
            <Link href={generateCityUrl("adana")} title="Adana Taksi Durakları">
              Adana Taksi Durakları
            </Link>
          </li>
          <li>
            <Link href={generateCityUrl("konya")} title="Konya Taksi Durakları">
              Konya Taksi Durakları
            </Link>
          </li>
          <li>
            <Link
              href={generateCityUrl("kayseri")}
              title="Kayseri Taksi Durakları"
            >
              Kayseri Taksi Durakları
            </Link>
          </li>
          <li>
            <Link
              href={generateCityUrl("kocaeli")}
              title="Kocaeli Taksi Durakları"
            >
              Kocaeli Taksi Durakları
            </Link>
          </li>
          <li>
            <Link
              href={generateCityUrl("malatya")}
              title="Malatya Taksi Durakları"
            >
              Malatya Taksi Durakları
            </Link>
          </li>
          <li>
            <Link
              href={generateCityUrl("elazığ")}
              title="Elazığ Taksi Durakları"
            >
              Elazığ Taksi Durakları
            </Link>
          </li>
          <li>
            <Link href={generateCityUrl("kilis")} title="Kilis Taksi Durakları">
              Kilis Taksi Durakları
            </Link>
          </li>
        </ul>
      </div>
    </ContainerWrapper>
  );
}

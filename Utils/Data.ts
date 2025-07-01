import { MenuItemType } from "@/Types";
import slider1 from "../public/assets/images/slider1.jpg";
import slider2 from "../public/assets/images/slider2.jpg";

import serviceIcon1 from "../public/assets/images/serviceicon1.png";
import serviceIcon2 from "../public/assets/images/serviceicon2.png";
import serviceIcon3 from "../public/assets/images/serviceicon3.png";
import serviceIcon4 from "../public/assets/images/serviceicon4.png";
import { generateCityUrl } from "./utils";

export const MenuData: MenuItemType[] = [
  {
    title: "Anasayfa",
    url: "/",
  },
  {
    title: "Tüm İller",
    url: "/taksi-duraklari",
  },
  {
    title: "İstanbul Taksi Durakları",
    url: generateCityUrl("istanbul"),
  },
  {
    title: "Ankara Taksi Durakları",
    url: generateCityUrl("ankara"),
  },
  {
    title: "İzmir Taksi Durakları",
    url: generateCityUrl("izmir"),
  },
];

export const SliderData: { image: any }[] = [
  { image: slider1 },
  { image: slider2 },
];

export const ServicesData: { image: any; title: string; content: string }[] = [
  {
    content:
      "Şehrinizin herhangi bir yerine sizi hızlı ve konforlu bir şekilde ulaştıracağız",
    image: serviceIcon1,
    title: "Hızlı şehir transferi",
  },
  {
    content:
      "Rahat bir otele ihtiyacınız varsa, operatörlerimiz sizin için rezervasyon yapacak ve adrese taksiyle gideceksiniz.",
    image: serviceIcon2,
    title: "Hotel Transferi",
  },
  {
    content:
      "Şehrinizin herhangi bir yerine sizi hızlı ve konforlu bir şekilde ulaştıracağız",
    image: serviceIcon3,
    title: "Havaalanı transferi",
  },
  {
    content:
      "Rahat bir otele ihtiyacınız varsa, operatörlerimiz sizin için rezervasyon yapacak ve adrese taksiyle gideceksiniz.",
    image: serviceIcon4,
    title: "Bagaj taşıma",
  },
];

export const ApiUrlList = {
  CityListUrl: "Cities",
  CityDetailUrlUrl: "Cities/City",
} as const;

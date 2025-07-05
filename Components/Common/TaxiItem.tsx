import { TaxiType } from "@/Types";
import { MapPin, MapPinned, Phone } from "lucide-react";

export default function TaxiItem({ item }: { item: TaxiType }) {
  function maskInput(val: string) {
    const x = val.replace(/\D/g, "").slice(0, 12);
    let formatted = "";

    if (x.length >= 1) formatted = "(" + x.slice(0, 4);
    if (x.length >= 4) formatted += ") " + x.slice(4, 7);
    if (x.length >= 7) formatted += "-" + x.slice(7, 12);
    return formatted;
  }
  return (
    <div className="border-primary flex h-full flex-col overflow-hidden rounded-md border text-sm">
      <div className="bg-primary flex min-h-12 items-center justify-center p-3 text-center font-bold">
        {item.durakAd}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex gap-3">
          <MapPin size={20} className="shrink-0 grow-0" />
          <span className="-mt-1 leading-6">{item.durakAdres}</span>
        </div>
        <div className="mb-2 flex gap-3">
          <Phone size={20} className="shrink-0 grow-0" />
          <a
            rel="nofollow"
            title={`${item.durakAd} Telefon Numarası`}
            href={`tel:${item.durakTel}`}
            className="underline"
          >
            {maskInput(item.durakTel)}
          </a>
        </div>
        <a
          rel="no-follow"
          target="_blank"
          href={`https://www.google.com/maps/dir/?api=1&destination=${item.latitude},${item.longitude}&travelmode=driving`}
          className="bg-primary mt-auto flex items-center justify-center gap-3 rounded-md border-2 p-2 text-sm font-semibold text-black"
        >
          <MapPinned size={20} />
          <span>Haritada Görüntüle</span>
        </a>
      </div>
    </div>
  );
}

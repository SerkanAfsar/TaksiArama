export default function CustomSeoTags({
  title,
  h1Show = false,
}: {
  title: string;
  h1Show: boolean;
}) {
  return (
    <>
      {h1Show && <h1 className="hidden">{title} Taksi Durakları</h1>}

      <h2 className="hidden">{title} Taksi Numaraları</h2>
      <h3 className="hidden">{title} En Yakın Taksi Durakları</h3>
      <h4 className="hidden">{title} En Yakın Taksi Numaraları</h4>
      <h5 className="hidden">{title} Taksi Listesi</h5>
    </>
  );
}

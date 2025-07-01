export type InfoDetailItemProps = {
  icon: any;
  content: string;
};
export default function InfoDetailItem({ content, icon }: InfoDetailItemProps) {
  return (
    <div className="text-fontColor inline-flex w-full items-center justify-start gap-3 font-bold uppercase">
      <span className="rounded-full bg-white p-3">{icon}</span>
      <span>{content}</span>
    </div>
  );
}

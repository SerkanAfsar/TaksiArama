export default function WrapperContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full lg:flex-3/4">{children}</div>;
}

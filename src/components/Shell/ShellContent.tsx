export default function ShellContent({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 m-4 p-5 grow bg-black">
      {children}
    </div>
  );
}

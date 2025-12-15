import ShellContent from "./ShellContent";
import ShellHeader from "./ShellHeader";

export default function Shell({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col bg-black text-white w-full min-h-screen">
      <ShellHeader />
      <ShellContent>{children}</ShellContent>
    </div>
  );
}

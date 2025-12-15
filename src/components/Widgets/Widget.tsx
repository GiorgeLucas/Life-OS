import { cn } from "@/lib/utils";

export default function Widget({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 border border-white/10 p-6 rounded-xl min-w-70 select-none",
        className,
      )}
    >
      {children}
    </div>
  );
}

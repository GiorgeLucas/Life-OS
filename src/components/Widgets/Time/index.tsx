import { MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import Widget from "@/components/Widgets/Widget";

export default function Time() {
  const [now, setNow] = useState(
    () => new Date(),
  );

  useEffect(() => {
    const id = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <Widget className="max-w-70">
      <p className="font-geist font-semibold text-center text-5xl text-white">
        {now.toLocaleTimeString("pt-BR", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })}
      </p>
      <p className="font-geist font-medium text-center text-sm text-white">
        {now.toLocaleDateString("pt-BR", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>
      <div className="flex gap-1 justify-center items-center">
        <MapPin className="size-4 text-neutral-400" />
        <p className="font-geist font-medium text-center text-sm text-neutral-400">
          São Paulo, SP
        </p>
      </div>
    </Widget>
  );
}

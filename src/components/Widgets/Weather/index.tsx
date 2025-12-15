import Widget from "@/components/Widgets/Widget";
import { Cloud } from "lucide-react";

export default function Weather() {
  return (
    <Widget className="max-w-70 items-center">
      <div className="flex items-start gap-4">
        <Cloud className="size-16" />
        <div className="flex flex-col gap-2">
          <p className="font-geist font-semibold text-5xl">
            26°C
          </p>
          <p className="font-geist font-medium text-neutral-400">
            Nublado
          </p>
        </div>
      </div>
    </Widget>
  );
}

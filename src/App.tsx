import Shell from "@/components/Shell";
import Time from "@/components/Widgets/Time";
import Weather from "@/components/Widgets/Weather";

function App() {
  return (
    <Shell>
      <div className="flex flex-col gap-2">
        <Time />
        <Weather />
      </div>
    </Shell>
  );
}

export default App;

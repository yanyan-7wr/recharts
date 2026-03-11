import SimpleAreaChart from "@/components/LineChart";
import Linechart from "../components/LineChart";

export default function Welcome() {
  return (
    <div className="p-6 flex flex-col items-center w-full gap-6">
      <h1 className="text-center p-4">
        My very first data visualization using Recharts
      </h1>

      <div className="w-full max-w-3xl">
        <Linechart />
      </div>

      <div className="p-10 border rounded-[20px] shadow-md w-full max-w-3xl">
        <SimpleAreaChart />
      </div>
    </div>
  );
}
import React from "react";
import Linechart from "../components/LineChart";
import ComposedChart from "../components/ComposedChart";

import BarChart from "../components/BarChart";

export default function Welcome() {
  return (
    <div>
      <h1>My very first data visualization</h1>

      <Linechart />
      <ComposedChart />
      <BarChart />
    

    </div>
  );
}
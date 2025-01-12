import React, { useState } from "react";
import { AgCharts } from "ag-charts-react";

const DoughnutChart: React.FC = () => {
  const [options, setOptions] = useState({
    series: [
      {
        type: "donut",
        angleKey: "amount",
        innerRadiusRatio: 0.6,
        innerLabels: [
          { text: "₦500", fontWeight: "bold", fontSize: 24, color:'#1f2937' },
          { text: "of ₦849,515.00", spacing: 4, fontSize: 12, color: "#4b5563" },
        ],
        innerCircle: { fill: "#fff" },
        showInLegend: false,
        calloutLabelKey: '',
        fills: ["#ff6384", "#36a2eb", "#ffce56"],
      },
    ],
    data: [
      { asset: "Stocks", amount: 50000 },
      { asset: "Bonds", amount: 30000 },
      { asset: "Real Estate", amount: 20000 },
    ],
  });

  return (
    <AgCharts 
      options={options} 
      className="relative z-10" // Lower than modal overlay
      style={{ position: 'relative', zIndex: 10 }}
    />
  );
};

export default DoughnutChart;

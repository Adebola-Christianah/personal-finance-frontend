import React, { useState } from "react";
import { AgCharts } from "ag-charts-react";

// Define the type for the data items
interface DataItem {
  asset: string;
  amount: number;
}

// Function to get the data
const getData = (): DataItem[] => [
  { asset: "Stocks", amount: 50000 },
  { asset: "Bonds", amount: 30000 },
  { asset: "Real Estate", amount: 20000 },
];

// Define the type for chart options
interface ChartOptions {

  series: Array<{
    type: string;
    angleKey: string;
    innerRadiusRatio: number;
    innerLabels: Array<{
      text: string;
      fontWeight?: string;
      fontSize?: number;
      color?: string;
      spacing?: number;
    }>;
    innerCircle: {
      fill: string;
    };
    showInLegend?: boolean; // Optional property for series
    calloutLabelKey?: string; // Optional property for callout labels
    fills?: string[]; // Array of colors for each segment
  }>;
}

const ChartExample: React.FC = () => {
  const [options, setOptions] = useState<ChartOptions>({
   
    series: [
      {
        type: "donut",
        angleKey: "amount",
        innerRadiusRatio: 0.6,
        innerLabels: [
          {
            text: "₦500",
            fontWeight: "bold",
            fontSize: 24,
            color:'#1f2937 '
          },
          {
            text: "of ₦849,515.00",
            spacing: 4,
            fontSize: 12,
            color: "#4b5563",
          },
        ],
        innerCircle: {
          fill: "#fff",
        },
        showInLegend: false, // Set legend visibility
        calloutLabelKey: '', // Suppress individual labels
        fills: ["#ff6384", "#36a2eb", "#ffce56"], // Define colors for each data segment
      },
    ],
    data: getData(), // Add the data here
  });

  return <AgCharts options={options} className="h-64" />;
};

export default ChartExample;

import { Bar } from "react-chartjs-2";
import "chart.js/auto"; // ADD THIS
import List from "@src/components/common/List/List";

const options = {
  responsive: false,
  indexAxis: "y" as const,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

type TopicChartProps = {
  topicContent: string;
  topicCount: number;
};

export default function GraphList(props: { topicChartListData: TopicChartProps[] }) {
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green"],
    datasets: [
      {
        data: props.topicChartListData,
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <List
      items={props.topicChartListData}
      renderItem={() => <Bar data={data} options={options} style={{ height: "150px" }} />}
    />
  );
}

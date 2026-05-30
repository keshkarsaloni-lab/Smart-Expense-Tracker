import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function MonthlyTrendChart() {

  const data = [

    {
      month: "Jan",
      expense: 4000,
    },

    {
      month: "Feb",
      expense: 3000,
    },

    {
      month: "Mar",
      expense: 5000,
    },

    {
      month: "Apr",
      expense: 2500,
    },

    {
      month: "May",
      expense: 4500,
    },

  ];

  return (

    <div
      className="
      bg-white
      p-6
      rounded-xl
      shadow-lg
      mt-10
    "
    >

      <h2
        className="
        text-2xl
        font-bold
        mb-6
      "
      >
        Monthly Spending Trend
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >

        <BarChart data={data}>

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="expense"
          />

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}

export default MonthlyTrendChart;
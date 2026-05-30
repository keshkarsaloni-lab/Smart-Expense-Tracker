import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
} from "recharts";

function ExpenseChart() {

  const data = [
    {
      name: "Income",
      value: 50000,
    },
    {
      name: "Expense",
      value: 5000,
    },
  ];

  const COLORS = [
    "#00C49F",
    "#FF8042",
  ];

  return (

    <PieChart width={400} height={400}>

      <Pie
        data={data}
        dataKey="value"
        outerRadius={120}
        label
      >

        {
          data.map(
            (entry, index) => (
              <Cell
                key={index}
                fill={
                  COLORS[index]
                }
              />
            )
          )
        }

      </Pie>

      <Tooltip />

    </PieChart>
  );
}

export default ExpenseChart;
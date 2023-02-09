import {
  PieChart, Pie, Cell, ResponsiveContainer,
} from 'recharts';

const RADIAN = Math.PI / 180;

interface RenderCustomizedLabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  fill: string;
  percent: number;
  value: number;
  index: number;
  payload: any;
}

const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, payload,
}: RenderCustomizedLabelProps) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text fontFamily="Raleway" x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {payload.name}
    </text>
  );
};

interface PieChartSlice {
  name: string; value: number; color: string;
}
export default function CustomPieChart({ slices }: { slices: PieChartSlice[] }) {
  return (
    <ResponsiveContainer height="100%" width="100%">
      <PieChart width={300} height={300}>
        <Pie
          data={slices}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
        >
          {slices.map((slice) => (
            <Cell key={`cell-${slice.name}`} fill={slice.color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>

  );
}

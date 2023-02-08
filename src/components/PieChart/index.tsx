import React, { PureComponent, useCallback, useState } from 'react';
import {
  PieChart, Pie, Sector, Cell, ResponsiveContainer,
} from 'recharts';
import { Typography, Box } from '@mui/material';
import { theme } from '@/styles/theme';
import { formatCurrency } from '@/utils';

// const renderActiveShape = (props: RenderActiveShapeProps) => {
//   const {
//     cx, cy, innerRadius, outerRadius, startAngle, endAngle, payload,
//   } = props;

//   return (
//     <>
//       <Sector
//         cx={cx}
//         cy={cy}
//         innerRadius={innerRadius}
//         outerRadius={outerRadius}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         fill={payload.color}
//       />
//       <Sector
//         cx={cx}
//         cy={cy}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         innerRadius={outerRadius + 6}
//         outerRadius={outerRadius + 10}
//         fill={payload.color}
//       />
//     </>
//   );
// };

// export default function DonutChart({ slices }: { slices: DonutChartSlice[] }) {

//   return (
//     <Box sx={{
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//     }}
//     >
//       <Typography variant="h5" component="h2">
//         {slices[activeIndex].name}
//       </Typography>

//       <PieChart width={235} height={235}>
//         <Pie
//           activeIndex={activeIndex}
//           activeShape={renderActiveShape}
//           data={slices}
//           cx="50%"
//           cy="50%"
//           innerRadius={60}
//           outerRadius={80}
//           fill={theme.palette.primary.main}
//           dataKey="value"
//           onMouseEnter={onDonutEnter}
//         />
//       </PieChart>

//     </Box>
//   );
// }

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
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = useCallback((_: any, index: number) => {
    setActiveIndex(index);
  }, [setActiveIndex]);
  return (
    <Box display="flex" alignItems="center" justifyContent="center" gap={4}>
      <PieChart width={400} height={400}>
        <Pie
          data={slices}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
          onMouseEnter={onPieEnter}
        >
          {slices.map((slice) => (
            <Cell key={`cell-${slice.name}`} fill={slice.color} />
          ))}
        </Pie>
      </PieChart>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h4" component="h2">
          {slices[activeIndex].name}
        </Typography>
        <Typography variant="h4" component="h2">
          {formatCurrency(slices[activeIndex].value)}
        </Typography>
      </Box>
    </Box>

  );
}

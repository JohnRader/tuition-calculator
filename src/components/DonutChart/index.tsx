import { PieChart, Pie, Sector } from 'recharts';
import { useCallback, useState } from 'react';
import { Typography, Box } from '@mui/material';
import { theme } from '@/styles/theme';
import { formatCurrency } from '@/utils';

interface RenderActiveShapeProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  startAngle: number;
  endAngle: number;
  fill: string;
  payload: any;
  percent: number;
  value: number;
}

const renderActiveShape = (props: RenderActiveShapeProps) => {
  const {
    cx, cy, innerRadius, outerRadius, startAngle, endAngle, payload,
  } = props;

  return (
    <>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={payload.color}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={payload.color}
      />
    </>
  );
};

interface DonutChartSlice {
  name: string; value: number;
}

export default function DonutChart({ slices }: { slices: DonutChartSlice[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const onDonutEnter = useCallback((_: any, index: number) => {
    setActiveIndex(index);
  }, [setActiveIndex]);

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
    >
      <Typography variant="h5" component="h2">
        {slices[activeIndex].name}
      </Typography>

      <PieChart width={235} height={235}>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={slices}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill={theme.palette.primary.main}
          dataKey="value"
          onMouseEnter={onDonutEnter}
        />
      </PieChart>

      <Typography variant="h3" component="h2">
        {formatCurrency(slices[activeIndex].value)}
      </Typography>
    </Box>
  );
}

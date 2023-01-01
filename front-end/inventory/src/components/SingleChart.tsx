import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const ChartInfo = ({ color, info }: any) => {
  return (
    <div className='chart-info'>
      <div className='chart-info-color' style={{ background: color }}></div>
      <p>{info}</p>
    </div>
  );
};

export const SingleChart = ({ data, colors }: any) => {
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill='white'
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline='central'
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className='single-chart-container'>
      <ResponsiveContainer width='100%' height='50%'>
        <PieChart width={100} height={100}>
          <Pie
            data={data}
            cx='50%'
            cy='50%'
            labelLine={false}
            outerRadius={38}
            fill='#8884d8'
            dataKey='value'
          >
            {data.map((entry: any, index: number) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className='chart-info-section'>
        <div className='chart-info-container'>
          {data.map((d: any, i: number) => (
            <ChartInfo info={d.name} color={colors[i % colors.length]} />
          ))}
        </div>
      </div>
    </div>
  );
};

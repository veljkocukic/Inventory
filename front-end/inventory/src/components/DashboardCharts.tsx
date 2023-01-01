import { SingleChart } from './SingleChart';

export const DashboardCharts = () => {
  const data1 = [
    { name: 'Кукуруз', value: 400 },
    { name: 'Пшеница', value: 300 },
    { name: 'Луцерка', value: 300 },
    { name: 'Тритикале', value: 200 },
    { name: 'Овас', value: 278 },
    { name: 'Јечам', value: 189 },
  ];

  const data2 = [
    { name: 'Искоришћено', value: 8 },
    { name: 'Слободно', value: 2 },
  ];

  const colors = [
    '#043323',
    '#4ba164',
    '#d4a936',
    '#649e74',
    '#f7c600',
    '#ff5e5e',
  ];

  return (
    <div className='charts-wrapper'>
      <SingleChart colors={colors} data={data1} />
      <SingleChart colors={colors} data={data2} />
    </div>
  );
};

import type { ChartData } from 'chart.js';

export const mapDataToDoughnutChart = (data: number[], colors: string[], labels?: string[]): ChartData<'doughnut'> => {
  return {
    labels: labels,
    datasets: [
      {
        backgroundColor: colors,
        data: data
      }
    ]
  };
}
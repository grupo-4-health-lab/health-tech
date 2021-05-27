import {
    ApexAxisChartSeries,
    ApexChart,
    ApexXAxis,
    ApexDataLabels,
    ApexYAxis,
    ApexLegend,
    ChartType,
    ApexNonAxisChartSeries
} from "ng-apexcharts";

export interface IChartOptions {
    series: ApexAxisChartSeries | ApexNonAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    dataLabels: ApexDataLabels;
    yaxis: ApexYAxis;
    labels: string[];
    legend: ApexLegend;
};

export interface IChartBox {
    series: ApexAxisChartSeries | ApexNonAxisChartSeries;
    type: ChartType;
    labels: Array<string>;
};

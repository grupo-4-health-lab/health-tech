
import { Component, Input, OnInit } from '@angular/core';
import { IChartOptions, IChartBox } from 'src/app/shared/interfaces/chart.interface';
import { ChartService } from './../../../../../services/chart.service';

@Component({
  selector: 'dashboard-chart',
  templateUrl: './chart-box.component.html',
  styleUrls: ['./chart-box.component.scss']
})
export class ChartBoxComponent implements OnInit {
    @Input() chartDetail: IChartBox = {
        series: [],
        type: 'area',
        labels: []
    };
    public chartOptions: Partial<IChartOptions> = {};
    public colors: Array<string>  = ["#0074D9", "#00A170", "#164aa9", "#690AE1"];

    constructor(private chartService: ChartService) {	}

	ngOnInit(): void {
        this.chartOptions = this.chartService.getOptions(this.chartDetail);
	}
}

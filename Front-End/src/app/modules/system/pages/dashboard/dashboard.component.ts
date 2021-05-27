import { Component } from '@angular/core';
import { IconSetService } from '@coreui/icons-angular';
import { cilBurn, cilPen, cilGroup, cilNewspaper, cilInfo, cilWarning } from '@coreui/icons';

import { IChartBox } from 'src/app/shared/interfaces/chart.interface';
import { ICommunicationMessage } from '../../../../shared/interfaces/comunication.interface';
import { EMessageType } from 'src/app/shared/enums/communication.enum';

@Component({
  selector: 'system-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [IconSetService]
})
export class DashboardComponent {
    public data: Array<number> = new Array(12).fill(0).map(() => Math.floor(Math.random() * (10 + 100)) + 10);
    public data2: Array<number> = new Array(12).fill(0).map(() => Math.floor(Math.random() * (10 + 1000)) + 10);

    public messageList: Array<ICommunicationMessage> = [
        {
            date: new Date(),
            text: 'Existem 9 novos colaboradores na Health Tech.',
            type: EMessageType.DEFAULT
        },
        {
            date: new Date('05-13-2021 08:56:21'),
            text: 'O sistema apresentou algumas instabilidades mas o problema já foi corrigido.',
            type: EMessageType.WARN
        },
        {
            date: new Date('04-26-2021 13:45:07'),
            text: 'Seus dados estão desatualizados.',
            type: EMessageType.URGENT
        }
    ];

    public labels: string[] = [
      new Date('01-01-2021').toISOString(),
      new Date('02-01-2021').toISOString(),
      new Date('03-01-2021').toISOString(),
      new Date('04-01-2021').toISOString(),
      new Date('05-01-2021').toISOString(),
      new Date('06-01-2021').toISOString(),
      new Date('07-01-2021').toISOString(),
      new Date('08-01-2021').toISOString(),
      new Date('09-01-2021').toISOString(),
      new Date('10-01-2021').toISOString(),
      new Date('11-01-2021').toISOString(),
      new Date('12-01-2021').toISOString()
    ];

    public chart: IChartBox = {
        type: 'bar',
        labels: this.labels,
        series: [
            {
                name: 'Absenteísmo',
                data: this.data
            }
        ]
    };

    public chart2: IChartBox = {
        type: 'area',
        labels: this.labels,
        series: [
            {
                name: 'Quantidade de Colaboradores',
                data: this.data2
            }
        ]
    };

    public chart3: IChartBox = {
        type: 'polarArea',
        labels: ['Riscos Tipo 1', 'Riscos Tipo 2', 'Riscos Tipo 3', 'Riscos Tipo 4'],
        series: [20, 56, 71, 45]
    };

    constructor(public iconSet: IconSetService) {
        iconSet.icons = { cilBurn, cilPen, cilGroup, cilNewspaper, cilInfo, cilWarning };
    }
}

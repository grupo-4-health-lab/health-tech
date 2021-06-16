import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { cilPlus } from '@coreui/icons';
import { IconSetService } from '@coreui/icons-angular';

@Component({
  selector: 'cipa-meetings',
  templateUrl: './meetings.page.html',
  styleUrls: [
    './meetings.page.scss',
    '../../../system.page.scss'
  ],
  providers: [IconSetService]
})
export class CipaMeetingsComponent implements OnInit {
    public calendarOptions: CalendarOptions = {
        initialView: 'dayGridMonth',
        locale: 'pt-BR',
        buttonText: {
            today: 'Hoje',
            month: 'Mês',
            week: 'Semana',
            day: 'Dia',
            list: 'Listagem'
        }
    };

    public meetings: Array<{ label: string, date: Date }> = [
        {
            label: 'Reunião de alinhamento CIPA',
            date: new Date(new Date().setDate(new Date().getDate() + 2))
        },
        {
            label: 'Reunião com lideranças',
            date: new Date()
        },
        {
            label: 'Alinhamento de prazos CIPA',
            date: new Date(new Date().setDate(new Date().getDate() + 4))
        },
        {
            label: 'Comunicado Especial CIPA',
            date: new Date(new Date().setDate(new Date().getDate() + 3))
        }
    ];

    public upcomingMeetings = this.meetings.sort((a, b) => a.date.getTime() - b.date.getTime()).slice(0, 3);

    constructor(
        public iconSet: IconSetService
    ) {
        iconSet.icons = {
            cilPlus
        };
    }

    ngOnInit(): void {
        if (window.innerWidth > 1024) {
            this.calendarOptions.height = window.innerHeight - 256;
        }
    }
}

import { Injectable } from '@angular/core';
import { IChartOptions, IChartBox } from '../shared/interfaces/chart.interface';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
    /** Tradução padrão das opções dos gráficos */
    private chartLocales = [{
        name: 'pt-br',
        options: {
            months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            shortMonths: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            days: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
            shortDays: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
            toolbar: {
                download: 'Download SVG',
                selection: 'Seleção',
                selectionZoom: 'Zoom',
                zoomIn: 'Zoom (+)',
                zoomOut: 'Zoom (-)',
                pan: 'Arrastar',
                reset: 'Zoom Padrão',
            }
        }
    }];

    constructor() { }

    /**
     * getChartHeight
     *
     * Calcula a altura de cada gráfico a partir do tamanho da tela
     *
     * @private
     *
     * @author Edu Caribe
     * @since 05/2021
     *
     * @return {number} Altura em pixels
     */
    private getChartHeight(): number {
        return window.screen.availWidth > 768 ? window.screen.availHeight / 2 - 240 : 200;
    }

    /**
     * getOptions
     *
     * Monta o objeto de opções do gráfico
     *
     * @public
     *
     * @author Edu Caribe
     * @since 05/2021
     *
     * @param {IChartBox} detail - Detalhes do gráfico
     * @return {IChartOptions} Dados do gráfico
     */
    public getOptions(detail: IChartBox): IChartOptions {
        return {
            series: detail.series,
            chart: {
                type: detail.type,
                height: this.getChartHeight(),
                zoom: {
                    enabled: false
                },
                defaultLocale: 'pt-br',
                locales: this.chartLocales,
                redrawOnWindowResize: true,
                fontFamily: 'SourceSans',
            },
            dataLabels: {
                enabled: false
            },
            labels: detail.labels,
            xaxis: {
                type: "datetime"
            },
            yaxis: {
                opposite: true
            },
            legend: {
                horizontalAlign: "left"
            }
        };
    }
}

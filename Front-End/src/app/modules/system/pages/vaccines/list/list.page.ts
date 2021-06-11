import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { cilPlus } from '@coreui/icons';
import { IconSetService } from '@coreui/icons-angular';

import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

import { IDataGridAction, IDataGridColumn } from 'src/app/shared/interfaces/data-grid.interface';

@Component({
  selector: 'vaccines-list',
  templateUrl: './list.page.html',
  providers: [IconSetService]
})
  
export class ListVaccinesComponent{

    @ViewChild(ModalComponent) modal: ModalComponent;

    public gridColumns: Array<IDataGridColumn> = [
        {
            key: 'name',
            label: 'Nome'
        },
        {
            key: 'scheme',
            label: 'Esquema'
        },
        {
            key: 'date',
            label: 'Data de vacinação'
        },
        {
            key: 'immunity',
            label: 'Imunidade'
        }
    ];

    public gridRows: Array<any> = [
        {
            name: 'Gripe (Influenza)',
            scheme: 'Reforço anual',
            date: '12/07/2021',
            immunity: 'Sim'
        },
        {
            name: 'Febre Amarela',
            scheme: 'Reforços a cada 10 anos. Para os não vacinados que irão viajar para áreas de risco recomenda-se a vacinação 10 dias antes da partida. Contra Indicada para lactantes e gestantes.',
            date: '13/07/2021',
            immunity: 'Sim'
        },
        {
            name: 'Hepatite B',
            scheme: 'Adultos sem comprovação de vacinação contra Hepatite B, devem receber o esquema completo, de 3 doses. A 2a dose deve ser dada 30 dias após a 1a dose, e a 3a dose 180 dias após a 1a dose. Adultos com esquema incompleto (apenas 1 ou 2 doses), devem completar o esquema. NÃO REINICIAR O ESQUEMA.',
            date: '14/07/2021',
            immunity: 'Não'
        },
        {
            name: 'Tríplice Viral (Sarampo, Caxumba e Rubéola)',
            scheme: 'Adultos sem comprovação de vacinação anterior → mulheres de até 49 anos e homens de até 39 anos podem tomar a vacina. Esquema de dose única.',
            date: '15/07/2021',
            immunity: 'Não'
        }
    ];

    public gridActions: Array<IDataGridAction> = [
        {
            icon: 'cil-pencil',
            classes: 'secondary flat',
            label: 'Editar',
            handler: (vaccine) => this.editVaccine(vaccine)
        },
        {
            icon: 'cil-trash',
            classes: 'warn flat',
            label: 'Excluir',
            handler: ({ name }) => this.deleteVaccine(name)
        }
    ];

    public selectedVaccine: string = '';

    constructor(
        public iconSet: IconSetService,
        public router: Router
    ) {
        iconSet.icons = {
            cilPlus
        };
    }

    /**
     * Redireciona para edição da vacina
     *
     * @public
     *
     * @return {void}
     */
    public editVaccine(vaccine: { name: string, scheme: string, date: string, immunity: string }): void {
        this.router.navigateByUrl('system/vaccines/edit', { state: vaccine });
    }

    /**
     * Abre modal para deleção da vacina
     *
     * @public
     *
     * @return {void}
     */
    public deleteVaccine(name: string): void {
        this.selectedVaccine = name;
        this.modal.toggleModal();
    }

}

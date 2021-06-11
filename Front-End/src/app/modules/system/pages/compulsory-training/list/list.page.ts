import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { cilPlus } from '@coreui/icons';
import { IconSetService } from '@coreui/icons-angular';

import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

import { IDataGridAction, IDataGridColumn } from 'src/app/shared/interfaces/data-grid.interface';

@Component({
  selector: 'compulsory-training-list',
  templateUrl: './list.page.html',
  providers: [IconSetService]
})
export class ListCompulsoryTrainingComponent {

  @ViewChild(ModalComponent) modal: ModalComponent;

  public gridColumns: Array<IDataGridColumn> = [ 
      {
          key: 'type',
          label: 'Tipo'
      },
      {
          key: 'risks',
          label: 'Riscos'
      },
      {
          key: 'date_begin',
          label: 'Data de início'
      },
      {
          key: 'date_end',
          label: 'Data de término'
      }
  ];

  public gridRows: Array<any> = [
      {
          type: 'Brigada de Incêndio',
          risks: 'Morte por asfixia pela fumaça',
          date_begin: '12/05/2021',
          date_end: '12/07/2021'
      },
      {
          type: 'Inflamáveis e Combustíveis',
          risks: 'Morte em chamas',
          date_begin: '12/05/2021',
          date_end: '01/07/2021'
      },
      {
          type: 'Equipamentos de Proteção',
          risks: 'Acidentes',
          date_begin: '12/05/2021',
          date_end: '25/06/2021'
      },
      {
          type: 'Espaços Confinados',
          risks: 'Claustrofobia',
          date_begin: '12/05/2021',
          date_end: '20/07/2021'
      }
  ];

  public gridActions: Array<IDataGridAction> = [
      {
          icon: 'cil-pencil',
          classes: 'secondary flat',
          label: 'Editar',
          handler: (training) => this.editTraining(training)
      },
      {
          icon: 'cil-trash',
          classes: 'warn flat',
          label: 'Excluir',
          handler: ({ type }) => this.deleteTraining(type)
      }
  ];

  public selectedTraining: string = '';

  constructor(
      public iconSet: IconSetService,
      public router: Router
  ) {
      iconSet.icons = {
          cilPlus
      };
  }

  /**
   * Redireciona para edição de treinamento compulsório
   *
   * @public
   *
   * @return {void}
   */
  public editTraining(training: { type: string, functions: string, risks: string, date_begin: string, date_end: string, notify: string, certificate: string }): void {
      this.router.navigateByUrl('system/compulsory-training/edit', { state: training });
  }

  /**
   * Abre modal para deleção de treinamento compulsório
   *
   * @public
   *
   * @return {void}
   */
  public deleteTraining(type: string): void {
      this.selectedTraining = type;
      this.modal.toggleModal();
  }

}

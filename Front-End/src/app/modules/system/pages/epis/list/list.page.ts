import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { cilPlus } from '@coreui/icons';
import { IconSetService } from '@coreui/icons-angular';

import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

import { IDataGridAction, IDataGridColumn } from 'src/app/shared/interfaces/data-grid.interface';

@Component({
  selector: 'epis-list',
  templateUrl: './list.page.html',
  providers: [IconSetService]
})
export class ListEPIsComponent {

  @ViewChild(ModalComponent) modal: ModalComponent;

  public gridColumns: Array<IDataGridColumn> = [
      {
          key: 'type',
          label: 'Tipo'
      },
      {
          key: 'description',
          label: 'Descrição'
      },
      {
          key: 'date_begin',
          label: 'Data de Início'
      },
      {
          key: 'date_end',
          label: 'Data de Término'
      },
      {
          key: 'qnt_stock',
          label: 'Quantidade em Estoque'
      }
  ];

  public gridRows: Array<any> = [
      {
        type: 'Proteção Auditiva',
        description: 'Abafadores de ruídos ou protetores auriculares',
        date_begin: '10/04/2021',
        date_end: '22/08/2021',
        qnt_stock: '131',
      },
      {
        type: 'Proteção Respiratória',
        description: 'Máscaras e filtro',
        date_begin: '10/03/2021',
        date_end: '11/04/2021',
        qnt_stock: '109',
      },
      {
        type: 'Proteção da Cabeça',
        description: 'Capacetes',
        date_begin: '15/05/2021',
        date_end: '12/06/2021',
        qnt_stock: '87',
      },
      {
        type: 'Proteção Visual e Facial',
        description: 'Óculos e viseiras',
        date_begin: '04/05/2021',
        date_end: '11/06/2021',
        qnt_stock: '34',
      }
  ];

  public gridActions: Array<IDataGridAction> = [
      {
          icon: 'cil-pencil',
          classes: 'secondary flat',
          label: 'Editar',
          handler: (epi) => this.editEPI(epi)
      },
      {
          icon: 'cil-trash',
          classes: 'warn flat',
          label: 'Excluir',
          handler: ({ type }) => this.deleteEPI(type)
      }
  ];

  public selectedEPI: string = '';

  constructor(
      public iconSet: IconSetService,
      public router: Router
  ) {
      iconSet.icons = {
          cilPlus
      };
  }

  /**
   * Redireciona para edição de usuário
   *
   * @public
   *
   * @return {void}
   */
  public editEPI(epi: { type: string, description: string, approval_certificate: string, expirationDate_begin: string, expirationDate_end: string, qnt_stock: string }): void {
      this.router.navigateByUrl('system/epis/edit', { state: epi });
  }

  /**
   * Abre modal para deleção de usuário
   *
   * @public
   *
   * @return {void}
   */
  public deleteEPI(type: string): void {
      this.selectedEPI = type;
      this.modal.toggleModal();
  }

}

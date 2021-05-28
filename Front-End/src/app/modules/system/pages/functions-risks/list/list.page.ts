import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { cilPencil, cilTrash, cilPlus } from '@coreui/icons';
import { IconSetService } from '@coreui/icons-angular';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

@Component({
  selector: 'functions-risks-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  providers: [IconSetService]
})
export class ListFunctionRiskComponent implements OnInit {

    @ViewChild(ModalComponent) modal: ModalComponent;

    public jobs: Array<{ job_name: string, CBO_code: string, education: string, experience: string, review_date: string }> = [];
    public selectedJob: string = '';

    constructor(
        public iconSet: IconSetService,
        public router: Router
    ) {
        iconSet.icons = {
            cilPencil,
            cilTrash,
            cilPlus
        };
    }

    ngOnInit(): void {
        this.jobs = [
            {
                job_name: 'Senador',
                CBO_code: '1111-05',
                education: 'Pós Graduação e/ou MBA',
                experience: 'A partir de 10 anos',
                review_date: '21/04/2021'
            },
            {
                job_name: 'Gerente de marketing',
                CBO_code: '1423-15',
                education: 'Formação Superior completa + Especialização',
                experience: 'De 4 a 5 anos',
                review_date: '16/05/2021'
            },
            {
                job_name: 'Juiz do trabalho',
                CBO_code: '1113-45',
                education: 'Superior em curso ou Ensino Médio completo',
                experience: 'De 3 a 4 anos',
                review_date: '12/05/2021'
            },
            {
                job_name: 'Perito criminal',
                CBO_code: '2041-05',
                education: 'Formação Superior completa',
                experience: 'De 1 a 2 anos',
                review_date: '11/04/2021'
            }
        ];
    }

    /**
     * Redireciona para edição de usuário
     *
     * @public
     *
     * @return {void}
     */
    public editUser(job: { job_name: string, CBO_code: string, hierarchy_level: string, education: string, experience: string, review_date: string }): void {
        this.router.navigateByUrl('system/functions/edit', { state: job });
    }

    /**
     * Abre modal para deleção de usuário
     *
     * @public
     *
     * @return {void}
     */
    public deleteUser(job_name: string): void {
        this.selectedJob = job_name;
        this.modal.toggleModal();
    }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'collaborators-edit',
    templateUrl: './edit.page.html',
    styleUrls: [
        '../../../system.page.scss'
    ]
})
export class EditCollaboratorsComponent implements OnInit {

    public user: { name: string, field: string, email: string, cpf: string, city: string };
    public dataForm: FormGroup;

    constructor(
        private router: Router,
        private formBuilder: FormBuilder
    ) {
        this.user = this.router.getCurrentNavigation()?.extras.state as any;

        if (!this.user) {
            this.router.navigateByUrl('system/collaborators/list');
        }
    }

    ngOnInit(): void {
        this.dataForm = this.formBuilder.group(this.user);
    }
}

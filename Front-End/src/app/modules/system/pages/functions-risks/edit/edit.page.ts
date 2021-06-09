import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'functions-risks-edit',
    templateUrl: './edit.page.html',
    styleUrls: [
        './edit.page.scss',
        '../../../system.page.scss'
    ]
})
export class EditFunctionRiskComponent implements OnInit {

    public job: { field: string, cbo: string, sector: string, sector_phone: string };
    public dataForm: FormGroup;

    constructor(
        private router: Router,
        private formBuilder: FormBuilder
    ) {
        this.job = this.router.getCurrentNavigation()?.extras.state as any;

        if (!this.job) {
            this.router.navigateByUrl('system/functions/list');
        }
    }

    ngOnInit(): void {
        this.dataForm = this.formBuilder.group(this.job);
    }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.page.html'
})
export class PasswordResetComponent implements OnInit {
    public codeApplied: string = undefined;

    constructor(private router: ActivatedRoute) { }

    ngOnInit() {
        this.router.queryParams.subscribe(params => {
            if(params.code) {
                this.codeApplied = params.code;
            }
        });
    }
}

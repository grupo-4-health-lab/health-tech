import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'password-reset-code',
  templateUrl: './apply-code.component.html',
  styleUrls: ['../../auth.page.scss']
})
export class ApplyCodeComponent implements OnInit {
    public codeApplied: string = undefined;

    constructor(private router: ActivatedRoute) { }

    ngOnInit() {
        this.codeApplied = this.router.snapshot.paramMap.get('code');
    }
}

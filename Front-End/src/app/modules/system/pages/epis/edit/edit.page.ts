import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'epis-edit',
  templateUrl: './edit.page.html',
  styleUrls: [
    './edit.page.scss',
    '../../../system.page.scss'
  ]
})
export class EditEPIsComponent implements OnInit {

  public epi: { type: string, description: string, approval_certificate: string, expirationDate_begin: string, expirationDate_end: string, qnt_stock: string };
  public dataForm: FormGroup;

  constructor(
      private router: Router,
      private formBuilder: FormBuilder
  ) {
      this.epi = this.router.getCurrentNavigation()?.extras.state as any;

      if (!this.epi) {
          this.router.navigateByUrl('system/epis/list');
      }
  }

  ngOnInit(): void {
      this.dataForm = this.formBuilder.group(this.epi);
  }

}

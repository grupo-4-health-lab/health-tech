import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'cipa-edit',
  templateUrl: './edit.page.html',
  styleUrls: [
    '../../../system.page.scss'
  ]
})
export class EditCipaComponent implements OnInit {

  public cipaUser: { name: string, registry: string, email: string, cpf: string, date: string };
  public dataForm: FormGroup;

  constructor(
      private router: Router,
      private formBuilder: FormBuilder
  ) {
      this.cipaUser = this.router.getCurrentNavigation()?.extras.state as any;

      if (!this.cipaUser) {
          this.router.navigateByUrl('system/cipa/list');
      }
  }

  ngOnInit(): void {
      this.dataForm = this.formBuilder.group(this.cipaUser);
  }

}

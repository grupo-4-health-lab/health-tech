import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'compulsory-training-edit',
  templateUrl: './edit.page.html',
  styleUrls: [
    './edit.page.scss',
    '../../../system.page.scss'
  ]
})
export class EditCompulsoryTrainingComponent implements OnInit {

  public training: { type: string, functions: string, risks: string, date_begin: string, date_end: string, notify: string, certificate: string };
  public dataForm: FormGroup;

  constructor(
      private router: Router,
      private formBuilder: FormBuilder
  ) {
      this.training = this.router.getCurrentNavigation()?.extras.state as any;

      if (!this.training) {
          this.router.navigateByUrl('system/compulsory-training/list');
      }
  }

  ngOnInit(): void {
      this.dataForm = this.formBuilder.group(this.training);
  }

}

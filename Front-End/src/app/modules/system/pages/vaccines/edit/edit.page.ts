import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'vaccines-edit',
  templateUrl: './edit.page.html',
  styleUrls: [
    './edit.page.scss',
    '../../../system.page.scss'
  ]
})
export class EditVaccinesComponent implements OnInit {

  public vaccine: { name: string, scheme: string, date: string, immunity: string};
  public dataForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.vaccine = this.router.getCurrentNavigation()?.extras.state as any;

    if (!this.vaccine) {
        this.router.navigateByUrl('system/collaborators/list');
    }
  }

  ngOnInit(): void {
      this.dataForm = this.formBuilder.group(this.vaccine);
  }

}

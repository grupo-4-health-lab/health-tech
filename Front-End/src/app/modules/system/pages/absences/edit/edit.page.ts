import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'absences-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss']
})
export class EditPage implements OnInit {

  public user: { name: string, type: string, date_begin: string, date_end: string };
  public dataForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.user = this.router.getCurrentNavigation()?.extras.state as any;

    if (!this.user) {
      this.router.navigateByUrl('system/absences/list');
    }
  }

  ngOnInit(): void {
      this.dataForm = this.formBuilder.group(this.user);
  }

}
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'cipa-edit-meeting',
  templateUrl: './edit-meeting.page.html',
  styleUrls: [
    './edit-meeting.page.scss',
    '../../../system.page.scss'
  ]
})
export class EditCipaMeetingComponent implements OnInit {

  public cipaMeeting: { name: string, description: string, date: string };
  public dataForm: FormGroup;

  constructor(
      private router: Router,
      private formBuilder: FormBuilder
  ) {
      this.cipaMeeting = this.router.getCurrentNavigation()?.extras.state as any;

      if (!this.cipaMeeting) {
          this.router.navigateByUrl('system/cipa-meetings/');
      }
  }

  ngOnInit(): void {
      this.dataForm = this.formBuilder.group(this.cipaMeeting);
  }

}

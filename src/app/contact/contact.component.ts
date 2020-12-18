import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public memberBillingTrainingForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {

    this.memberBillingTrainingForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: [ '', Validators.required],
      emailAddress: ['', Validators.required],
      clinicFacilityName: ['', Validators.required],
      TIN: [''],
      completedTheProgram: ['', Validators.required],
      didYouUnderstand: ['', Validators.required],
      question1: ['', Validators.required],
      question2: ['', Validators.required],
      question3: ['', Validators.required],
      comments: ['', Validators.required],
    });


  }

  get f() { return this.memberBillingTrainingForm.controls; }

  onSubmit(){
    console.log(this.memberBillingTrainingForm.value);
  }

}

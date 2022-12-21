import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {
//    TODO    :     Forms Handling

@ViewChild('f') signupForm: NgForm
defaultQuestion: string = 'pet'
answer: string = ''
genders: string[] = ['Male', 'Female']
user = {
  username: '',
  email: '',
  secretQuestion: '',
  answer: '',
  gender: ''
}
submitted = false;

suggestUserName(){
  const suggestedName = 'Super User'
  // this.signupForm.setValue({
  //   userData: {
  //     username: suggestedName,
  //     email: ''
  //   },
  //   secret: 'teacher',
  //   questionAnswer: '',
  //   gender: 'Male'
  // });
  this.signupForm.form.patchValue({
    userData: {
      username: suggestedName
    },
    secret: 'teacher'
  });
}

// onSubmit(form : NgForm){
//   console.log('Submitted!');
//   console.log(form);
//   console.log(this.signupForm);
// }

onSubmit(){
  this.submitted = true;
  console.log(this.signupForm);
  this.user.username = this.signupForm.value.userData.username;
  this.user.email = this.signupForm.value.userData.email;
  this.user.secretQuestion = this.signupForm.value.secret;
  this.user.answer = this.signupForm.value.questionAnswer;
  this.user.gender = this.signupForm.value.gender;

  this.signupForm.reset();
}

}

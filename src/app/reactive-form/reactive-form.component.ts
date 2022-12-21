import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  genders = ['Male', 'Female'];
  forbiddenUserName = ['Chris', 'Anna'];
  signupForm: FormGroup;

  ngOnInit() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [Validators.required, this.forbiddenName.bind(this)]),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([]),
    });

    // this.signupForm.setValue({
    //   userData: {
    //         username: 'suggestedName',
    //         email: 'max@test.com'
    //       },
    //       gender: 'Male',
    //       hobbies: []
    // })

    this.signupForm.patchValue({
      userData: {
            username: 'suggestedName',
            email: 'max@test.com'
          },
          gender: 'Male',
          hobbies: []
    })
  }
  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control) ;
  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset();
  }

  forbiddenName(control: FormControl): {[s: string]: boolean}{
    if (this.forbiddenUserName.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observer<any>{
    const promise = new Promise<any>((resolve, reject) =>{
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true})
        }else{
          resolve(null)
        }
      },1500)
    })
    return promise;
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { errorMessages } from './errorMessages';
import { CustomDirective } from './custom.directive';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  //Declarations
  rForm: FormGroup;
  post: any;
  password: string = '';
  email: string = '';
  choice: string = '';
  temp = true;
  valid = false;
  reset = true;
  errorMessages: any;
  a = "20px";

  constructor(private fb: FormBuilder) {

    // Get errorMessages from the errorMessages File
    this.errorMessages = new errorMessages();
    console.log(errorMessages);

    //Validations
    this.rForm = this.fb.group({
      email: [null, [Validators.compose([Validators.required, Validators.email])]],
      password: [null, [Validators.compose([Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8}$')])]],
      choice: ['Advanced']
    });
  }

  ngOnInit() {


  }

  // When Submit button is tapped the function addPost is called
  addPost(post) {
    // Check whether the form is valid
    if (!post.valid) {
      this.valid = true;
    }
    else {
      this.valid = false;
      console.log(post);
      this.email = post.value.email;
      this.password = post.value.password;
      if (post.choice == null) {
        this.choice = "Advanced";
      }
      else {
        this.choice = post.value.choice;
      }
      this.post = post;
      console.log(this.email);
      console.log(this.password);
      console.log(this.choice);
    }
  }

  //Reset Method To clear the fields
  clearMethod() {
    if (confirm("Are you sure to reset the form ")) {
      this.rForm.reset();
      this.reset = false;
      this.rForm = this.fb.group({
        email: [null],
        password: [null],
        choice: ['Advanced']
      });
      console.log('Reseted Successfully');
    }
  }

  //To check the field contains error or not
  errorAlert(Form: any, Field: any, error: any) {
    return Form.get(Field).hasError(error);
  }

}
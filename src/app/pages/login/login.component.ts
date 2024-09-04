import { Component } from '@angular/core';
import { UsersService } from '../../services/users/users.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  form: FormGroup;

  constructor(private usersService: UsersService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    })
   }

  onClickRegister(): void {
    this.usersService.register(this.form.value)
    .then((response) => {
      console.log(response)
    })
    .catch(error => console.log(error))
  }

  onClickLogin(): void {
    this.usersService.register(this.form.value)
    .then((response) => {
      console.log(response)
    })
    .catch(error => console.log(error))
  }

  onClickLoginGoogle(): void {
    this.usersService.loginWithGoogle()
    .then((response) => {
      console.log(response)
    })
    .catch(error => console.log(error))
  }
}

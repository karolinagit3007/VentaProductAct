import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Register, RegistersService } from '../../services/registers/registers.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private registersService: RegistersService) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      checkPassword: ['', [this.confirmationValidator]],
      nickname: ['', [Validators.required]],
      role: ['Empleado'],
      phoneNumber: ['', [Validators.required]],
      photoURL: [''],
    });
  }

  onClickRegister(): void {
    if (this.form.invalid) return;
  
    const { email, password, nickname, phoneNumber, photoURL, role } = this.form.value;
    
    // El uid se añade en el servicio después de registrar al usuario
    const registerData = { email, nickname, photoURL, phoneNumber, role } as Register;
  
    this.registersService.createRegister({ email, password }, registerData)
      .then((response) => {
        console.log('User registered:', response);
      })
      .catch(error => {
        console.log('Error registering user:', error);
      });
  }

  onClickRegisterWithGoogle(): void {
    this.registersService.createRegisterWithGoogle()
      .then((response) => {
        console.log(response);
      })
      .catch(error => console.log(error));
  }  

  updateConfirmValidator(): void {
    Promise.resolve().then(() => this.form.controls["checkPassword"].updateValueAndValidity());
  }

  confirmationValidator: ValidatorFn = (control: AbstractControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.form.controls["password"].value) {
      return { confirm: true, error: true };
    }
    return {};
  };
}
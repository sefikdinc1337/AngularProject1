import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
import { LoginModel } from '../../models/loginModel';
import { SingleResponseModel } from '../../models/singleResponseModel';
import { TokenModel } from '../../models/tokenModel';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      const loginModel: LoginModel = this.loginForm.value;

      this.authService.login(loginModel).subscribe({
        next: (response: SingleResponseModel<TokenModel>) => {
          this.toastrService.info(response.message);
          localStorage.setItem("token", response.data.token);
        },
        error: (responseError: any) => {
          const errorMessage = responseError?.error?.message || "An error occurred during login.";
          this.toastrService.error(errorMessage);
        }
      });
    }
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IAuthPayload } from '../interfaces/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-exercise136',
  templateUrl: './exercise136.component.html',
  styleUrls: ['./exercise136.component.css'],
})
export class Exercise136Component {
  public loginForm: FormGroup;
  public successMessage: string = '';
  public errorMessage: string = '';

  constructor(
    private formBuild: FormBuilder,
    private authService: AuthService
  ) {
    this.loginForm = this.formBuild.group({
      username: this.formBuild.control(''),
      password: this.formBuild.control(''),
    });
  }

  ngOnInit(): void {
    this.authService.getLoginInformation().subscribe({
      next: (account: IAuthPayload) => {
        this.loginForm.patchValue(account);
      },
      error: (error) => {
        this.errorMessage = error.message;
      },
    });
  }

  public onSubmit() {
    this.authService.login(this.loginForm.value).subscribe({
      next: (message) => {
        this.successMessage = message;
      },
      error: (error) => {
        this.errorMessage = error.message;
      },
    });
  }
}

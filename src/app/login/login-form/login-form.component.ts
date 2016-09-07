import {Component, OnInit} from "@angular/core";
import {
  FormGroup,
  Validators,
  FormBuilder,
} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.component.html',
  styleUrls: ['login-form.component.css'],
  providers: [AuthService]
})
export class LoginFormComponent implements OnInit {

  private loginForm:FormGroup;
  private loginError: boolean;

  public wrongCredentials:boolean;

  constructor(private formBuilder:FormBuilder, private authService: AuthService, private router: Router) {
    this.loginError = false;
    this.wrongCredentials = false;
    this.loginForm = formBuilder.group({
      'email': ['',[
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]],
      'password': ['', [
        Validators.required,
      ]],
    });
  }

  ngOnInit() {
  }

  onSignin() {
    var t = this.authService.signinUser(this.loginForm.value);
    t.then((res) => {
      this.wrongCredentials = false;
      this.router.navigate(['']);
    }).catch((error) => {
      this.wrongCredentials = true;
    });
  }
}

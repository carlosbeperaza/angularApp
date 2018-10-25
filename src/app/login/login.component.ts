import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert';

import { UserServiceService } from '../services/user/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public userServiceService: UserServiceService, public route: Router) { }

  formUser: FormGroup;

  ngOnInit() {

    // VALIDACION DE FORMS
    this.formUser = new FormGroup({
      username: new FormControl( null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  login() {
    this.userServiceService.login(this.formUser.value.username, this.formUser.value.password).toPromise()
    .then(
      (response: any) => {
        localStorage.setItem('X-AUTH-TOKEN', response.token);
        this.route.navigate(['dashboard']);
      }
    ).catch((error) => {
      swal('Oh no!', 'Error', 'warning');
    });
  }

}

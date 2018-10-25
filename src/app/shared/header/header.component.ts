import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user/user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(public userServiceService: UserServiceService) { }

  ngOnInit() {
  }

}

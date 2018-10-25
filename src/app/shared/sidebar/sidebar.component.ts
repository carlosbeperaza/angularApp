import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user/user-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  constructor(public userServiceService: UserServiceService) { }

  ngOnInit() {
  }

}

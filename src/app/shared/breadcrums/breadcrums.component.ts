import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html',
  styles: []
})
export class BreadcrumsComponent implements OnInit {
  title: string;

  constructor( private router: Router, private _title: Title) {
    this.getDataResorce()
    .subscribe(data => {
      this.title = data.title;
      this._title.setTitle('DemoApp | ' + data.title);
    });
   }

  ngOnInit() {
  }

  getDataResorce() {
    return this.router.events.pipe(
      filter(evento => evento instanceof ActivationEnd),
      filter((evento: ActivationEnd) => evento.snapshot.firstChild === null),
      map((evento: ActivationEnd) => evento.snapshot.data)
     );
  }

}

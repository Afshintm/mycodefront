import { Component, OnInit } from '@angular/core';
import { someDataSelector } from '../../../redux/selectors/app.selector';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { select, Store } from '@ngrx/store';
import { IAppState } from '../../../redux/app.state';
import { ISomeData } from '../../../redux/actions/some-data.actions';

@Component({
  selector: 'app-some-widget',
  templateUrl: './some-widget.component.html',
  styleUrls: ['./some-widget.component.less']
})
export class SomeWidgetComponent implements OnInit {
  someData: ISomeData;

  constructor(private store: Store<IAppState>) { }

  ngOnInit() {
    this.store.pipe(select(someDataSelector)).pipe(untilDestroyed(this)).subscribe((someData: any) => {
      this.someData = someData;
    });
  }

  ngOnDestroy() {
  }

}

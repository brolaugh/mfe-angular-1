import { Component } from '@angular/core';
import { format } from 'date-fns';

@Component({
  selector: 'nx-mfe-test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shell';
  public currentDate = format(new Date(2012, 1,1), 'yyyy-mm-dd');
}

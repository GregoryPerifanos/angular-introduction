import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Gregory';

  person0 = {
     givenName: 'Gregory',
    surName: 'Perifanos',
    age: 35,
    email:'greg_pery@hotmail.com',
    address: 'Athens, Greece'
   };

   person1 = {
    givenName: 'John',
    surName: 'Doh',
    age: 0x25,
    email:'john@example.com',
    address: 'New York, USA'
   };

}

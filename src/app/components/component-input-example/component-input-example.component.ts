import { Component } from '@angular/core';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-component-input-example',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './component-input-example.component.html',
  styleUrl: './component-input-example.component.css'
})
export class ComponentInputExampleComponent {
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
  person2 = {
    givenName: 'Jane',
    surName: 'Doh',
    age: 36,
    email:'jane@example.com',
    address: 'New York, USA'
   };
}

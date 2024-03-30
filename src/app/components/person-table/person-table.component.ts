import { Component } from '@angular/core';

@Component({
  selector: 'app-person-table',
  standalone: true,
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  person = {
    givenName: 'Gregory',
    surName: 'Perifanos',
    age: 35,
    email:'greg_pery@hotmail.com'
  }
}

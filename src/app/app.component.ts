import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Gregory';

  person = {
    givenName: 'Gregory',
    surName: 'Perifanos',
    age: 35,
    email:'greg_pery@hotmail.com'
  }
}

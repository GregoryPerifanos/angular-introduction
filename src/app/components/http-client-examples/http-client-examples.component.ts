import { Component, OnInit, inject } from '@angular/core';
import { ChuckNorrisJoke, DadJoke } from 'src/app/shared/interfaces/jokes';
import { JokesService } from 'src/app/shared/services/jokes.service';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-http-client-examples',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './http-client-examples.component.html',
  styleUrl: './http-client-examples.component.css'
})
export class HttpClientExamplesComponent implements OnInit {
  jokesService = inject(JokesService);
  dadJoke = '';
  chuckNorrisJoke = '';

  ngOnInit(): void {
      this.refreshDadJoke();

      this.refreshChuckNorrisJoke();
  }

  refreshDadJoke() {
    this.jokesService.getDadJoke().subscribe((data: DadJoke) => {
      this.dadJoke = data.joke;
    });
  }

  refreshChuckNorrisJoke() {
    this.jokesService.getChuckNorrisJoke()
      .subscribe((data: ChuckNorrisJoke) => {
        console.log(data.value);
        this.chuckNorrisJoke = data.value;
      });
  }
}

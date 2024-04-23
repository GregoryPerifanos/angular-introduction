import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-word-even-length',
  standalone: true,
  imports: [],
  templateUrl: './word-even-length.component.html',
  styleUrl: './word-even-length.component.css'
})
export class WordEvenLengthComponent {
  @Input() words: string[] = [];
  @Input() partialWord: string = '';
}

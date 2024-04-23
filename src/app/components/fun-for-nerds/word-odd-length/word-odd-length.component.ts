import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-word-odd-length',
  standalone: true,
  imports: [],
  templateUrl: './word-odd-length.component.html',
  styleUrl: './word-odd-length.component.css'
})
export class WordOddLengthComponent {
  @Input() words: string[] = [];
  @Input() partialWord: string = '';
}

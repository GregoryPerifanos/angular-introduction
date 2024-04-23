import { Component } from '@angular/core';
import { WordInputComponent } from '../word-input/word-input.component';
import { WordOddLengthComponent } from '../word-odd-length/word-odd-length.component';
import { WordEvenLengthComponent } from '../word-even-length/word-even-length.component';

@Component({
  selector: 'app-fun-for-nerds',
  standalone: true,
  imports: [WordInputComponent, WordOddLengthComponent, WordEvenLengthComponent],
  templateUrl: './fun-for-nerds.component.html',
  styleUrl: './fun-for-nerds.component.css'
})
export class FunForNerdsComponent {
  
  partialOddWord = '';
  partialEvenWord = '';

  oddLengthWords: string[] = [];
  evenLengthWords: string[] = [];

  onPartialWord(word: string) {
    if (word.length % 2 === 0) {
      this.partialEvenWord = word;
      this.partialOddWord = '';
    } else {
      this.partialOddWord = word;
      this.partialEvenWord = '';
    }
  }

  onWord(word: string) {
    if (word.length % 2 === 0) {
      this.evenLengthWords.push(word)
    } else {
      this.oddLengthWords.push(word)
    }
  }
}

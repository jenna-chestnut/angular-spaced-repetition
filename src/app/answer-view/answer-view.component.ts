import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/services/language-service/language.service';
import { LearnComponent } from '../routes/learn/learn.component';

interface keyable {
  [key: string]: any
}

@Component({
  selector: 'app-answer-view',
  templateUrl: './answer-view.component.html',
  styleUrls: ['./answer-view.component.css']
})
export class AnswerViewComponent implements OnInit {
  answer: keyable = this.languageService.answer.answer
  ? this.languageService.answer : {
    answer: 'answer',
    totalScore: 0,
    wordCorrectCount: 0,
    wordIncorrectCount: 0
  };

  isC: string = this.answer.isCorrect
  ? 'correct!' : 'incorrect..';
  language: keyable = {
    language: {name: 'Name'}
  };

  img: string = this.answer.isCorrect
  ? './assets/images/cat-love.webp' : './assets/images/crying-cat.webp';

  word: string = this.answer.isCorrect
  ? this.answer.nextWord : this.answer.answer;
  p: string = this.answer.isCorrect
  ? 'Next word: ' : 'Correct answer: '

  onNext() {
    this.learn.setAnswer(false);
  }

  constructor(
    private languageService: LanguageService,
    private learn: LearnComponent
    ) {
      this.languageService.getAnswerInfo.subscribe(a => {
        console.log(a);
        this.answer = a
      });
      this.languageService.getLanguageInfo.subscribe(lang => this.language = lang);
    }

  ngOnInit(): void {

  }

}

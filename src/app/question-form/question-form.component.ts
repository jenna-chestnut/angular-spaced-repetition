import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LanguageService } from 'src/services/language-service/language.service';
import { LearnComponent } from '../routes/learn/learn.component';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {
  error: string | null = null;

  async submitLogin(f: NgForm) {
    const guess = f.value;
    this.languageService.postGuess(guess)
    .subscribe(res => {
      this.languageService.getAnswerInfo.emit(res);
      this.onAnswer();
    })
  }

  onAnswer(): void {
    this.languageService.getHead();
    this.learn.setAnswer(true);
  }

  constructor(
    private languageService: LanguageService,
    private learn: LearnComponent
  ) {

  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/services/language-service/language.service';

interface keyable {
  [key: string]: any
}
@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {
  answer: boolean = false;
  head: keyable | null = null;

  setAnswer(isAnswerView: boolean): void {
    if (!isAnswerView) this.getHead();
    this.answer = isAnswerView;
  }

  getHead(): void {
    this.languageService.getHead()
    .subscribe(head => {
      this.head = head;
      this.languageService.getWords().subscribe()
      }
    );
  }

  constructor(private languageService: LanguageService) {
  }

  ngOnInit(): void {
    this.getHead();
  }

}

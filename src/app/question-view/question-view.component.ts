import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/services/language-service/language.service';
import { LearnComponent } from '../routes/learn/learn.component';

interface keyable {
  [key: string]: any
}

@Component({
  selector: 'app-question-view',
  templateUrl: './question-view.component.html',
  styleUrls: ['./question-view.component.css']
})
export class QuestionViewComponent implements OnInit {
  head: keyable = {};
  answer: keyable = {};
  language: keyable = {language: {name: 'Name'}};

  constructor(
    private languageService: LanguageService,
    ) {
      this.languageService.getHeadInfo.subscribe(head => this.head = head);
      this.languageService.getLanguageInfo.subscribe(lang => this.language = lang);
    }

  ngOnInit(): void {
  }

}

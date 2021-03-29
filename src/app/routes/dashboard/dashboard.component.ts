import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/services/language-service/language.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  words: [] | null = null;
  language: string | null = 'Language';
  score: number = 0;

  getWords(): void {
    this.languageService.getWords()
    .subscribe(lang => {
      this.words = lang.words;
      this.language = lang.language.name;
      this.score = lang.language.total_score;
    });
  }

  constructor(
    private languageService: LanguageService
  ) { }

  ngOnInit(): void {
    this.getWords();
  }

}

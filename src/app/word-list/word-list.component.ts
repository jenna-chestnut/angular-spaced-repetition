import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/services/language-service/language.service';

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.css']
})
export class WordListComponent implements OnInit {
  words: any = [];

  constructor( private languageService: LanguageService ) {
    this.languageService.getLanguageInfo
    .subscribe(words => this.words = words.words);
   }

  ngOnInit(): void {
  }

}

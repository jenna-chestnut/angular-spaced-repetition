import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './routes/login/login.component';
import { RegisterComponent } from './routes/register/register.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { LearnComponent } from './routes/learn/learn.component';
import { NotFoundComponent } from './routes/not-found/not-found.component';
import { WordListComponent } from './word-list/word-list.component';
import { AnswerViewComponent } from './answer-view/answer-view.component';
import { QuestionViewComponent } from './question-view/question-view.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { ErrorBannerComponent } from './error-banner/error-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    LoginFormComponent,
    DashboardComponent,
    LearnComponent,
    NotFoundComponent,
    WordListComponent,
    AnswerViewComponent,
    QuestionViewComponent,
    QuestionFormComponent,
    ErrorBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CoursesModule} from './courses/courses.module';
import {StaticpagesModule} from './staticpages/staticpages.module';
import { AdminModule } from './admin/admin.module';
import {AuthModule} from './auth/auth.module';
  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { EmployeeserviceService } from './auth/employeeservice.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';



@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    HomeComponent,
    QuizComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthModule,
    CoursesModule,
    StaticpagesModule,
    AdminModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [EmployeeserviceService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
//import { ContactUsComponent } from './staticpages/contact-us/contact-us.component';
import { QuizComponent} from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
{path:'',redirectTo:'',pathMatch:'full'},
{path: 'quiz',component:QuizComponent},
{ path: 'result',component:ResultComponent},
{path:'**',component:PageNotFoundComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MatTablePage } from './table/mat-table/mat-table.page';
import { ListSlidingPage } from './lista/list-sliding/list-sliding.page';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'app', component: AppComponent },
  { path: 'mat-table', component: MatTablePage },
  { path: 'list-sliding', component: ListSlidingPage }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { TabsPage } from './tabs/tabs.page';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: "tabs", pathMatch: "full"},
  {
    path: "tabs",
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./tabs/edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'record',
    loadChildren: () => import('./tabs/record/record.module').then( m => m.RecordPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./tabs/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./tabs/about/about.module').then( m => m.AboutPageModule)
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

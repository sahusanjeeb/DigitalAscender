import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'prompt_management'
  },

  {
    path: 'prompt_management',
    loadChildren: () => import('./pages/prompt-management/prompt-management.module').then(m => m.PromptManagementModule),
    data: {
      title: 'Prompt Management',
      navLabel: 'Prompt Management',
      isActive: true
    }
  },

  // {
  //   path: 'quality-engineering',
  //   loadChildren: () => import('./pages/landing-page/landing-page.module').then(m => m.LandingPageModule),
  //   data: {
  //     title: 'Code',
  //     navLabel: 'Quality Engineering',
  //     isActive: true
  //   }
  // },

  // {
  //   path: 'ASC AVA',
  //   loadChildren: () => import('./pages/asc-ava/asc-ava.module').then(m => m.AscAVAModule),
  //   data: {
  //     title: 'ASC AVA',
  //     navLabel: 'ASC AVA',
  //     isActive: true
  //   }
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivrosComponent } from './livros/livros.component';
import { LivroCreateComponent } from './livro-create/livro-create.component';
import { LeitoresComponent } from './leitores/leitores.component';
import { LeitorCreateComponent } from './leitor-create/leitor-create.component';
import { LivroDetailComponent } from './livro-detail/livro-detail.component';
import { OhnoComponent } from './ohno/ohno.component';
import { LeitorDetailComponent } from './leitor-detail/leitor-detail.component';
import { MeEmprestaComponent } from './me-empresta/me-empresta.component';

const routes: Routes = [
  { path: 'livros', component: LivrosComponent },
  { path: 'createLivro', component: LivroCreateComponent},
  { path: 'leitores', component: LeitoresComponent},
  { path:'createLeitor', component: LeitorCreateComponent},
  { path: 'detailLivro/:id', component: LivroDetailComponent},
  { path: 'detailLeitor/:id', component:LeitorDetailComponent },
  { path: 'ohno/:message', component: OhnoComponent},
  { path: 'me_empresta', component: MeEmprestaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

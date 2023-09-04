import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LivrosComponent } from './livros/livros.component';
import { LeitoresComponent } from './leitores/leitores.component';
import { LivroCreateComponent } from './livro-create/livro-create.component';
import { LeitorCreateComponent } from './leitor-create/leitor-create.component';
import { LeitorDetailComponent } from './leitor-detail/leitor-detail.component';
import { LivroDetailComponent } from './livro-detail/livro-detail.component';
import { OhnoComponent } from './ohno/ohno.component';
import { MeEmprestaComponent } from './me-empresta/me-empresta.component';

@NgModule({
  declarations: [
    AppComponent,
    LivrosComponent,
    LeitoresComponent,
    LivroCreateComponent,
    LeitorCreateComponent,
    LeitorDetailComponent,
    LivroDetailComponent,
    OhnoComponent,
    MeEmprestaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

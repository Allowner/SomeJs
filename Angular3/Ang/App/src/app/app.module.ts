import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Directive } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { MainComponent } from "./components/main/main.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { ContactsComponent } from "./components/contacts/contacts.component";
import { EditComponent } from "./components/edit/edit.component";
import { ArticleListItemComponent } from "./components/article-list-item/article-list-item.component";
import { ArticleComponent } from "./components/article/article.component";
import { LoadButtonComponent } from "./components/load-button/load-button.component";
import { HttpClientModule } from "@angular/common/http";
import { CustomDatePipe } from "./model/pipe";
import { AlertModule } from "ngx-bootstrap";
import { MatSelectModule } from "@angular/material/select";
import { MyDirective } from "./components/directive";
import { ImagePipe } from "./model/imgPipe";

const routes: Routes = [
  { path: "", component: MainComponent, pathMatch: "full" },
  {
    path: "404",
    component: NotFoundComponent
  },
  {
    path: "contacts",
    component: ContactsComponent
  },
  { path: "edit/:id", component: EditComponent },
  { path: "create", component: EditComponent },
  { path: "article/:id", component: ArticleComponent },
  { path: "**", redirectTo: "/404" }
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    NotFoundComponent,
    ContactsComponent,
    EditComponent,
    ArticleListItemComponent,
    ArticleComponent,
    CustomDatePipe,
    ImagePipe,
    LoadButtonComponent,
    MyDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule,
    ReactiveFormsModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  entryComponents: [ArticleListItemComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

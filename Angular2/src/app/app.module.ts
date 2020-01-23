import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
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
    LoadButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

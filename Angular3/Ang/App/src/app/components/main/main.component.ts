import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  ComponentFactory,
  OnInit,
  Input
} from "@angular/core";
import { News } from "src/app/model/newsModel";
import { ArticleListItemComponent } from "../article-list-item/article-list-item.component";
import { MyDirective } from "../directive";
import { NewsService } from "src/app/services/newsService";
import { LoadButtonComponent } from "../load-button/load-button.component";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  articles = [];
  filtered = [];
  filterApplied = false;
  @ViewChild(LoadButtonComponent, { static: true }) child: LoadButtonComponent;
  @ViewChild(MyDirective, { static: true })
  directive: MyDirective;

  constructor(
    private resolver: ComponentFactoryResolver,
    private newsService: NewsService
  ) {}

  ngOnInit() {
    this.child.getAr("Bild,Bloomberg,CNN");
  }

  createComponents() {
    const componentFactory = this.resolver.resolveComponentFactory(
      ArticleListItemComponent
    );
    const viewContainerRef = this.directive.viewContainerRef;
    viewContainerRef.clear();
    if (this.filterApplied) {
      for (let i = 0; i < this.filtered.length; i++) {
        const componentRef = viewContainerRef.createComponent(componentFactory);
        componentRef.instance.article = this.filtered[i];
      }
    } else {
      for (let i = 0; i < this.articles.length; i++) {
        const componentRef = viewContainerRef.createComponent(componentFactory);
        componentRef.instance.article = this.articles[i];
      }
    }
  }

  changeSource(text) {
    document.getElementsByClassName("sourceName")[0].innerHTML = text;
    this.child.getAr(text);
  }

  addItems(newItems: News[]) {
    console.log(newItems);
    this.articles = this.articles.concat(newItems);
    this.createComponents();
  }

  onSubmit(word: string) {
    if (word !== "") {
      this.filterApplied = true;
      this.filtered = this.articles.filter(
        obj => obj.content != null && obj.content.includes(word)
      );
      this.createComponents();
    } else {
      this.filterApplied = false;
    }
  }
}

import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  ComponentFactory,
  OnInit
} from "@angular/core";
import { News } from "src/app/model/newsModel";
import { ArticleListItemComponent } from "../article-list-item/article-list-item.component";
import { MyDirective } from "../directive";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  articles = [];
  @ViewChild(MyDirective, { static: true })
  directive: MyDirective;

  constructor(private resolver: ComponentFactoryResolver) {}

  ngOnInit() {}

  createComponents() {
    const componentFactory = this.resolver.resolveComponentFactory(
      ArticleListItemComponent
    );
    const viewContainerRef = this.directive.viewContainerRef;
    viewContainerRef.clear();
    for (let i = 0; i < this.articles.length; i++) {
      const componentRef = viewContainerRef.createComponent(componentFactory);
      componentRef.instance.article = this.articles[i];
    }
  }

  changeSource(text) {
    document.getElementsByClassName("sourceName")[0].innerHTML = text;
  }

  addItems(newItems: News[]) {
    this.articles = this.articles.concat(newItems);
    this.createComponents();
  }
}

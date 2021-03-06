import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { News } from "src/app/model/newsModel";
import { NewsService } from "src/app/services/newsService";

@Component({
  selector: "app-load-button",
  templateUrl: "./load-button.component.html",
  styleUrls: ["./load-button.component.css"]
})
export class LoadButtonComponent implements OnInit {
  articles;
  name;
  current = 0;
  constructor(private newsService: NewsService) {}

  @Output() onClick = new EventEmitter<News[]>();

  ngOnInit() {}

  getArticlesByName() {
    this.newsService
      .getNews(this.name, this.current)
      .subscribe(o => this.onClick.emit(o));
    this.current += 5;
  }

  getAr(name) {
    this.current = 0;
    this.name = name;
    this.getArticlesByName();
  }
}

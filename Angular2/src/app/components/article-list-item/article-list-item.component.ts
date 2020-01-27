import { Component, OnInit, Input } from "@angular/core";
import { NewsModel } from "app/model/newsModel";

@Component({
  selector: "app-article-list-item",
  templateUrl: "./article-list-item.component.html",
  styleUrls: ["./article-list-item.component.css"]
})
export class ArticleListItemComponent implements OnInit {
  @Input() article: NewsModel;
  constructor() {}

  ngOnInit() {}
}

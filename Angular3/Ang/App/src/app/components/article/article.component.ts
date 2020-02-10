import { Component, OnInit } from "@angular/core";

import { NewsService } from "src/app/services/newsService";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.css"]
})
export class ArticleComponent implements OnInit {
  article;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private newsService: NewsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.newsService
        .getNewsById(p["id"])
        .subscribe(item => (this.article = item));
    });
  }
}

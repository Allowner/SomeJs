import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from "@angular/core";
import { News } from "src/app/model/newsModel";
import { NewsService } from "src/app/services/newsService";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-article-list-item",
  templateUrl: "./article-list-item.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ["./article-list-item.component.css"]
})
export class ArticleListItemComponent implements OnInit {
  @Input() article: News;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private newsService: NewsService
  ) {}

  ngOnInit() {}

  edit() {
    this.router.navigate([`edit/${this.article.id}`]);
  }

  delete() {
    this.newsService.deleteNews(this.article.id).subscribe(response => {
      console.log("deleted");
    });
  }
}

import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from "@angular/core";
import { News } from "src/app/model/newsModel";

@Component({
  selector: "app-article-list-item",
  templateUrl: "./article-list-item.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ["./article-list-item.component.css"]
})
export class ArticleListItemComponent implements OnInit {
  @Input() article: News;
  constructor() {}

  ngOnInit() {}
}

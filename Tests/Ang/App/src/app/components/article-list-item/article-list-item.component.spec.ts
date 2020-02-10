/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { ArticleListItemComponent } from "./article-list-item.component";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { of } from "rxjs";
import { News } from "src/app/model/newsModel";

describe("ArticleListItemComponent", () => {
  let component: ArticleListItemComponent;
  let fixture: ComponentFixture<ArticleListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [ArticleListItemComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleListItemComponent);
    component = fixture.componentInstance;
    component.article = new News(
      10000,
      true,
      {
        id: null,
        name: "Newsbtc.com"
      },
      "Cole Petersen",
      "Bitcoin on the Brink of Going Parabolic as Insanely Bullish Weekly Close Approaches",
      "It has been a wild day for Bitcoin, with the cryptocurrency flying past the intense resistance it previously faced between $9,800 and $10,000, with its movement into the five-figure price region sending chills down the spines of BTC bears. BTC is now fast app…",
      "https://www.newsbtc.com/2020/02/09/bitcoin-on-the-brink-of-going-parabolic-as-insanely-bullish-weekly-close-approaches/",
      "https://www.newsbtc.com/wp-content/uploads/2020/02/shutterstock_1006797721-1200x780.jpg",
      "2020-02-09T18:00:00Z",
      "It has been a wild day for Bitcoin, with the cryptocurrency flying past the intense resistance it previously faced between $9,800 and $10,000, with its movement into the five-figure price region sending chills down the spines of BTC bears.\r\nBTC is now fast ap… [+2979 chars]"
    );
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

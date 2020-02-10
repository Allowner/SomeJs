/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { CustomDatePipe } from "../../model/pipe";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { ArticleComponent } from "./article.component";
import { ActivatedRoute } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule } from "@angular/common/http";
import { News } from "src/app/model/newsModel";

describe("ArticleComponent", () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [ArticleComponent, CustomDatePipe]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleComponent);
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

  it("should create mine", () => {
    component.article = new News(
      10000,
      true,
      {
        id: null,
        name: "me"
      },
      "Cole Petersen",
      "Bitcoin on the Brink of Going Parabolic as Insanely Bullish Weekly Close Approaches",
      "It has been a wild day for Bitcoin, with the cryptocurrency flying past the intense resistance it previously faced between $9,800 and $10,000, with its movement into the five-figure price region sending chills down the spines of BTC bears. BTC is now fast app…",
      "https://www.newsbtc.com/2020/02/09/bitcoin-on-the-brink-of-going-parabolic-as-insanely-bullish-weekly-close-approaches/",
      "https://www.newsbtc.com/wp-content/uploads/2020/02/shutterstock_1006797721-1200x780.jpg",
      "2020-02-09T18:00:00Z",
      "It has been a wild day for Bitcoin, with the cryptocurrency flying past the intense resistance it previously faced between $9,800 and $10,000, with its movement into the five-figure price region sending chills down the spines of BTC bears.\r\nBTC is now fast ap… [+2979 chars]"
    );
    expect(component).toBeTruthy();
  });
});

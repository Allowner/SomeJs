/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { MainComponent } from "./main.component";
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { LoadButtonComponent } from "../load-button/load-button.component";
import { HttpClientModule } from "@angular/common/http";
import { shallow } from "enzyme";
import { News } from "src/app/model/newsModel";

describe("MainComponent", () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [
        MainComponent,
        FooterComponent,
        HeaderComponent,
        LoadButtonComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render", () => {
    spyOn(component, "createComponents");
    component.addItems([
      new News(
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
      )
    ]);
    fixture.whenRenderingDone().then(() => {
      expect(component).toBeTruthy();
    });
  });

  it("outputs when clicked", () => {
    const element = fixture.debugElement.nativeElement.querySelectorAll(
      ".sourceName"
    )[0];

    component.changeSource("Bloomberg");

    fixture.detectChanges();
    expect(element.innerHTML).toEqual("Bloomberg");
  });
});

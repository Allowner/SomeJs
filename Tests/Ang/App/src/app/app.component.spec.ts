/* tslint:disable:no-unused-variable */

import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule } from "@angular/common/http";

describe("AppComponent", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [AppComponent]
    });
    TestBed.compileComponents();
  });

  it("should create the app", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});

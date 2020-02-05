import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "customDate" })
export class CustomDatePipe implements PipeTransform {
  transform(value: String): String {
    return `Date: ${value.replace("T", " Time: ").slice(0, -1)}`;
  }
}

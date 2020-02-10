import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "imgPipe" })
export class ImagePipe implements PipeTransform {
  transform(value: String): String {
    if (value == null) {
      return "./assets/no-image.png";
    }
    return value;
  }
}

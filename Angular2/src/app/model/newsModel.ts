export class NewsModel {
  constructor(
    id: number,
    createdByMe: boolean,
    source: { id: string; name: string },
    author: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string,
    content: string
  ) {}
}

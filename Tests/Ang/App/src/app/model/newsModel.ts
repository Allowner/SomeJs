export class News {
  constructor(
    public id: number,
    public createdByMe: boolean,
    public source: { id: string; name: string },
    public author: string,
    public title: string,
    public description: string,
    public url: string,
    public urlToImage: string,
    public publishedAt: string,
    public content: string
  ) {}
}

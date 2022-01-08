export class Blog {
    id: number;
    date: Date;
    title: string;
    author: string;
    body: string;

    constructor(id: number, date: Date, title: string, author: string, body: string) {
        this.id = id;
        this.date = date;
        this.title = title;
        this.author = author;
        this.body = body;
    }
}

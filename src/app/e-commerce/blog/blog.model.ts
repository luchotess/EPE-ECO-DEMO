export class Blog {
  Id: string = '';
  title: string = '';
  url: string = '';
  day: string = '';
  month: string = '';
  year: string = '';
  image: string = '';
  tag: [] = [];
  links: any = {};
  content: string = '';
}

export class Tag {
  categoryId: string = '';
  title: string = '';
  url: string = '';
  parentId: string = '';
}

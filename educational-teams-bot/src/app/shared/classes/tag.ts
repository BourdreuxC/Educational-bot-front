export class Tag {
  id: string;
  variants: string[];

  constructor(id: string, variants: string[]) {
    this.id = id;
    this.variants = variants;
  }
}

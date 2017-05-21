export class Product {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public cost?: number,
    public subcategory_id?: string,
    public brand?: string
  ) {}
}

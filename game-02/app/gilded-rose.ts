import { Item, ItemFactory } from "./item";

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  /**
   * Update items of products of the inn in the system.
   */
  updateItemQuality() {
    this.items = this.items.map((item) => ItemFactory.alterItem(item));

    return this.items;
  }
}

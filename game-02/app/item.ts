import {
  MIN_QUALITY,
  MAX_QUALITY,
  LEGENDARY_QUALITY,
  TEN_DAYS,
  FIVE_DAYS,
} from "./constants";

export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

/**
 * Base abstract item class
 */
export abstract class CategoryItem extends Item {
  constructor(item: Item) {
    super(item.name, item.sellIn, item.quality);
  }
  abstract updateItem(): Item;
  get isDegraded() {
    return this.sellIn <= 0;
  }
  increaseQuality(value = 1) {
    this.quality = Math.min(MAX_QUALITY, this.quality + value);
  }
  decreaseQuality(value = 1) {
    this.quality = Math.max(MIN_QUALITY, this.quality - value);
  }
  decreaseSellIn(value = 1) {
    this.sellIn -= value;
  }
}

/**
 * Generic category class
 */
export class GenericItem extends CategoryItem {
  updateItem(): Item {
    this.decreaseQuality(this.isDegraded ? 2 : 1);
    this.decreaseSellIn();
    return this;
  }
}

/**
 * Aged Brie category class
 */

export class AgedBrieItem extends CategoryItem {
  static identifier = "Aged Brie";
  updateItem(): Item {
    this.increaseQuality(this.isDegraded ? 2 : 1);
    this.decreaseSellIn();
    return this;
  }
}

/**
 * Sulfuras category class
 */
export class SulfurasItem extends CategoryItem {
  static identifier = "Sulfuras";
  updateItem(): Item {
    this.quality = LEGENDARY_QUALITY;
    this.sellIn = Number.POSITIVE_INFINITY;
    return this;
  }
}

/**
 * Backstage passed class
 */
export class BackstagePassesItem extends CategoryItem {
  static identifier = "Backstage passes";
  updateItem(): Item {
    if (this.isDegraded) {
      this.quality = 0;
    } else if (this.sellIn > TEN_DAYS) {
      this.increaseQuality(1);
    } else if (this.sellIn > FIVE_DAYS) {
      this.increaseQuality(2);
    } else {
      this.increaseQuality(3);
    }
    this.decreaseSellIn();

    return this;
  }
}

/**
 * Conjured item class
 */

export class ConjuredItem extends CategoryItem {
  static identifier = "Conjured";
  updateItem(): Item {
    this.decreaseQuality(this.isDegraded ? 4 : 2);
    this.decreaseSellIn();
    return this;
  }
}

/**
 * Factory class: creates instances of items based on their name and rules
 */
export class ItemFactory {
  static alterItem(item: Item): Item {
    const categoryItem: CategoryItem = (() => {
      //Aged Brie factory
      if (item.name.includes(AgedBrieItem.identifier)) {
        return new AgedBrieItem(item);

        //BackStage Passes factory
      } else if (item.name.includes(BackstagePassesItem.identifier)) {
        return new BackstagePassesItem(item);

        //Sulfuras factory
      } else if (item.name.includes(SulfurasItem.identifier)) {
        return new SulfurasItem(item);

        //Conjured factory
      } else if (item.name.includes(ConjuredItem.identifier)) {
        return new ConjuredItem(item);

        //Generic factory
      } else {
        return new GenericItem(item);
      }
    })();

    return categoryItem.updateItem();
  }
}

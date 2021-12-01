const SULFURAS = "Sulfuras, Hand of Ragnaros";
const AGED_BRIE = "Aged Brie";
const BACKSTAGE_PASSES = "Backstage passes to a TAFKAL80ETC concert";
const CONJURED = "Conjured Mana Cake";

const MIN_QUALITY = 0;
const MAX_QUALITY = 50;

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

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {
      if (item.name === SULFURAS) {
        continue;
      }

      const qualityResult = (() => {
        if (item.name === AGED_BRIE) {
          if (item.sellIn > 0) return 1;
          return 2;
        }

        if (item.name === BACKSTAGE_PASSES) {
          if (item.sellIn > 10) return 1;
          if (item.sellIn > 5) return 2;
          if (item.sellIn > 0) return 3;
          return -item.quality;
        }

        if (item.name === CONJURED) {
          if (item.sellIn > 0) return -2;
          return -4;
        }

        if (item.sellIn > 0) return -1;
        return -2;
      })();

      const result = item.quality + qualityResult;
      item.quality = Math.min(Math.max(result, MIN_QUALITY), MAX_QUALITY);
      item.sellIn--;
    }

    return this.items;
  }
}

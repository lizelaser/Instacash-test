import { expect } from "chai";
import { Item } from "../app/item";
import { GildedRose } from "../app/gilded-rose";

describe("Test suite for Gilded Rose", () => {
  context("General Item", () => {
    it("Once [sellIn] has passed, [quality] degrades twice as fast", () => {
      const item = new Item("+5 Dexterity Vest", 1, 10);
      const gildedRose = new GildedRose([item]);
      const days = 3;

      for (let i = 0; i < days; i++) {
        gildedRose.updateItemQuality();
      }
      expect(gildedRose.items[0].quality).to.equal(5);
    });

    it("The [quality] of an item is never negative", () => {
      const item = new Item("+5 Dexterity Vest", 10, 10);
      const gildedRose = new GildedRose([item]);
      const days = 20;

      for (let i = 0; i < days; i++) {
        gildedRose.updateItemQuality();
      }

      expect(gildedRose.items[0].quality).to.equal(0);
    });
  });

  context("Aged Brie", () => {
    it("'Aged Brie' actually increases in [quality] the older it gets", () => {
      const item = new Item("Aged Brie", 3, 0);
      const gildedRose = new GildedRose([item]);
      const days = 2;

      for (let i = 0; i < days; i++) {
        gildedRose.updateItemQuality();
      }

      expect(gildedRose.items[0].quality).to.equal(2);
    });

    it("'Aged Brie' increases its [quality] twice as fast once [sellIn] has passed", () => {
      const item = new Item("Aged Brie", 0, 0);
      const gildedRose = new GildedRose([item]);
      const days = 2;

      for (let i = 0; i < days; i++) {
        gildedRose.updateItemQuality();
      }

      expect(gildedRose.items[0].quality).to.equal(4);
    });

    it("The [quality] of an item is never more than 50", () => {
      const item = new Item("Aged Brie", 2, 40);
      const gildedRose = new GildedRose([item]);
      const days = 20;

      for (let i = 0; i < days; i++) {
        gildedRose.updateItemQuality();
      }

      expect(gildedRose.items[0].quality).to.equal(50);
    });
  });

  context("Sulfuras", () => {
    it("'Sulfuras', being a legendary item, never has to be sold or decreases in Quality", () => {
      const item = new Item("Sulfuras, Hand of Ragnaros", 0, 80);
      const gildedRose = new GildedRose([item]);
      const days = 20;

      for (let i = 0; i < days; i++) {
        gildedRose.updateItemQuality();
      }

      expect(gildedRose.items[0].quality).to.equal(80);
    });
  });

  context("Backstage passes", () => {
    it("'Backstage passes' increases in [quality] as its [sellIn] value approaches", () => {
      const item = new Item(
        "Backstage passes to a TAFKAL80ETC concert",
        20,
        20
      );
      const gildedRose = new GildedRose([item]);
      const days = 3;

      for (let i = 0; i < days; i++) {
        gildedRose.updateItemQuality();
      }

      expect(gildedRose.items[0].quality).to.equal(23);
    });

    it("'Backstage passes' [quality] increases by 2 when there are 10 days or less", () => {
      const item = new Item(
        "Backstage passes to a TAFKAL80ETC concert",
        10,
        20
      );
      const gildedRose = new GildedRose([item]);
      const days = 3;

      for (let i = 0; i < days; i++) {
        gildedRose.updateItemQuality();
      }

      expect(gildedRose.items[0].quality).to.equal(26);
    });

    it("'Backstage passes' [quality] increases by 3 when there are 5 days or less", () => {
      const item = new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20);
      const gildedRose = new GildedRose([item]);
      const days = 3;

      for (let i = 0; i < days; i++) {
        gildedRose.updateItemQuality();
      }

      expect(gildedRose.items[0].quality).to.equal(29);
    });

    it("'Backstage passes' [quality] drops to 0 after the concert", () => {
      const item = new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20);
      const gildedRose = new GildedRose([item]);
      const days = 6;

      for (let i = 0; i < days; i++) {
        gildedRose.updateItemQuality();
      }

      expect(gildedRose.items[0].quality).to.equal(0);
    });
  });

  context("Conjured", () => {
    it("'Conjured' items degrade in [quality] twice as fast as normal items", () => {
      const item = new Item("Conjured Mana Cake", 1, 10);
      const gildedRose = new GildedRose([item]);
      const days = 2;

      for (let i = 0; i < days; i++) {
        gildedRose.updateItemQuality();
      }

      expect(gildedRose.items[0].quality).to.equal(4);
    });
  });
});

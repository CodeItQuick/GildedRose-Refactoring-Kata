import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  let theory = [
    { itemName: 'Aged Brie', itemSellIn: 0, itemQuality: 0, finalQuality: 2 }, // zero
    { itemName: 'Aged Brie', itemSellIn: 1, itemQuality: 0, finalQuality: 1 }, // one
    { itemName: 'Aged Brie', itemSellIn: 0, itemQuality: 1, finalQuality: 3 }, // one
    { itemName: 'Aged Brie', itemSellIn: 1, itemQuality: 1, finalQuality: 2 }, // one
    { itemName: 'Aged Brie', itemSellIn: 5, itemQuality: 0, finalQuality: 1 }, // many
    { itemName: 'Aged Brie', itemSellIn: 0, itemQuality: 5, finalQuality: 7 }, // many
    { itemName: 'Aged Brie', itemSellIn: 5, itemQuality: 5, finalQuality: 6 }, // many
    { itemName: 'Aged Brie', itemSellIn: 5, itemQuality: 0, finalQuality: 1 }, // many
    { itemName: 'Aged Brie', itemSellIn: 50, itemQuality: 0, finalQuality: 1 }, // boundaries
    { itemName: 'Aged Brie', itemSellIn: 0, itemQuality: 50, finalQuality: 50 }, // boundaries
    { itemName: 'Aged Brie', itemSellIn: 50, itemQuality: 50, finalQuality: 50 }, // boundaries
    { itemName: 'Aged Brie', itemSellIn: 49, itemQuality: 0, finalQuality: 1 }, // boundaries
    { itemName: 'Aged Brie', itemSellIn: 0, itemQuality: 49, finalQuality: 50 }, // boundaries
    { itemName: 'Aged Brie', itemSellIn: 49, itemQuality: 49, finalQuality: 50 }, // boundaries
    { itemName: 'Aged Brie', itemSellIn: 6, itemQuality: 0, finalQuality: 1 }, // boundaries
    { itemName: 'Aged Brie', itemSellIn: 0, itemQuality: 6, finalQuality: 8 }, // boundaries
    { itemName: 'Aged Brie', itemSellIn: 6, itemQuality: 6, finalQuality: 7 }, // boundaries
    { itemName: 'Aged Brie', itemSellIn: 10, itemQuality: 0, finalQuality: 1 }, // boundaries
    { itemName: 'Aged Brie', itemSellIn: 0, itemQuality: 10, finalQuality: 12 }, // boundaries
    { itemName: 'Aged Brie', itemSellIn: 10, itemQuality: 10, finalQuality: 11 }, // boundaries
    { itemName: 'Aged Brie', itemSellIn: 11, itemQuality: 0, finalQuality: 1 }, // boundaries
    { itemName: 'Aged Brie', itemSellIn: 0, itemQuality: 11, finalQuality: 13 }, // boundaries
    { itemName: 'Aged Brie', itemSellIn: 11, itemQuality: 11, finalQuality: 12 }, // boundaries
    { itemName: 'Backstage passes to a TAFKAL80ETC concert', itemSellIn: 0, itemQuality: 0, finalQuality: 0 }, // zero
    { itemName: 'Backstage passes to a TAFKAL80ETC concert', itemSellIn: 1, itemQuality: 0, finalQuality: 3 }, // one
    { itemName: 'Backstage passes to a TAFKAL80ETC concert', itemSellIn: 0, itemQuality: 1, finalQuality: 0 }, // one
    { itemName: 'Backstage passes to a TAFKAL80ETC concert', itemSellIn: 1, itemQuality: 1, finalQuality: 4 }, // one
    { itemName: 'Backstage passes to a TAFKAL80ETC concert', itemSellIn: 5, itemQuality: 0, finalQuality: 3 }, // many
    { itemName: 'Backstage passes to a TAFKAL80ETC concert', itemSellIn: 0, itemQuality: 5, finalQuality: 0 }, // many
    { itemName: 'Backstage passes to a TAFKAL80ETC concert', itemSellIn: 5, itemQuality: 5, finalQuality: 8 }, // many
    { itemName: 'Backstage passes to a TAFKAL80ETC concert', itemSellIn: 5, itemQuality: 0, finalQuality: 3 }, // many
    { itemName: 'Backstage passes to a TAFKAL80ETC concert', itemSellIn: 50, itemQuality: 0, finalQuality: 1 }, // boundaries
    { itemName: 'Backstage passes to a TAFKAL80ETC concert', itemSellIn: 0, itemQuality: 50, finalQuality: 0 }, // boundaries
    { itemName: 'Backstage passes to a TAFKAL80ETC concert', itemSellIn: 50, itemQuality: 50, finalQuality: 50 }, // boundaries
    { itemName: 'Backstage passes to a TAFKAL80ETC concert', itemSellIn: 49, itemQuality: 0, finalQuality: 1 }, // boundaries
    { itemName: 'Backstage passes to a TAFKAL80ETC concert', itemSellIn: 0, itemQuality: 49, finalQuality: 0 }, // boundaries
    { itemName: 'Backstage passes to a TAFKAL80ETC concert', itemSellIn: 49, itemQuality: 49, finalQuality: 50 }, // boundaries
    { itemName: 'Backstage passes to a TAFKAL80ETC concert', itemSellIn: 6, itemQuality: 0, finalQuality: 2 }, // boundaries
    { itemName: 'Backstage passes to a TAFKAL80ETC concert', itemSellIn: 0, itemQuality: 6, finalQuality: 0 }, // boundaries
    { itemName: 'Backstage passes to a TAFKAL80ETC concert', itemSellIn: 6, itemQuality: 6, finalQuality: 8 }, // boundaries
    { itemName: 'Backstage passes to a TAFKAL80ETC concert', itemSellIn: 10, itemQuality: 0, finalQuality: 2 }, // boundaries
    { itemName: 'Backstage passes to a TAFKAL80ETC concert', itemSellIn: 0, itemQuality: 10, finalQuality: 0 }, // boundaries
    { itemName: 'Backstage passes to a TAFKAL80ETC concert', itemSellIn: 10, itemQuality: 10, finalQuality: 12 }, // boundaries
    { itemName: 'Backstage passes to a TAFKAL80ETC concert', itemSellIn: 11, itemQuality: 0, finalQuality: 1 }, // boundaries
    { itemName: 'Backstage passes to a TAFKAL80ETC concert', itemSellIn: 0, itemQuality: 11, finalQuality: 0 }, // boundaries
    { itemName: 'Backstage passes to a TAFKAL80ETC concert', itemSellIn: 11, itemQuality: 11, finalQuality: 12 }, // boundaries
    { itemName: 'Sulfuras, Hand of Ragnaros', itemSellIn: 0, itemQuality: 0, finalQuality: 0 }, // zero
    { itemName: 'Sulfuras, Hand of Ragnaros', itemSellIn: 1, itemQuality: 0, finalQuality: 0 }, // one
    { itemName: 'Sulfuras, Hand of Ragnaros', itemSellIn: 0, itemQuality: 1, finalQuality: 1 }, // one
    { itemName: 'Sulfuras, Hand of Ragnaros', itemSellIn: 1, itemQuality: 1, finalQuality: 1 }, // one
    { itemName: 'Sulfuras, Hand of Ragnaros', itemSellIn: 5, itemQuality: 0, finalQuality: 0 }, // many
    { itemName: 'Sulfuras, Hand of Ragnaros', itemSellIn: 0, itemQuality: 5, finalQuality: 5 }, // many
    { itemName: 'Sulfuras, Hand of Ragnaros', itemSellIn: 5, itemQuality: 5, finalQuality: 5 }, // many
    { itemName: 'Sulfuras, Hand of Ragnaros', itemSellIn: 5, itemQuality: 0, finalQuality: 0 }, // many
    { itemName: 'Sulfuras, Hand of Ragnaros', itemSellIn: 50, itemQuality: 0, finalQuality: 0 }, // boundaries
    { itemName: 'Sulfuras, Hand of Ragnaros', itemSellIn: 0, itemQuality: 50, finalQuality: 50 }, // boundaries
    { itemName: 'Sulfuras, Hand of Ragnaros', itemSellIn: 50, itemQuality: 50, finalQuality: 50 }, // boundaries
    { itemName: 'Sulfuras, Hand of Ragnaros', itemSellIn: 49, itemQuality: 0, finalQuality: 0 }, // boundaries
    { itemName: 'Sulfuras, Hand of Ragnaros', itemSellIn: 0, itemQuality: 49, finalQuality: 49 }, // boundaries
    { itemName: 'Sulfuras, Hand of Ragnaros', itemSellIn: 49, itemQuality: 49, finalQuality: 49 }, // boundaries
    { itemName: 'Sulfuras, Hand of Ragnaros', itemSellIn: 6, itemQuality: 0, finalQuality: 0 }, // boundaries
    { itemName: 'Sulfuras, Hand of Ragnaros', itemSellIn: 0, itemQuality: 6, finalQuality: 6 }, // boundaries
    { itemName: 'Sulfuras, Hand of Ragnaros', itemSellIn: 6, itemQuality: 6, finalQuality: 6 }, // boundaries
    { itemName: 'Sulfuras, Hand of Ragnaros', itemSellIn: 10, itemQuality: 0, finalQuality: 0 }, // boundaries
    { itemName: 'Sulfuras, Hand of Ragnaros', itemSellIn: 0, itemQuality: 10, finalQuality: 10 }, // boundaries
    { itemName: 'Sulfuras, Hand of Ragnaros', itemSellIn: 10, itemQuality: 10, finalQuality: 10 }, // boundaries
    { itemName: 'Sulfuras, Hand of Ragnaros', itemSellIn: 11, itemQuality: 0, finalQuality: 0 }, // boundaries
    { itemName: 'Sulfuras, Hand of Ragnaros', itemSellIn: 0, itemQuality: 11, finalQuality: 11 }, // boundaries
    { itemName: 'Sulfuras, Hand of Ragnaros', itemSellIn: 11, itemQuality: 11, finalQuality: 11 }, // boundaries
    { itemName: 'Generic Item', itemSellIn: 0, itemQuality: 0, finalQuality: 0 }, // zero
    { itemName: 'Generic Item', itemSellIn: 1, itemQuality: 0, finalQuality: 0 }, // one
    { itemName: 'Generic Item', itemSellIn: 0, itemQuality: 1, finalQuality: 0 }, // one
    { itemName: 'Generic Item', itemSellIn: 1, itemQuality: 1, finalQuality: 0 }, // one
    { itemName: 'Generic Item', itemSellIn: 5, itemQuality: 0, finalQuality: 0 }, // boundaries
    { itemName: 'Generic Item', itemSellIn: 0, itemQuality: 5, finalQuality: 3 }, // boundaries
    { itemName: 'Generic Item', itemSellIn: 5, itemQuality: 5, finalQuality: 4 }, // boundaries
    { itemName: 'Generic Item', itemSellIn: 5, itemQuality: 0, finalQuality: 0 }, // boundaries
    { itemName: 'Generic Item', itemSellIn: 50, itemQuality: 0, finalQuality: 0 }, // boundaries
    { itemName: 'Generic Item', itemSellIn: 0, itemQuality: 50, finalQuality: 48 }, // boundaries
    { itemName: 'Generic Item', itemSellIn: 50, itemQuality: 50, finalQuality: 49 }, // boundaries
    { itemName: 'Generic Item', itemSellIn: 49, itemQuality: 0, finalQuality: 0 }, // boundaries
    { itemName: 'Generic Item', itemSellIn: 0, itemQuality: 49, finalQuality: 47 }, // boundaries
    { itemName: 'Generic Item', itemSellIn: 49, itemQuality: 49, finalQuality: 48 }, // boundaries
    { itemName: 'Generic Item', itemSellIn: 6, itemQuality: 0, finalQuality: 0 }, // boundaries
    { itemName: 'Generic Item', itemSellIn: 0, itemQuality: 6, finalQuality: 4 }, // boundaries
    { itemName: 'Generic Item', itemSellIn: 6, itemQuality: 6, finalQuality: 5 }, // boundaries
    { itemName: 'Generic Item', itemSellIn: 10, itemQuality: 0, finalQuality: 0 }, // boundaries
    { itemName: 'Generic Item', itemSellIn: 0, itemQuality: 10, finalQuality: 8 }, // boundaries
    { itemName: 'Generic Item', itemSellIn: 10, itemQuality: 10, finalQuality: 9 }, // boundaries
    { itemName: 'Generic Item', itemSellIn: 11, itemQuality: 0, finalQuality: 0 }, // boundaries
    { itemName: 'Generic Item', itemSellIn: 0, itemQuality: 11, finalQuality: 9 }, // boundaries
    { itemName: 'Generic Item', itemSellIn: 11, itemQuality: 11, finalQuality: 10 }, // boundaries
    { itemName: 'Generic Item', itemSellIn: -1, itemQuality: 0, finalQuality: 0 }, // boundaries
    { itemName: 'Generic Item', itemSellIn: 0, itemQuality: -1, finalQuality: -1 }, // boundaries
    { itemName: 'Generic Item', itemSellIn: -1, itemQuality: -1, finalQuality: -1 }, // boundaries
    { itemName: 'Generic Item', itemSellIn: -2, itemQuality: 2, finalQuality: 0 }, // boundaries
    { itemName: 'Generic Item', itemSellIn: 2, itemQuality: -2, finalQuality: -2 }, // boundaries
    { itemName: 'Generic Item', itemSellIn: -2, itemQuality: -2, finalQuality: -2 }, // boundaries
    { itemName: 'Conjured', itemSellIn: 0, itemQuality: 0, finalQuality: 0 * 2 }, // zero
    { itemName: 'Conjured', itemSellIn: 1, itemQuality: 0, finalQuality: 0 * 2 }, // one
    { itemName: 'Conjured', itemSellIn: 0, itemQuality: 1, finalQuality: 0 * 2 }, // one
    { itemName: 'Conjured', itemSellIn: 1, itemQuality: 1, finalQuality: 0 * 2 }, // one
    { itemName: 'Conjured', itemSellIn: 5, itemQuality: 0, finalQuality: 0 * 2 }, // boundaries
    { itemName: 'Conjured', itemSellIn: 0, itemQuality: 5, finalQuality: 3 * 2 }, // boundaries
    { itemName: 'Conjured', itemSellIn: 5, itemQuality: 5, finalQuality: 4 * 2 }, // boundaries
    { itemName: 'Conjured', itemSellIn: 5, itemQuality: 0, finalQuality: 0 * 2 }, // boundaries
    { itemName: 'Conjured', itemSellIn: 50, itemQuality: 0, finalQuality: 0 * 2 }, // boundaries
    { itemName: 'Conjured', itemSellIn: 0, itemQuality: 50, finalQuality: 48 * 2 }, // boundaries
    { itemName: 'Conjured', itemSellIn: 50, itemQuality: 50, finalQuality: 49 * 2 }, // boundaries
    { itemName: 'Conjured', itemSellIn: 49, itemQuality: 0, finalQuality: 0 * 2 }, // boundaries
    { itemName: 'Conjured', itemSellIn: 0, itemQuality: 49, finalQuality: 47 * 2 }, // boundaries
    { itemName: 'Conjured', itemSellIn: 49, itemQuality: 49, finalQuality: 48 * 2 }, // boundaries
    { itemName: 'Conjured', itemSellIn: 6, itemQuality: 0, finalQuality: 0 * 2 }, // boundaries
    { itemName: 'Conjured', itemSellIn: 0, itemQuality: 6, finalQuality: 4 * 2 }, // boundaries
    { itemName: 'Conjured', itemSellIn: 6, itemQuality: 6, finalQuality: 5 * 2 }, // boundaries
    { itemName: 'Conjured', itemSellIn: 10, itemQuality: 0, finalQuality: 0 * 2 }, // boundaries
    { itemName: 'Conjured', itemSellIn: 0, itemQuality: 10, finalQuality: 8 * 2 }, // boundaries
    { itemName: 'Conjured', itemSellIn: 10, itemQuality: 10, finalQuality: 9 * 2 }, // boundaries
    { itemName: 'Conjured', itemSellIn: 11, itemQuality: 0, finalQuality: 0 * 2 }, // boundaries
    { itemName: 'Conjured', itemSellIn: 0, itemQuality: 11, finalQuality: 9 * 2 }, // boundaries
    { itemName: 'Conjured', itemSellIn: 11, itemQuality: 11, finalQuality: 10 * 2 }, // boundaries
    { itemName: 'Conjured', itemSellIn: -1, itemQuality: 0, finalQuality: 0 * 2 }, // boundaries
    { itemName: 'Conjured', itemSellIn: 0, itemQuality: -1, finalQuality: -1 * 2 }, // boundaries
    { itemName: 'Conjured', itemSellIn: -1, itemQuality: -1, finalQuality: -1 * 2 }, // boundaries
    { itemName: 'Conjured', itemSellIn: -2, itemQuality: 2, finalQuality: 0 * 2 }, // boundaries
    { itemName: 'Conjured', itemSellIn: 2, itemQuality: -2, finalQuality: -2 * 2 }, // boundaries
    { itemName: 'Conjured', itemSellIn: -2, itemQuality: -2, finalQuality: -2 * 2 }, // boundaries
    { itemName: 'Aged Brie', itemSellIn: -1, itemQuality: 0, finalQuality: 2 }, // boundaries
    { itemName: 'Aged Brie', itemSellIn: 0, itemQuality: -1, finalQuality: 1 }, // boundaries
    { itemName: 'Aged Brie', itemSellIn: -1, itemQuality: -1, finalQuality: 1 }, // boundaries
    { itemName: 'Aged Brie', itemSellIn: -2, itemQuality: 2, finalQuality: 4 }, // boundaries
    { itemName: 'Aged Brie', itemSellIn: 2, itemQuality: -2, finalQuality: -1 }, // boundaries
    { itemName: 'Aged Brie', itemSellIn: -2, itemQuality: -2, finalQuality: 0 }, // boundaries
    { itemName: 'Sulfuras, Hand of Ragnaros', itemSellIn: -1, itemQuality: 0, finalQuality: 0 }, // boundaries
    { itemName: 'Sulfuras, Hand of Ragnaros', itemSellIn: 0, itemQuality: -1, finalQuality: -1 }, // boundaries
    { itemName: 'Sulfuras, Hand of Ragnaros', itemSellIn: -1, itemQuality: -1, finalQuality: -1 }, // boundaries
    { itemName: 'Sulfuras, Hand of Ragnaros', itemSellIn: -2, itemQuality: 2, finalQuality: 2 }, // boundaries
    { itemName: 'Sulfuras, Hand of Ragnaros', itemSellIn: 2, itemQuality: -2, finalQuality: -2 }, // boundaries
    { itemName: 'Sulfuras, Hand of Ragnaros', itemSellIn: -2, itemQuality: -2, finalQuality: -2 }, // boundaries
    { itemName: 'Backstage passes to a TAFKAL80ETC concert', itemSellIn: -1, itemQuality: 0, finalQuality: 0 }, // boundaries
    { itemName: 'Backstage passes to a TAFKAL80ETC concert', itemSellIn: 0, itemQuality: -1, finalQuality: 0 }, // boundaries
    { itemName: 'Backstage passes to a TAFKAL80ETC concert', itemSellIn: -1, itemQuality: -1, finalQuality: 0 }, // boundaries
    { itemName: 'Backstage passes to a TAFKAL80ETC concert', itemSellIn: -2, itemQuality: 2, finalQuality: 0 }, // boundaries
    { itemName: 'Backstage passes to a TAFKAL80ETC concert', itemSellIn: 2, itemQuality: -2, finalQuality: 1 }, // boundaries
    { itemName: 'Backstage passes to a TAFKAL80ETC concert', itemSellIn: -2, itemQuality: -2, finalQuality: 0 }, // boundaries
  ];
  theory.forEach(x =>
    it(`should ${x.itemName} with ${x.itemSellIn} sellIn and ${x.itemQuality} be of quality ${x.finalQuality}`, () => {
    const gildedRose = new GildedRose([new Item(x.itemName, x.itemSellIn, x.itemQuality)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(x.finalQuality);
    })
  );
});

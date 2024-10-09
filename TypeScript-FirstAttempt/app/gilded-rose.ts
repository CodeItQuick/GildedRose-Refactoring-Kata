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
    type ItemType = 'Conjured' | 'Backstage' | 'Sulfuras' | 'Brie' | 'Generic';

    for (let i = 0; i < this.items.length; i++) {

      const itemName = this.items[i].name;

      const itemType = (item: string): ItemType => {
        if (this.items[i].name.includes('Conjured')) {
          return "Conjured";
        }

        const items =
          { 'Aged Brie': 'Brie',
          'Sulfuras, Hand of Ragnaros': 'Sulfuras',
          'Backstage passes to a TAFKAL80ETC concert': 'Backstage'};

        return items[item] ?? 'Generic';
      }

      const CalculateQuality = {
        'Generic': this.CalculateGenericItem,
        'Conjured': this.CalculateConjured,
        'Brie': this.CalculateAgedBrie,
        'Backstage': this.CalculatePasses,
      }

      const key = itemType(itemName);
      CalculateQuality[key]?.(i, this.items[i]);

    }

    return this.items;
  }

  private CalculateGenericItem(i: number, item: any) {
    if (item.quality <= 0) {
      item.sellIn = item.sellIn - 1;
      return;
    }

    item.quality = item.quality - 1
    item.sellIn = item.sellIn - 1;
    if (item.sellIn < 0 && item.quality > 0) {
      item.quality = item.quality - 1
    }
  }
  private CalculateConjured(i: number, item: any) {
    if (item.quality <= 0) {
      item.sellIn = item.sellIn - 1;
      item.quality = item.quality * 2;
      return;
    }

    item.quality = item.quality - 1
    item.sellIn = item.sellIn - 1;
    if (item.sellIn < 0 && item.quality > 0) {
      item.quality = item.quality - 1
    }
    item.quality = item.quality * 2;

  }

  private CalculateAgedBrie(i: number, item: any) {
    if (item.quality >= 50) {
      item.sellIn = item.sellIn - 1;
      return;
    }

    item.quality = item.quality + 1
    item.sellIn = item.sellIn - 1;
    if (item.sellIn < 0 && item.quality < 50) {
      item.quality = item.quality + 1
    }
  }

  private CalculatePasses(i: number, item: any) {
    if (item.quality < 50) {
      item.quality = item.quality + 1
    }
    if (item.sellIn < 11) {
      item.quality = item.quality + 1
    }
    if (item.sellIn < 6) {
      item.quality = item.quality + 1
    }
    item.sellIn = item.sellIn - 1;
    if (item.sellIn < 0) {
      item.quality = 0
    }
  }
}

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
    for (let i = 0; i < this.items.length; i++) {

      const item = this.items[i];

      const CalculateQuality = {
        'Generic': this.CalculateGenericItem,
        'Conjured': this.CalculateConjured,
        'Brie': this.CalculateAgedBrie,
        'Backstage': this.CalculatePasses,
      }

      const key = GildedRose.itemType(item.name);
      CalculateQuality[key]?.(item);

    }

    return this.items;
  }

  private static itemType(item: string): 'Conjured' | 'Backstage' | 'Sulfuras' | 'Brie' | 'Generic' {
    if (item.includes('Conjured')) {
      return "Conjured";
    }

    const items =
      { 'Aged Brie': 'Brie',
        'Sulfuras, Hand of Ragnaros': 'Sulfuras',
        'Backstage passes to a TAFKAL80ETC concert': 'Backstage'};

    return items[item] ?? 'Generic';
  }

  private CalculateGenericItem(item: any) {
    item.sellIn -= 1;

    if (item.quality <= 0) {
      return;
    }
    if (item.quality > 1) {
      item.quality -= 1;
    }
    if (item.sellIn <= 0) {
      item.quality -= 1;
    }
  }
  private CalculateConjured(item: any) {
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

  private CalculateAgedBrie(item: any) {
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

  private CalculatePasses(item: any) {
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

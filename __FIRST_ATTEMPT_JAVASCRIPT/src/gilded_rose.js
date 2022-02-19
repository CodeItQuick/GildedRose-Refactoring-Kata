class Item {
    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

class Shop {
    constructor(items = []) {
        this.items = items;
    }

    updateQuality() {
        // loop through all the items in the shop list
        for (var i = 0; i < this.items.length; i++) {
            const isVestOrElixer = this.items[i].name == '+5 Dexterity Vest' || this.items[i].name == 'Elixir of the Mongoose';
            if (isVestOrElixer) {
                this.degradeQualityElixerOrVest(i);
            }
            const isBrieOrPassesOrSulfuras = this.items[i].name == 'Aged Brie' ||
                this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert' ||
                this.items[i].name == 'Sulfuras, Hand of Ragnaros';
            if (isBrieOrPassesOrSulfuras) {
                this.degradeQualityBriePassesOrSulfuras(i);
            }
            if (this.items[i].name === 'Conjured Beer of Might') {
                this.items[i].quality = this.items[i].quality - 2;
            }
            // for all non-legendary (not Sulfuras Hands of Ragnaros) items, reduce the sellIn by one
            if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].sellIn = this.items[i].sellIn - 1;
            }
            this.preventSellInLessThanOne(i);
        }

        return this.items;
    }

    degradeQualityBriePassesOrSulfuras(i) {
        if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
            if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
                if (this.items[i].sellIn < 11) {
                    if (this.items[i].quality < 50) {
                        this.items[i].quality = this.items[i].quality + 1;
                    }
                }
                if (this.items[i].sellIn < 6) {
                    if (this.items[i].quality < 50) {
                        this.items[i].quality = this.items[i].quality + 1;
                    }
                }
            }
        }
    }

    degradeQualityElixerOrVest(i) {
        if (this.items[i].quality > 0) {
            if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                // this to me is a standard item - degrading at a quality of 1
                this.items[i].quality = this.items[i].quality - 1;
            }
        }
    }

    preventSellInLessThanOne(i) {
        if (this.items[i].sellIn < 0) {
            if (this.items[i].name != 'Aged Brie') {
                if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
                    if (this.items[i].quality > 0) {
                        if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                            this.items[i].quality = this.items[i].quality - 1;
                        }
                    }
                } else {
                    this.items[i].quality = this.items[i].quality - this.items[i].quality;
                }
            } else {
                if (this.items[i].quality < 50) {
                    this.items[i].quality = this.items[i].quality + 1;
                }
            }
        }
    }
}

module.exports = {
    Item,
    Shop
}

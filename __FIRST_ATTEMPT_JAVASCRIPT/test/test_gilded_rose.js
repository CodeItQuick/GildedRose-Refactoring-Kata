var {expect} = require('chai');
var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose Acceptance Tests", function() {

  it("Given the exact items, when the items are inspected on Day 0, then we get the expected output", () => {

    const items = [
      new Item("+5 Dexterity Vest", 10, 20),
      new Item("Aged Brie", 2, 0),
      new Item("Elixir of the Mongoose", 5, 7),
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),

      // This Conjured item does not work properly yet
      new Item("Conjured Mana Cake", 3, 6),
    ];
    const days = Number(2);
    const gildedRose = new Shop(items);

    const resultItems = [
        gildedRose.items[0],
        gildedRose.items[1],
        gildedRose.items[2],
        gildedRose.items[3],
        gildedRose.items[4],
        gildedRose.items[5],
        gildedRose.items[6],
        gildedRose.items[7],
    ];
    expect(`${resultItems[0].name}, ${resultItems[0].sellIn}, ${resultItems[0].quality}`).to.equal("+5 Dexterity Vest, 10, 20");
    expect(`${resultItems[1].name}, ${resultItems[1].sellIn}, ${resultItems[1].quality}`).to.equal("Aged Brie, 2, 0");
    expect(`${resultItems[2].name}, ${resultItems[2].sellIn}, ${resultItems[2].quality}`).to.equal("Elixir of the Mongoose, 5, 7");
    expect(`${resultItems[3].name}, ${resultItems[3].sellIn}, ${resultItems[3].quality}`).to.equal("Sulfuras, Hand of Ragnaros, 0, 80");
    expect(`${resultItems[4].name}, ${resultItems[4].sellIn}, ${resultItems[4].quality}`).to.equal("Sulfuras, Hand of Ragnaros, -1, 80");
    expect(`${resultItems[5].name}, ${resultItems[5].sellIn}, ${resultItems[5].quality}`).to.equal("Backstage passes to a TAFKAL80ETC concert, 15, 20");
    expect(`${resultItems[6].name}, ${resultItems[6].sellIn}, ${resultItems[6].quality}`).to.equal("Backstage passes to a TAFKAL80ETC concert, 10, 49");
    expect(`${resultItems[7].name}, ${resultItems[7].sellIn}, ${resultItems[7].quality}`).to.equal("Backstage passes to a TAFKAL80ETC concert, 5, 49");
    gildedRose.updateQuality();

  })
  it("Given the exact items, when the items are inspected on Day 1, then we get the expected output", () => {

    const items = [
      new Item("+5 Dexterity Vest", 10, 20),
      new Item("Aged Brie", 2, 0),
      new Item("Elixir of the Mongoose", 5, 7),
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),

      // This Conjured item does not work properly yet
      new Item("Conjured Mana Cake", 3, 6),
    ];
    const gildedRose = new Shop(items);

    gildedRose.updateQuality();

    const resultItems = [
      gildedRose.items[0],
      gildedRose.items[1],
      gildedRose.items[2],
      gildedRose.items[3],
      gildedRose.items[4],
      gildedRose.items[5],
      gildedRose.items[6],
      gildedRose.items[7],
    ];
    expect(`${resultItems[0].name}, ${resultItems[0].sellIn}, ${resultItems[0].quality}`).to.equal("+5 Dexterity Vest, 9, 19");
    expect(`${resultItems[1].name}, ${resultItems[1].sellIn}, ${resultItems[1].quality}`).to.equal("Aged Brie, 1, 1");
    expect(`${resultItems[2].name}, ${resultItems[2].sellIn}, ${resultItems[2].quality}`).to.equal("Elixir of the Mongoose, 4, 6");
    expect(`${resultItems[3].name}, ${resultItems[3].sellIn}, ${resultItems[3].quality}`).to.equal("Sulfuras, Hand of Ragnaros, 0, 80");
    expect(`${resultItems[4].name}, ${resultItems[4].sellIn}, ${resultItems[4].quality}`).to.equal("Sulfuras, Hand of Ragnaros, -1, 80");
    expect(`${resultItems[5].name}, ${resultItems[5].sellIn}, ${resultItems[5].quality}`).to.equal("Backstage passes to a TAFKAL80ETC concert, 14, 21");
    expect(`${resultItems[6].name}, ${resultItems[6].sellIn}, ${resultItems[6].quality}`).to.equal("Backstage passes to a TAFKAL80ETC concert, 9, 50");
    expect(`${resultItems[7].name}, ${resultItems[7].sellIn}, ${resultItems[7].quality}`).to.equal("Backstage passes to a TAFKAL80ETC concert, 4, 50");
    gildedRose.updateQuality();

  })
  it("Given a +5 Dexterity Vest, when updateQuality is called, " +
      "then it has the expected parameters on day 0", function() {
    const gildedRose = new Shop([ new Item("+5 Dexterity Vest", 10, 20) ]);

    // day 0 updateQuality has NOT been called
    // const items = gildedRose.updateQuality();

    expect(gildedRose.items[0].name).to.equal("+5 Dexterity Vest");
    expect(gildedRose.items[0].sellIn).to.equal(10);
    expect(gildedRose.items[0].quality).to.equal(20);
  });
  it("Given a +5 Dexterity Vest, when updateQuality is called, " +
      "then it has the expected parameters on day 1", function() {
    const gildedRose = new Shop([ new Item("+5 Dexterity Vest", 10, 20) ]);

    // day 0 updateQuality has NOT been called
    const items = gildedRose.updateQuality();

    expect(items[0].name).to.equal("+5 Dexterity Vest");
    expect(items[0].sellIn).to.equal(9);
    expect(items[0].quality).to.equal(19);
  });
  it("Given a Aged Brie, when updateQuality is called, " +
      "then it has the expected parameters on day 0", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 2, 0) ]);

    // day 0 updateQuality has NOT been called
    // const items = gildedRose.updateQuality();

    expect(gildedRose.items[0].name).to.equal("Aged Brie");
    expect(gildedRose.items[0].sellIn).to.equal(2);
    expect(gildedRose.items[0].quality).to.equal(0);
  });
  it("Given a Aged Brie, when updateQuality is called, " +
      "then it has the expected parameters on day 1", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 2, 0) ]);

    // day 0 updateQuality has NOT been called
    const items = gildedRose.updateQuality();

    expect(items[0].name).to.equal("Aged Brie");
    expect(items[0].sellIn).to.equal(1);
    expect(items[0].quality).to.equal(1);
  });
  it("Given a Elixir of the Mongoose, when updateQuality is called, " +
      "then it has the expected parameters on day 0", function() {
    const gildedRose = new Shop([ new Item("Elixir of the Mongoose", 5, 7) ]);

    // day 0 updateQuality has NOT been called
    // const items = gildedRose.updateQuality();

    expect(gildedRose.items[0].name).to.equal("Elixir of the Mongoose");
    expect(gildedRose.items[0].sellIn).to.equal(5);
    expect(gildedRose.items[0].quality).to.equal(7);
  });
  it("Given a Elixir of the Mongoose, when updateQuality is called, " +
      "then it has the expected parameters on day 1", function() {
    const gildedRose = new Shop([ new Item("Elixir of the Mongoose", 5, 7) ]);

    // day 0 updateQuality has NOT been called
    const items = gildedRose.updateQuality();

    expect(items[0].name).to.equal("Elixir of the Mongoose");
    expect(items[0].sellIn).to.equal(4);
    expect(items[0].quality).to.equal(6);
  });
  it("Given a Sulfuras, Hand of Ragnaros, when updateQuality is called, " +
      "then it has the expected parameters on day 0", function() {
    const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 0, 80) ]);

    // day 0 updateQuality has NOT been called
    // const items = gildedRose.updateQuality();

    expect(gildedRose.items[0].name).to.equal("Sulfuras, Hand of Ragnaros");
    expect(gildedRose.items[0].sellIn).to.equal(0);
    expect(gildedRose.items[0].quality).to.equal(80);
  });
  it("Given a Sulfuras, Hand of Ragnaros, when updateQuality is called, " +
      "then it has the expected parameters on day 1", function() {
    const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 0, 80) ]);

    // day 0 updateQuality has NOT been called
    const items = gildedRose.updateQuality();

    expect(items[0].name).to.equal("Sulfuras, Hand of Ragnaros");
    expect(items[0].sellIn).to.equal(0);
    expect(items[0].quality).to.equal(80);
  });
  it("Given a Backstage passes to a TAFKAL80ETC concert, when updateQuality is called, " +
      "then it has the expected parameters on day 0", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20) ]);

    // day 0 updateQuality has NOT been called
    // const items = gildedRose.updateQuality();

    expect(gildedRose.items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(gildedRose.items[0].sellIn).to.equal(15);
    expect(gildedRose.items[0].quality).to.equal(20);
  });
  it("Given a Backstage passes to a TAFKAL80ETC concert, when updateQuality is called, " +
      "then it has the expected parameters on day 1", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20) ]);

    // day 0 updateQuality has NOT been called
    const items = gildedRose.updateQuality();

    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(14);
    expect(items[0].quality).to.equal(21);
  });
  it("Given a Conjured Beer of Might, when updateQuality is called, " +
      "then it has the expected parameters on day 0", function() {
    const gildedRose = new Shop([ new Item("Conjured Beer of Might", 5, 25) ]);

    // day 0 updateQuality has NOT been called
    // const items = gildedRose.updateQuality();

    expect(gildedRose.items[0].name).to.equal("Conjured Beer of Might");
    expect(gildedRose.items[0].sellIn).to.equal(5);
    expect(gildedRose.items[0].quality).to.equal(25);
  });
  it("Given a Conjured Beer of Might, when updateQuality is called, " +
      "then it has the expected parameters on day 1", function() {
    const gildedRose = new Shop([ new Item("Conjured Beer of Might", 5, 25) ]);

    // day 0 updateQuality has NOT been called
    const items = gildedRose.updateQuality();

    expect(items[0].name).to.equal("Conjured Beer of Might");
    expect(items[0].sellIn).to.equal(4);
    expect(items[0].quality).to.equal(23);
  });
});

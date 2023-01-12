import BourbonSpire from "./assets/images/featured/bourbon&Spire.png";
import WheatSpire from "./assets/images/featured/wheat.png";
import GrainSpire from "./assets/images/featured/grain.png";
import RyeSpire from "./assets/images/featured/rye.png";
const productsData = [
  {
    category: "BOURBON & SPIRE",
    name: "SPIRIT — BOURBON WHISKEY",
    description:
      "Checking all the boxes that most bourbon enthusiasts anticipate when enjoying a great bourbon, yet embodying the smooth characteristics that make for an approachable bourbon for new whiskey drinkers, this bourbon is a remarkably smooth combination of corn, rye and barley. Once distilled, we age our bourbon in new American Oak barrels producing a rich, deep yet sweet spirit.",
  },
  {
    category: "BOURBON & SPIRE",
    name: "SPIRE — AMERICAN OAK",
    description:
      "After bottling our bourbon, we place an American Oak spire in the bottle, which contains hundreds of naturally occurring botanicals, ranging from butterscotch to vanilla to toasted marshmallows. The combination produces a rich, velvety whiskey full of caramel, butterscotch, and allspice notes.",
  },
  {
    category: "BOURBON & SPIRE",
    name: "FIRE — MEDIUM TOAST",
    description:
      "Before we place the spire into the 4 Grain & Spire, we expose it to fire, technically a Medium Toast, toasting the wood to the perfect degree that will produce a finish that is deep and rich with subtle notes of candied fruit, vanilla, toffee, and caramel.",
  },
  {
    category: "WHEAT & SPIRE",
    name: "SPIRIT — WHEATED BOURBON",
    description:
      "Our Wheat & Spire begins with a remarkably smooth combination of 51% corn, 45% wheat and 4% malted barley. Once distilled, we age our bourbon in new American Oak barrels producing a rich, deep yet sweet spirit.",
  },
  {
    category: "WHEAT & SPIRE",
    name: "SPIRE — FRENCH OAK",
    description:
      "After bottling our wheated bourbon, we place a French Oak spire in the bottle, which contains twice as many naturally occurring botanicals and twice the flavor as American Oak, producing flavors such as cinnamon, allspice, and licorice.",
  },
  {
    category: "WHEAT & SPIRE",
    name: "FIRE — MEDIUM TOAST",
    description:
      "Before we place the spire into the wheated bourbon, we expose it to fire, technically a Medium Toast, toasting the wood to the perfect degree that will produce a finish that is deep and rich with subtle notes of candied fruit, vanilla, toffee, and caramel.",
  },
  {
    category: "4 GRAIN & SPIRE",
    name: "SPIRIT — FOUR GRAIN BOURBON",
    description:
      "A traditional bourbon is distilled using three grains. Introduce a fourth grain into the mix, and a whole new world of flavors emerge. 4 Grain & Spire is distilled with corn, rye, malted barley and wheat, making for a bold, flavorful spirit. Once distilled, we age our bourbon in new American Oak barrels producing a rich, deep yet sweet spirit.",
  },
  {
    category: "4 GRAIN & SPIRE",
    name: "SPIRE — AMERICAN OAK",
    description:
      "After bottling our four grain bourbon, we place an American Oak spire in the bottle, which contains hundreds of naturally occurring botanicals, ranging from butterscotch to vanilla to toasted marshmallows. The combination produces a bold, complex, sweet, slightly spicy whiskey.",
  },
  {
    category: "4 GRAIN & SPIRE",
    name: "FIRE — MEDIUM TOAST",
    description:
      "Before we place the spire into the bourbon, we expose it to fire, technically a Medium Toast, toasting the wood to the perfect degree that will produce a finish that is deep and rich with subtle notes of candied fruit, vanilla, orange spice, and caramel.",
  },
  {
    category: "RYE & SPIRE",
    name: "SPIRIT — RYE WHISKEY",
    description:
      "We cherish rye whiskeys that are bold In flavor and rich in depth, so we produce our rye with 95% rye grain in the mash bill – perfect for cold nights by the fire. Once distilled, we age our rye in charred barrels made of American oak.",
  },
  {
    category: "RYE & SPIRE",
    name: "SPIRE — AMERICAN OAK",
    description:
      "After bottling our rye whiskey, we place an American Oak spire in the bottle, which contains hundreds of naturally occurring botanicals, ranging from butterscotch to vanilla to toasted marshmallows. The combination produces a bright, yet savory whiskey, full of allspice, cinnamon, and licorice notes.",
  },
  {
    category: "RYE & SPIRE",
    name: "FIRE — MEDIUM TOAST",
    description:
      "Before we place the spire into the rye, we expose it to fire, technically a Heavy Toast, toasting the wood to the perfect degree that will produce a finish that is deep and rich with subtle notes of black licorice, candied cherries, and caramel.",
  },
];

const categoriesData = [
  {
    name: "BOURBON & SPIRE",
    description: "Bourbon finished with a toasted American Oak spire",
    price: 49.99,
    imageURL: BourbonSpire,
  },
  {
    name: "WHEAT & SPIRE",
    description: "Wheated bourbon finished with a toasted French Oak spire",
    price: 49.99,
    imageURL: WheatSpire,
  },
  {
    name: "4 GRAIN & SPIRE",
    description:
      "Four grain bourbon finished with a toasted American Oak spire",
    price: 49.99,
    imageURL: GrainSpire,
  },
  {
    name: "RYE & SPIRE",
    description: "Rye whiskey finished with a charred American Oak spire",
    price: 49.99,
    imageURL: RyeSpire,
  },
];

export default { productsData, categoriesData };

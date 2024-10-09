import { Config } from "./config.types";

const config: Config = {
  eventName: "Temple of Rust",
  locale: "en",
  description: `
    An interactive map of the Temple of Rust.

    Map by [Jog Brogzin](http://jogbrogzin.com)
  `,
  attributions: [
    "Map designed by [Jog Brogzin](https://www.jogbrogzin.com/)",
    // Used in the favicon
    "Direction signs icon by [Delapouite](https://delapouite.com/) under [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/)",
  ],
  theme: {
    background: "white",
    "highlight-background": "rgb(241 245 249)",
    border: "rgb(226 232 240)",
    "primary-text": "rgb(43, 43, 43)",
    "secondary-text": "rgb(100 116 139)",
    accent: "rgb(8,114,50)",
    disabled: "#cbd5e1",
  },
  map: {
    src: "/SQ043 Temple of Rust.jpg",
    rooms: [
      {
        id: "entrance",
        label: "Entrance",
        aliases: ["Entrance"],
        description: `
          # Descend down through the well
        `,
        area: [
          [548, 2112],
          [1170, 1770],
          [1526, 1984],
          [893, 2336],
        ],
      },
      {
        id: "torturechamber",
        label: "Torture Chamber",
        aliases: ["Torture Chamber"],
        description: `
          Contains torture devices in various states of disrepair.
        `,
        area: [
          [362, 1439],
          [984, 1097],
          [1340, 1303],
          [727, 1638],
        ],
      },
      {
        id: "idol",
        label: "Idol Room",
        aliases: ["Idol Room"],
        description: `
          Large stone idol with a sinister face stands here.
        `,
        area: [
          [1289, 1760],
          [1289, 1635],
          [1543, 1490],
          [1783, 1490],
          [2037, 1635],
          [2037, 1760],
          [1783, 1919],
          [1543, 1919],
        ],
      },
      {
        id: "mausoleum",
        label: "Mausoleum",
        aliases: ["Mausoleum"],
        description: `
          Bones and dust.
        `,
        area: [
          [1796, 1415],
          [2436, 1070],
          [2774, 1270],
          [2165, 1618],
        ],
      },
      {
        id: "summoner",
        label: "Summoner's Chamber",
        aliases: ["Summoner"],
        description: `
          A pentagram with candles is in the centre of the room, with an altar to the side.
        `,
        area: [
          [1607, 2085],
          [2094, 1814],
          [2642, 2136],
          [2199, 3080],
        ],
      },
      {
        id: "library",
        label: "Library",
        aliases: ["Library"],
        description: `
          Bookcases line the walls of this room, with a raised reading platform at the side.
        `,
        area: [
          [1109, 2373],
          [1607, 2085],
          [2199, 3080],
          [1658, 2691],
        ],
      },
      {
        id: "statue",
        label: "Statue Room",
        description: `
          A statue of a woman holding a harp stands in the centre of this circular room.
        `,
        area: [
          [1976, 2633],
          [2487, 2390],
          [2971, 2667],
          [2439, 2948],
        ],
      },
      {
        id: "storage",
        label: "Storage Room",
        aliases: ["Storage Room"],
        description: `
          Weapons racks and chests fill this room.
        `,
        area: [
          [2602, 2965],
          [2974, 2755],
          [3326, 2968],
          [2954, 3165],
        ],
      },
      {
        id: "jail",
        label: "Jail",
        aliases: ["Jail"],
        description: `
          Cages contain the bones of long dead prisoners.
        `,
        area: [
          [2923, 2353],
          [3313, 2153],
          [3651, 2356],
          [3282, 2569],
        ],
      },
    ],
  },
};

export default config;

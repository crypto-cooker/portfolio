const filterKey = [
  { title: "show all", key: "*" },
  { title: "Casino", key: "casino" },
  { title: "nft", key: "nft" },
  { title: "game", key: "game" },
  { title: "ecommerce", key: "ecommerce" },
  { title: "design", key: "design" },
];

const projectData = [
  {
    type: ["nft", "design"],
    role: "Frontend and Web3 Developer",
    skills: ["Next.js", "Web3.Js", "Solidity"],
    imgUrl: "imgs/works/work17.jpg",
    summary:
      "Dual Staking Functionality, FlareDrop (WFLR) Delegation Pool, Purchase & Burn NINJA Token Buyback and Burn",
    siteUrl: "https://ninja.shogun-safari.xyz/",
  },
  {
    type: ["casino", "game"],
    role: "FullStack Developer",
    skills: ["React.Js", "Node.Js", "Ngnix"],
    imgUrl: "imgs/works/work19.jpg",
    summary:
      "Platform for games like Baccarat, Roulette, Andar Bahar, Sic Bo, Dragon tiger, Designed and Built all.",
    siteUrl: "https://kasagames.com/",
  },
  {
    type: ["nft", "design"],
    role: "Frontend and Solidity Developer",
    skills: ["Next.Js", "Web3.Js"],
    imgUrl: "imgs/works/work1.jpg",
    summary:
      "NFT Mint Project : 15% of the mint cost is shared with NFT holders.",
    siteUrl: "https://flaregods.xyz/",
  },
  {
    type: ["casino", "game"],
    role: "FullStack Developer",
    skills: ["React.Js", "Node.Js", "Ngnix"],
    imgUrl: "imgs/works/work20.jpg",
    summary: "Sports Betting Site",
    siteUrl: "https://blockchainbets.club/",
  },

  {
    type: "game",
    role: "Game Developer",
    skills: ["Unity", "React.Js", "Node.Js", "Solana", "Rust"],
    imgUrl: "imgs/works/work9.jpg",
    summary: "DegenTaxi - Car Crash Game (Solana)",
    siteUrl: "https://degentaxi.io/",
  },
  {
    type: "game",
    role: "Frontend and Web3 Developer",
    skills: ["React.Js", "Node.Js", "AWS", "Solana", "Rust"],
    imgUrl: "imgs/works/work10.jpg",
    summary:
      "This is coin-flip game on solana network. Payment is Sol and users can put their amount in this game. ",
    siteUrl: "https://coinflip.deezkits.com/",
  },
  {
    type: ["nft"],
    role: "Frontend and Web3 Developer",
    skills: ["Next.Js", "Node.Js", "Three.Js", "Web3.Js"],
    imgUrl: "imgs/works/work12.jpg",
    summary: "Cobalt NFT Minting",
    siteUrl: "https://cobalt.shop/",
  },
  {
    type: "game",
    role: "Solidity and Rust Developer",
    skills: ["React.Js", "Web3.Js", "Solidity", "Ethereum"],
    imgUrl: "imgs/works/work11.jpg",
    summary: "Crypto Legions Game (P2E)",
    siteUrl: "https://cryptolegions.app/",
  },
  {
    type: ["nft", "design"],
    role: "Frontend and Solidity Developer",
    skills: ["Next.Js", "Web3.Js", "Solidity"],
    imgUrl: "imgs/works/work7.jpg",
    summary: "BeastiyBit NFT Minting",
    siteUrl: "https://beastybits.com/",
  },
  {
    type: ["nft", "design"],
    role: "Frontend and Solidity Developer",
    skills: ["Next.Js", "Web3.Js", "Solidity"],
    imgUrl: "imgs/works/work8.jpg",
    summary: "CuteInsane NFT Minting | Staking",
    siteUrl: "https://cutetoinsane.online/",
  },
  {
    type: ["nft", "game"],
    role: "Solana Developer",
    skills: ["Next.Js", "Node.Js", "AWS", "Solana"],
    imgUrl: "imgs/works/work5.png",
    summary: "Solarmy | NFT Game | NFT Staking | Fusion",
    siteUrl: "https://game.solarmy.io/",
  },
  {
    type: ["nft", "design"],
    role: "Frontend and Solidity Developer",
    skills: ["React.Js", "Web3.Js", "Solidity"],
    imgUrl: "imgs/works/work3.png",
    summary: "NFT Marketplace (Songbird Network)",
    siteUrl: "https://market.doodcats.net/",
  },
  {
    type: ["nft", "design"],
    role: "Frontend and Web3 Developer",
    skills: ["Next.Js", "Web3.Js", "Solidity"],
    imgUrl: "imgs/works/work2.jpg",
    summary: "NFT Minting | Staking",
    siteUrl: "https://doodlebunnyflr.live/",
  },
  {
    type: ["nft", "design"],
    role: "Frontend and Solidity Developer",
    skills: ["React.Js", "Web3.Js", "Solidity"],
    imgUrl: "imgs/works/work18.jpg",
    summary: "NFT Staking in Songbird Network",
    siteUrl: "https://tsphunt.xyz/",
  },
  {
    type: ["nft", "design"],
    role: "Frontend and Solidity Developer",
    skills: ["React.Js", "Web3.Js", "Solidity"],
    imgUrl: "imgs/works/work4.jpg",
    summary:
      "NFT Staking (Songbird Network). Holders may stake DoodCats v3 NFTs and DedDoods NFTs to earn sDOOD Token.",
    siteUrl: "https://doodcats.net/",
  },
  {
    type: ["nft", "design"],
    role: "Frontend and Solidity Developer",
    skills: ["React.Js", "Web3.Js", "Solidity"],
    imgUrl: "imgs/works/work21.png",
    summary: "NFT Breeding Dapp",
    siteUrl: "https://portal.animalove.art/",
  },
  {
    type: ["nft"],
    role: "Frontend and Solidity Developer",
    skills: ["React.Js", "Web3.Js", "Solidity"],
    imgUrl: "imgs/works/work16.jpg",
    summary:
      "CashCow Protocol (Designed the site with Figma, Built the staking and marketplace contract)",
    siteUrl: "https://cashcowprotocol.com/",
  },
  {
    type: "ecommerce",
    role: "FullStack Developer",
    skills: ["React.Js", "Node.Js", "GraphQL", "AWS"],
    imgUrl: "imgs/works/work13.jpg",
    summary: "Di Bruno Bros E-Commerce",
    siteUrl: "https://dibruno.com/",
  },
  {
    type: "ecommerce",
    role: "FullStack Developer",
    skills: ["React.Js", "Node.Js", "GraphQL"],
    imgUrl: "imgs/works/work14.jpg",
    summary: "MercariLogo Marketplace (Designed the site and the database.)",
    siteUrl: "https://www.mercari.com/",
  },
  {
    type: "ecommerce, design",
    role: "FullStack Developer",
    skills: ["React.Js", "Node.Js"],
    imgUrl: "imgs/works/work15.jpg",
    summary: "Littlespoon E-Commerce",
    siteUrl: "https://www.littlespoon.com/",
  },
];

export { filterKey, projectData };
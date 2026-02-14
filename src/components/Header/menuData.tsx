import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Services",
    newTab: false,
    megaMenu: true,
    submenu: [
      {
        id: 21,
        title: "Website Development",
        path: "/services/website-development",
        newTab: false,
      },
      {
        id: 22,
        title: "App Development",
        path: "/services/app-development",
        newTab: false,
      },
      {
        id: 23,
        title: "AI & ML Services",
        path: "/services/ai-ml",
        newTab: false,
      },
      {
        id: 24,
        title: "Industries",
        path: "/industries",
        newTab: false,
        submenu: [
          {
            id: 241,
            title: "Finance & Banking",
            path: "/industries/finance",
            newTab: false,
          },
          {
            id: 242,
            title: "Healthcare & Medical",
            path: "/industries/healthcare",
            newTab: false,
          },
          {
            id: 243,
            title: "E-commerce & Retail",
            path: "/industries/ecommerce",
            newTab: false,
          },
          {
            id: 244,
            title: "Travel & Tourism",
            path: "/industries/travel",
            newTab: false,
          },
          {
            id: 245,
            title: "Real Estate & Property",
            path: "/industries/real-estate",
            newTab: false,
          },
          {
            id: 246,
            title: "Education & E-Learning",
            path: "/industries/education",
            newTab: false,
          },
          {
            id: 247,
            title: "Logistics & Supply Chain",
            path: "/industries/logistics",
            newTab: false,
          },
          {
            id: 248,
            title: "Non-Profit & NGO",
            path: "/industries/ngo",
            newTab: false,
          },
          {
            id: 249,
            title: "Fitness & Wellness",
            path: "/industries/fitness",
            newTab: false,
          },
          {
            id: 2410,
            title: "Health & Nutrition",
            path: "/industries/health",
            newTab: false,
          },
          {
            id: 2411,
            title: "Taxi & Ride Sharing",
            path: "/industries/taxi",
            newTab: false,
          },
          {
            id: 2412,
            title: "Food Delivery & Restaurant",
            path: "/industries/food-delivery",
            newTab: false,
          },
          {
            id: 2413,
            title: "Influencer & Social Media",
            path: "/industries/influencers",
            newTab: false,
          },
        ],
      },
      {
        id: 25,
        title: "Game Development",
        path: "/game-development",
        newTab: false,
        submenu: [
          {
            id: 251,
            title: "Ludo Game Development",
            path: "/game-development/ludo",
            newTab: false,
          },
          {
            id: 252,
            title: "Rummy Game Development",
            path: "/game-development/rummy",
            newTab: false,
          },
          {
            id: 253,
            title: "Poker Game Development",
            path: "/game-development/poker",
            newTab: false,
          },
          {
            id: 254,
            title: "Casino Game Development",
            path: "/game-development/casino",
            newTab: false,
          },
          {
            id: 255,
            title: "Roulette Game Development",
            path: "/game-development/roulette",
            newTab: false,
          },
          {
            id: 256,
            title: "Cricket Game Development",
            path: "/game-development/cricket",
            newTab: false,
          },
          {
            id: 257,
            title: "Football Game Development",
            path: "/game-development/football",
            newTab: false,
          },
          {
            id: 258,
            title: "E-Sports Game Development",
            path: "/game-development/esports",
            newTab: false,
          },
          {
            id: 259,
            title: "3 Patti Game Development",
            path: "/game-development/3-patti",
            newTab: false,
          },
          {
            id: 2510,
            title: "Virtual Money Game Development",
            path: "/game-development/virtual-money",
            newTab: false,
          },
          {
            id: 2511,
            title: "Call Break Game Development",
            path: "/game-development/call-break",
            newTab: false,
          },
          {
            id: 2512,
            title: "Fantasy Game Development",
            path: "/game-development/fantasy",
            newTab: false,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "About Us",
    path: "/about",
    newTab: false,
  },
];
export default menuData;

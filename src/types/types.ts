// export interface Qoute {
//     label: string;
//     values: string[];
//   }
  export interface CurrenciesInfo {
    circulating_supply: number;
    cmc_rank: number;
    date_added: string;
    id: number;
    last_updated: string;
    max_supply: number;
    name: string;
    num_market_pairs: number;
    // quote: {USD: {…}};
    slug: string;
    symbol: string;
    tags: string[];
    total_supply: number;
    // options: Option[];
  }
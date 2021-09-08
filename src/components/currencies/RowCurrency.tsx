import { useEffect, useState } from "react";
import { Currency } from "../../types/types";
import "./RowCurrency.css"

interface Props {
    currencies: Currency[];
    searchTerm: any;
  }

const RowCurrency: React.FC<Props> = ({currencies,searchTerm}) => { 
 const filterCurrencies = (currencies:any, searchTerm:any) => {
  if (!searchTerm) {
      return currencies;
  }
  return currencies.filter((currency:any) => {
      const currencyName = currency.name.toLowerCase();
      return currencyName.includes(searchTerm);
  });
};
const filteredCurrencies = filterCurrencies(currencies, searchTerm);

  return (
  
    <tbody>
      {filteredCurrencies.map((currency:Currency) => (
        <tr key={currency.id}>
          <th></th>
          <th>{currency.cmc_rank}</th>
          <th>{currency.name}    {currency.symbol}</th>
          <th>${currency.quote.USD.price}</th>
          <th>{currency.quote.USD.percent_change_24h}%</th>
          <th>{currency.quote.USD.percent_change_7d}%</th>
          <th>{currency.quote.USD.market_cap}</th>
          <th>{currency.quote.USD.volume_24h}</th>
          <th>{currency.circulating_supply}</th>
        </tr>
      ))}
    </tbody>
  );
};

export default RowCurrency;

import { useEffect, useState } from "react";
import { Currency } from "../../types/types";
import "./RowCurrency.css";

interface Props {
  currencies: Currency[];
  searchTerm: string;
}

const RowCurrency: React.FC<Props> = ({ currencies, searchTerm }) => {
  const filterCurrencies = (currencies: Currency[], searchTerm: string) => {
    if (!searchTerm) {
      return currencies;
    }
    return currencies.filter((currency: Currency) => {
      const currencyName = currency.name.toLowerCase();
      return currencyName.includes(searchTerm);
    });
  };
  const filteredCurrencies = filterCurrencies(currencies, searchTerm);
  return (
    <tbody>
      {filteredCurrencies.map((currency: Currency) => (
        <tr key={currency.id}>
          <th></th>
          <th>{currency.cmc_rank}</th>
          <th>
            {currency.name} {currency.symbol}
          </th>
          <th>${currency.quote.USD.price.toLocaleString()}</th>
          <th >
            {currency.quote.USD.percent_change_24h.toFixed(2)}%
          </th>
          <th >
            {currency.quote.USD.percent_change_7d.toFixed(2)}%
          </th>
          <th>{currency.quote.USD.market_cap.toLocaleString()}</th>
          <th>{currency.quote.USD.volume_24h.toLocaleString()}%</th>
          <th>{currency.circulating_supply.toLocaleString()}</th>
        </tr>
      ))}
    </tbody>
  );
};

export default RowCurrency;

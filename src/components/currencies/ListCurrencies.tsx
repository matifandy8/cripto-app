import "./ListCurrencies.css"
import { useEffect, useState } from "react";
import { Get } from "../../services/publicApiService";
import RowCurrency from "./RowCurrency";


const ListCurrencies: React.FC = () => {
  const [currencies, setCurrencies] = useState([]);
 
  useEffect(() => {
    Get("/currencies").then(res => setCurrencies(res));
  }, []);
  return (
    <div className="ListCurrencies">
      <table className="ListCurrencies__table">
        <thead className="ListCurrencies__thead">
          <tr className="ListCurrencies__tr">
          <th className="ListCurrencies__tr"></th>
            <th className="ListCurrencies__tr">*</th>
            <th className="ListCurrencies__tr">Name</th>
            <th className="ListCurrencies__tr">Price</th>
            <th className="ListCurrencies__tr">24h%</th>
            <th className="ListCurrencies__tr">7d%</th>
            <th className="ListCurrencies__tr">Market Cap</th>
            <th className="ListCurrencies__tr">Volume(24h)</th>
            <th className="ListCurrencies__tr">Circulating Supply</th>
          </tr>
        </thead>
            <RowCurrency currencies={currencies}/>
      </table>
    </div>
  );
};

export default ListCurrencies;

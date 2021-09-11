import "./ListCurrencies.css";
import { useEffect, useState } from "react";
import { Get } from "../../services/publicApiService";
import RowCurrency from "./RowCurrency";
import useDebounce from "../../utils/usedebounce";

const ListCurrencies: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currencies, setCurrencies] = useState([]);
  
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);


  useEffect(() => {
    Get("/currencies").then((res) => setCurrencies(res));
  }, []);

  return (
    <div className="ListCurrencies">
      <div className="searchbar">
          <input
          className="searchbar__input"
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by name"
          />
        </div>
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
        <RowCurrency currencies={currencies} searchTerm={debouncedSearchTerm} />
      </table>
    </div>
  );
};

export default ListCurrencies;

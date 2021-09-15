import "./ListCurrencies.css";
import { useEffect, useState } from "react";
import RowCurrency from "./RowCurrency";
import useDebounce from "../../utils/usedebounce";
import { useSelector, useDispatch } from "react-redux"
import { getCurrencies, currenciesSelector } from "../../features/CurrencySlice";
import ModalRegister from "../register/ModalRegister";

const ListCurrencies: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);
  const dispatch = useDispatch()
  const { currencies, loading, errors } = useSelector(currenciesSelector)

  console.log(currencies, loading, errors)

  useEffect(() => {
    dispatch(getCurrencies())
  }, [dispatch])

  return (
    <div className="ListCurrencies">
      <ModalRegister/>
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

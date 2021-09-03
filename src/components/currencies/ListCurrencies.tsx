import { useEffect, useState } from "react";
import { Get } from "../../services/publicApiService";

const ListCurrencies = () => {
    const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    console.log(Get("/currencies"))
    // Get("/currencies").then(res => setCurrencies(res.data.data));
  }, [])
    return (
        <div>
            
        </div>
    )
}

export default ListCurrencies

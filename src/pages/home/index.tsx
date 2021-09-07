import ListCurrencies from "../../components/currencies/ListCurrencies"
import TableTag from "../../components/tabletag"

const Home: React.FC = () => {
    return (
        <div>
            <TableTag/>
            <ListCurrencies/>
        </div>
    )
}

export default Home


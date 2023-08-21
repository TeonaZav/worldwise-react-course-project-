import Spinner from "../spinner/Spinner";
import CountryItem from "../countyitem/CountryItem";
import Message from "../message/Message";
import styles from "./CountryList.module.css";
import { useCities } from "../../contexts/CitiesContext";

function CountryList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  if (!cities.length) return <Message message="Add country" />;

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [
        ...arr,
        { country: city.country, emoji: city.emoji, id: city.id },
      ];
    } else {
      return arr;
    }
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries &&
        countries.map((country) => (
          <CountryItem key={country.id} country={country} />
        ))}
    </ul>
  );
}

export default CountryList;

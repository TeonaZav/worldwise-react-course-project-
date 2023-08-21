import Spinner from "../spinner/Spinner";
import CityItem from "../cityitem/CityItem";
import Message from "../message/Message";
import { useCities } from "../../contexts/CitiesContext";
import styles from "./CityList.module.css";

function CityList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  if (!cities.length) return <Message message="Add city" />;
  return (
    <ul className={styles.cityList}>
      {cities && cities.map((city) => <CityItem key={city.id} city={city} />)}
    </ul>
  );
}

export default CityList;

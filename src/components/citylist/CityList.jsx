import Spinner from "../spinner/Spinner";
import CityItem from "../cityitem/CityItem";
import styles from "./CityList.module.css";

function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  return (
    <ul className={styles.cityList}>
      {cities && cities.map((city) => <CityItem key={city.id} city={city} />)}
    </ul>
  );
}

export default CityList;

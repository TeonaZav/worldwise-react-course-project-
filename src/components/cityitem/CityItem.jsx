import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";
import { flagemojiToPNG, formatDate } from "../../utils/HelperFunctions";
import { useCities } from "../../contexts/CitiesContext";

function CityItem({ city: { cityName, emoji, date, id, position } }) {
  const { currentCity, deleteCity } = useCities();

  function handleClick(e) {
    e.preventDefault();
    deleteCity(id);
  }

  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          id === currentCity.id ? styles["cityItem--active"] : null
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>{flagemojiToPNG(emoji)}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn} onClick={handleClick}>
          &times;
        </button>
      </Link>
    </li>
  );
}

export default CityItem;

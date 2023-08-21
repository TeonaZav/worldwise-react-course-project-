import { useState, useEffect, useRef } from "react";
import Button from "../buttons/Button";
import ButtonBack from "../buttons/ButtonBack";
import styles from "./FormComponent.module.css";
import { useUrlPosition } from "../../hooks/useUrlPosition";
import { flagemojiToPNG } from "../../utils/HelperFunctions";
import { countryCodeEmoji } from "country-code-emoji";
import Message from "../message/Message";
import Spinner from "../spinner/Spinner";

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

function FormComponent() {
  const [lat, lng] = useUrlPosition();
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
  const [geoCodingError, setGeoCodingError] = useState("");
  const emoji = useRef();

  useEffect(() => {
    async function fetchCityData() {
      try {
        setIsLoadingGeocoding(true);
        setGeoCodingError("");

        const res = await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`);
        const data = await res.json();
        console.log(data);

        if (!data.countryCode)
          throw new Error("That doesn't seem to be a city");
        setCityName(data.city || data.locality || "");
        setCountry(data.countryName || "");
        emoji.current = flagemojiToPNG(countryCodeEmoji(data.countryCode));
      } catch (err) {
        console.log(err);
        setGeoCodingError(err.message);
      } finally {
        setIsLoadingGeocoding(false);
      }
    }
    fetchCityData();
  }, [lat, lng]);
  if (isLoadingGeocoding) return <Spinner />;
  if (geoCodingError) return <Message message={geoCodingError} />;

  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <div className={styles.flag}>{emoji.current}</div>
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <input
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button type={"primary"}>Add</Button>
        <ButtonBack />
      </div>
    </form>
  );
}

export default FormComponent;

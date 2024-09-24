import { useEffect, useState } from "react";
import MyButton from "../myButton/MyButton";
import styles from "./fetchCat.module.css";

interface Cat {
  fact: string;
}

export default function FetchCat() {
  const [cats, setCats] = useState<Cat[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchCatData = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://catfact.ninja/fact");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: { fact: string; length: number } = await response.json();
      setCats((prevCats) => [...prevCats, { fact: data.fact }]);
    } catch (error) {
      console.error("Error fetching cat data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCatData();
  }, []);

  const deleteAllData = () => {
    setCats([]);
  };

  return (
    <div className={styles.container}>
      {loading && <div className={styles.spinner}></div>}
      {cats.length > 0 && (
        <div className={styles.catContainer}>
          {cats.map((cat, index) => (
            <div key={index} className={styles.cat}>
              <p>{cat.fact}</p>
            </div>
          ))}
        </div>
      )}
      <div></div>
      <div>
        <p className="font-effect-3d-float ">МНОГО ИНФОРМАЦИИ О КОШКАХ</p>
      </div>
      <div className="font-effect-shadow-multiple ">ЗНАНИЯ СИЛА !!</div>
      <p className="font-effect-fire-animation ">МНОГО ИНТЕРЕСНЫХ ФАКТОВ</p>
      <MyButton isPrimary={true} text="GET MORE INFO" onClick={fetchCatData} />
      {cats.length > 0 && (
        <MyButton
          isPrimary={false}
          text="DELETE ALL DATA"
          onClick={deleteAllData}
        />
      )}
    </div>
  );
}

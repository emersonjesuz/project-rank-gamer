import { HiArrowCircleLeft } from "react-icons/hi";
import { useGlobalContext } from "../../context/dataSquardContext";
import SquardConfig from "./components/squardConfig";
import styles from "./styles.module.scss";
import apiRank from "../../services/apiRank";
import { useEffect } from "react";

export default function Config() {
  const { dataSquard, countPlayer, setDataSquard } = useGlobalContext();

  async function newSquard() {
    try {
      if (dataSquard.length >= 12) return;
      const { data } = await apiRank.post("/create", {
        name: ` editar equipe ${
          dataSquard.length + Math.floor(Math.random() * 100)
        } ?`,
      });
      console.log(data);

      setDataSquard([data, ...dataSquard]);
    } catch (error) {
      console.log(error);
    }
  }

  async function listSquard() {
    try {
      const { data } = await apiRank.get("/list");
      setDataSquard([...data]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    listSquard();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles["content-header"]}>
        <div className={styles.header}>
          <h1>FATOR MAC</h1>
          <HiArrowCircleLeft size={40} />
        </div>
        <div className={styles["info-header"]}>
          <div>
            <span>EQUIPE {dataSquard.length} / 12</span>
          </div>
          <div>
            <span>JOGADORES {countPlayer} / 60</span>
          </div>
          <button type="button" onClick={() => newSquard()}>
            NOVA EQUIPE
          </button>
        </div>
      </div>
      <div className={styles["content-squard"]}>
        {dataSquard.map((data) => (
          <SquardConfig
            id={data.id}
            name={data.name}
            players={data.players ?? []}
            points={data.points}
          />
        ))}
      </div>
    </div>
  );
}

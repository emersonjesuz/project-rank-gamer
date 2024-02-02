import { HiArrowCircleLeft } from "react-icons/hi";
import { useGlobalContext } from "../../context/dataSquardContext";
import SquardConfig from "./components/squardConfig";
import styles from "./styles.module.scss";
import apiRank from "../../services/apiRank";
import { useEffect, useState } from "react";
import NotifyError from "../../utils/apiNotify";
import notify from "../../utils/notify";
import { useNavigate } from "react-router-dom";

export default function Config() {
  const { dataSquard, getCountPlayer, setDataSquard } = useGlobalContext();
  const [players, setPlayers] = useState<number>(0);
  const navegate = useNavigate();

  async function newSquard() {
    try {
      if (dataSquard.length >= 12) return;
      const { data } = await apiRank.post("/create", {
        name: ` editar equipe ${
          dataSquard.length + Math.floor(Math.random() * 100)
        } ?`,
      });

      notify("equipe adicionada com sucesso ", "success");
      setDataSquard([data, ...dataSquard]);
    } catch (error) {
      NotifyError(error);
    }
  }

  async function listSquard() {
    try {
      const { data } = await apiRank.get("/list");
      setDataSquard([...data]);
    } catch (error) {
      NotifyError(error);
    }
  }

  useEffect(() => {
    listSquard();
  }, []);

  useEffect(() => {
    setPlayers(getCountPlayer());
  }, [dataSquard]);

  return (
    <div className={styles.container}>
      <div className={styles["content-header"]}>
        <div
          onClick={() => {
            localStorage.clear();
            navegate("/");
          }}
          className={styles.header}
        >
          <h1>FATOR MAC</h1>
          <HiArrowCircleLeft size={40} />
        </div>
        <div className={styles["info-header"]}>
          <div>
            <span>EQUIPE {dataSquard.length} / 12</span>
          </div>
          <div>
            <span>JOGADORES {players} / 60</span>
          </div>
          <button type="button" onClick={() => newSquard()}>
            NOVA EQUIPE
          </button>
        </div>
      </div>
      <div className={styles["content-squard"]}>
        {dataSquard.map((data) => (
          <SquardConfig
            key={data.id}
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

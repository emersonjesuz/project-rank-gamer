import { HiArrowCircleLeft } from "react-icons/hi";
import { useGlobalContext } from "../../context/dataSquardContext";
import SquardConfig from "./components/squardConfig";
import styles from "./styles.module.scss";

export default function Config() {
  const { dataSquard, countPlayer } = useGlobalContext();

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
          <button>NOVA EQUIPE</button>
        </div>
      </div>
      <div className={styles["content-squard"]}>
        {dataSquard.map((data) => (
          <SquardConfig {...data} />
        ))}
      </div>
    </div>
  );
}

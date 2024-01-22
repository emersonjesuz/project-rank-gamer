import SquardConfig from "./components/squardConfig";
import styles from "./styles.module.scss";
import { HiArrowCircleLeft } from "react-icons/hi";

export default function Config() {
  return (
    <div className={styles.container}>
      <div className={styles["content-header"]}>
        <div className={styles.header}>
          <h1>FATOR MAC</h1>
          <HiArrowCircleLeft size={40} />
        </div>
        <div className={styles["info-header"]}>
          <div>
            <span>EQUIPE 1 / 12</span>
          </div>
          <div>
            <span>JOGADORES 1 / 60</span>
          </div>
          <button>NOVA EQUIPE</button>
        </div>
      </div>
      <div className={styles["content-squard"]}>
        <SquardConfig />
      </div>
    </div>
  );
}

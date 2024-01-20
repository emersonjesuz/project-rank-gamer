import moment from "moment/moment";
import "moment/locale/pt-br";
import { HiUserCircle } from "react-icons/hi";
import styles from "./styles.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles["box-title"]}>
        <h1>Fator Mac</h1>
      </div>
      <div className={styles["box-info"]}>
        <h4>
          Ultima Atualização{" "}
          <span>{moment().locale("pt-br").format("ddd / MM / YY")}</span>
        </h4>
        <HiUserCircle className={styles.icon} color="#d84500" size={50} />
      </div>
    </header>
  );
}

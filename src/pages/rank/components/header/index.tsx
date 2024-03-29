import "moment/locale/pt-br";
import { Dispatch, SetStateAction } from "react";
import { HiUserCircle } from "react-icons/hi";
import styles from "./styles.module.scss";
type props = {
  setShowSignup: Dispatch<SetStateAction<boolean>>;
};

export default function Header({ setShowSignup }: props) {
  return (
    <header className={styles.header}>
      <div className={styles["box-title"]}>
        <h1>Fator Mac</h1>
      </div>
      <div className={styles["box-info"]}>
        <HiUserCircle
          onClick={() => setShowSignup(true)}
          className={styles.icon}
          color="#d84500"
          size={50}
        />
      </div>
    </header>
  );
}

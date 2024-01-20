import { Dispatch, SetStateAction } from "react";
import styles from "./styles.module.scss";

type props = {
  setShowSignup: Dispatch<SetStateAction<boolean>>;
};

export default function Signin({ setShowSignup }: props) {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <input type="text" />
        <input type="text" />
        <div>
          <button>Entrar</button>
          <button onClick={() => setShowSignup(false)}>Cancelar</button>
        </div>
      </div>
    </div>
  );
}

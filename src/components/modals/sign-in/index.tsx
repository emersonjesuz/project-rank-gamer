import { Dispatch, FormEvent, SetStateAction, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import notify from "../../../utils/notify";

type props = {
  setShowSignup: Dispatch<SetStateAction<boolean>>;
};

export default function Signin({ setShowSignup }: props) {
  const [getForm, setGetForm] = useState({ name: "", password: "" });
  let countAttempt = useRef(1).current;
  const navegate = useNavigate();

  function verifySignin(e: FormEvent) {
    e.preventDefault();
    if (countAttempt > 3) return;
    if (getForm.password === "minho123" && countAttempt <= 3) {
      notify("senha correta!", "success");
      localStorage.setItem("i", "true");
      return navegate("/config");
    }
    notify(`senha incorreta: tentativa ${countAttempt} / 3`, "info");
    countAttempt = countAttempt += 1;
  }

  return (
    <form onSubmit={verifySignin} className={styles.container}>
      <div className={styles.box}>
        <input
          type="text"
          onChange={(e) => setGetForm({ ...getForm, name: e.target.value })}
        />
        <input
          type="password"
          onChange={(e) => setGetForm({ ...getForm, password: e.target.value })}
        />
        <div>
          <button>Entrar</button>
          <button onClick={() => setShowSignup(false)}>Cancelar</button>
        </div>
      </div>
    </form>
  );
}

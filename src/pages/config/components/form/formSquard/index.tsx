import {
  ChangeEvent,
  ChangeEventHandler,
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { HiFlag } from "react-icons/hi";
import { playerType } from "../../../../../types";
import BoxPlayer from "./components/boxPlayer";
import styles from "./styles.module.scss";
import { useGlobalContext } from "../../../../../context/dataSquardContext";
import apiRank from "../../../../../services/apiRank";
import { act } from "react-dom/test-utils";

type props = {
  playersInSquard: playerType[];
  setPlayersInSquard: Dispatch<SetStateAction<playerType[]>>;
  setShowFormPlayer: Dispatch<SetStateAction<boolean>>;
  squardId: number;
};

type formTypes = {
  name: string;
  bermuda_position: number;
  kalahari_position: number;
  purgatorio_position: number;
  id?: number;
  kills: number;
};

const initialPlayerKill = {
  bermuda: 0,
  kalahari: 0,
  purgatorio: 0,
  id: 0,
  kills: 0,
};
const initialForm: formTypes = {
  name: "",
  bermuda_position: 0,
  kalahari_position: 0,
  purgatorio_position: 0,
  id: 0,
  kills: 0,
};

export default function FormSquard({
  playersInSquard,
  setPlayersInSquard,
  setShowFormPlayer,
  squardId,
}: Readonly<props>) {
  const [playerKill, setPlayerKill] = useState({
    ...initialPlayerKill,
  });
  const { dataSquard, setDataSquard } = useGlobalContext();

  const [form, setForm] = useState<formTypes>({ ...initialForm });

  function handlerForm(e: ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function updateSquard(event: FormEvent) {
    event.preventDefault();
    try {
      if (!form.name || !form.name.trim()) return;
      console.log(form);

      const { data } = await apiRank.put(`/edit/${squardId}`, { ...form });
    } catch (error) {
      console.log(error);
    }
  }

  function getSquard() {
    dataSquard.forEach((data) => {
      if (data.id === squardId) {
        setForm({ ...form, name: data.name });
      }
    });
  }

  useEffect(() => {
    getSquard();
  }, []);

  return (
    <form
      key={squardId}
      className={styles["form-squard"]}
      onSubmit={updateSquard}
    >
      <div className={styles["content-squard"]}>
        <div className={styles["box-squard"]}>
          <label htmlFor="nameSquard">nome da equipe</label>
          <input
            id="nameSquard"
            type="text"
            value={form.name}
            name="name"
            onChange={(e) => handlerForm(e)}
          />
        </div>
        <div className={styles["box-squard-maps"]}>
          <span>
            BERMUDA
            <HiFlag />
          </span>

          <div>
            <label htmlFor="bermuda2-squard">Posição</label>
            <input
              id="bermuda2-squard"
              type="number"
              name="bermuda_position"
              onChange={(e) => handlerForm(e)}
            />
          </div>
        </div>
        <div className={styles["box-squard-maps"]}>
          <span>
            PURGATORIO <HiFlag />
          </span>

          <div>
            <label htmlFor="purgatorio2-squard">Posição</label>
            <input
              id="purgatorio2-squard"
              type="number"
              name="purgatorio_position"
              onChange={(e) => handlerForm(e)}
            />
          </div>
        </div>
        <div className={styles["box-squard-maps"]}>
          <span>
            KALAHARI <HiFlag />
          </span>

          <div>
            <label htmlFor="kalahari2-squard">Posição</label>
            <input
              id="kalahari2-squard"
              type="number"
              name="kalahari_position"
              onChange={(e) => handlerForm(e)}
            />
          </div>
        </div>
      </div>
      {playersInSquard.map((player) => (
        <BoxPlayer
          player={player}
          setPlayersInSquard={setPlayersInSquard}
          playersInSquard={playersInSquard}
        />
      ))}

      <div className={styles["content-buttons"]}>
        <button type="button" onClick={() => setShowFormPlayer(false)}>
          Cancelar
        </button>
        <button>Salvar</button>
      </div>
    </form>
  );
}

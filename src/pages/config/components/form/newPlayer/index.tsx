import { Dispatch, SetStateAction, useState } from "react";
import { playerType } from "../../../../../types";
import styles from "./styles.module.scss";
import { useGlobalContext } from "../../../../../context/dataSquardContext";
import apiRank from "../../../../../services/apiRank";
import notify from "../../../../../utils/notify";
import NotifyError from "../../../../../utils/apiNotify";

type props = {
  playersInSquard: playerType[];
  setPlayersInSquard: Dispatch<SetStateAction<playerType[]>>;
  squard_id: number;
};

export default function NewPlayer({
  squard_id,
  playersInSquard,
  setPlayersInSquard,
}: Readonly<props>) {
  const { dataSquard, setDataSquard, countPlayer, setCountPlayer } =
    useGlobalContext();
  const [name, setName] = useState("");

  async function addNewPlayer() {
    try {
      if (!name) return notify("informe o nome do jogador", "info");

      const players = [...playersInSquard];

      if (players.length >= 5 || countPlayer >= 60) return;

      const { data } = await apiRank.post("/player/create", {
        name,
        squard_id,
      });

      setPlayersInSquard([data, ...players]);
      dataSquard.forEach((squard) => {
        if (squard.id === squard_id) {
          squard.players = [data, ...playersInSquard];
        }
      });
      setDataSquard([...dataSquard]);
      setCountPlayer(countPlayer + 1);
      setName("");
      notify("jogador adicionado", "success");
    } catch (error) {
      NotifyError(error);
    }
  }
  return (
    <div className={styles.container}>
      <div>
        <label htmlFor="new-player">Nome</label>
        <input
          id="new-player"
          type="text"
          placeholder="Novo Jogador"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button type="button" onClick={() => addNewPlayer()}>
        Adicionar
      </button>
    </div>
  );
}

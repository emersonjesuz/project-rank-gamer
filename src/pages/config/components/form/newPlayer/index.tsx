import { Dispatch, SetStateAction, useState } from "react";
import { playerType } from "../../../../../types";
import styles from "./styles.module.scss";
import { useGlobalContext } from "../../../../../context/dataSquardContext";

type props = {
  playersInSquard: playerType[];
  setPlayersInSquard: Dispatch<SetStateAction<playerType[]>>;
  squardId: number;
};

export default function NewPlayer({
  squardId,
  playersInSquard,
  setPlayersInSquard,
}: Readonly<props>) {
  const { dataSquard, setDataSquard, countPlayer, setCountPlayer } =
    useGlobalContext();
  const [name, setName] = useState("");

  function addNewPlayer() {
    if (!name) {
      return;
    }

    const players = [...playersInSquard];

    if (players.length >= 5 || countPlayer >= 60) return;

    players.push({
      id: players.length + 1,
      name,
      active: false,
      bermuda: 0,
      kalahari: 0,
      purgatorio: 0,
      kills: 0,
      squard_id: squardId,
    });

    setPlayersInSquard(players);

    dataSquard.forEach((squard) => {
      if (squard.id === squardId) {
        squard.players = [...playersInSquard];
      }
    });

    setDataSquard([...dataSquard]);
    setCountPlayer(countPlayer + 1);

    setName("");
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

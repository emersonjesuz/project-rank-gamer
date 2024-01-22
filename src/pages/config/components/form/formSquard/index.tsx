import { useState } from "react";
import { HiFlag } from "react-icons/hi";
import { playerType } from "../../../../../types";
import BoxPlayer from "./components/boxPlayer";
import styles from "./styles.module.scss";

const initialPlayerKill = {
  bermuda: 0,
  kalahari: 0,
  purgatorio: 0,
  id: 0,
  kills: 0,
};

export default function FormSquard() {
  const [playerKill, setPlayerKill] = useState({
    ...initialPlayerKill,
  });

  const [playersInSquard, setPlayersInSquard] = useState<playerType[]>([
    {
      bermuda: 0,
      id: 1,
      kalahari: 1,
      name: "wilson",
      purgatorio: 1,
      kills: 2,
      active: false,
    },
    {
      bermuda: 0,
      id: 2,
      kalahari: 1,
      name: "wilson",
      purgatorio: 1,
      kills: 2,
      active: true,
    },
  ]);

  function countKillPlayer(id: number) {
    const count =
      playerKill.bermuda +
      playerKill.kalahari +
      playerKill.purgatorio +
      playerKill.kills;

    playersInSquard.map((player) => {
      if (!count) {
        if (player.id === id) {
          player.active = false;
        }
      }
      if (player.id === playerKill.id) {
        player.bermuda = playerKill.bermuda;
        player.kalahari = playerKill.kalahari;
        player.purgatorio = playerKill.purgatorio;
        player.kills = count;
        player.active = false;
      }
    });

    setPlayerKill({ ...initialPlayerKill });
    setPlayersInSquard([...playersInSquard]);
  }

  function activeEditePlayer(id: number) {
    playersInSquard.map((player) => {
      if (player.id === id) {
        player.active = true;
      }
    });

    setPlayerKill({ ...initialPlayerKill });
    setPlayersInSquard([...playersInSquard]);
  }

  return (
    <form className={styles["form-squard"]}>
      <div className={styles["content-squard"]}>
        <div className={styles["box-squard"]}>
          <label htmlFor="nameSquard">nome da equipe</label>
          <input id="nameSquard" type="text" />
        </div>
        <div className={styles["box-squard-maps"]}>
          <span>
            BERMUDA
            <HiFlag />
          </span>
          <div>
            <label htmlFor="bermuda1-squard">Kills</label>
            <input id="bermuda1-squard" type="text" />
          </div>
          <div>
            <label htmlFor="bermuda2-squard">Posição</label>
            <input id="bermuda2-squard" type="text" />
          </div>
        </div>
        <div className={styles["box-squard-maps"]}>
          <span>
            PURGATORIO <HiFlag />
          </span>
          <div>
            <label htmlFor="purgatorio1-squard">Kills</label>
            <input id="purgatorio1-squard" type="text" />
          </div>
          <div>
            <label htmlFor="purgatorio2-squard">Posição</label>
            <input id="purgatorio2-squard" type="text" />
          </div>
        </div>
        <div className={styles["box-squard-maps"]}>
          <span>
            KALAHARI <HiFlag />
          </span>
          <div>
            <label htmlFor="kalahari1-squard">Kills</label>
            <input id="kalahari1-squard" type="text" />
          </div>
          <div>
            <label htmlFor="kalahari2-squard">Posição</label>
            <input id="kalahari2-squard" type="text" />
          </div>
        </div>
      </div>
      {playersInSquard.map((player) => (
        <BoxPlayer
          player={player}
          playerKill={playerKill}
          setPlayerKill={setPlayerKill}
          countKillPlayer={countKillPlayer}
          activeEditePlayer={activeEditePlayer}
        />
      ))}

      <div className={styles["content-buttons"]}>
        <button>Cancelar</button>
        <button>Salvar</button>
      </div>
    </form>
  );
}

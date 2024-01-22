import { Dispatch, SetStateAction } from "react";
import { playerType } from "../../../../../../../types";
import styles from "./styles.module.scss";

type maps = {
  bermuda: number;
  kalahari: number;
  purgatorio: number;
  id: number;
  kills: number;
};

type props = {
  player: playerType;
  playerKill: maps;
  setPlayerKill: Dispatch<SetStateAction<maps>>;
  countKillPlayer: (id: number) => void;
  activeEditePlayer: (id: number) => void;
};

export default function BoxPlayer({
  player,
  playerKill,
  setPlayerKill,
  countKillPlayer,
  activeEditePlayer,
}: props) {
  function checkInput(
    purgatorio: number,
    bermuda: number,
    kalahari: number,
    id: number
  ) {
    if (id !== player.id) return;

    if (purgatorio) {
      setPlayerKill({
        ...playerKill,
        purgatorio: purgatorio,
        id: player.id,
        kills: player.kills || 0,
      });
    } else if (bermuda) {
      setPlayerKill({
        ...playerKill,
        bermuda: bermuda,
        id: player.id,
        kills: player.kills || 0,
      });
    } else {
      setPlayerKill({
        ...playerKill,
        kalahari: kalahari,
        id: player.id,
        kills: player.kills || 0,
      });
    }
  }

  return (
    <div key={player.id} className={styles["box-player"]}>
      <p>
        {player.name} <span> kill: {player.kills}</span>
      </p>
      {player.active ? (
        <>
          <div>
            <label htmlFor="kill-player-b">BERMUDA</label>
            <input
              id="kill-player-b"
              type="number"
              onChange={(e) => checkInput(0, +e.target.value, 0, player.id)}
            />
          </div>
          <div>
            <label htmlFor="kill-player-p">PURGATORIO</label>
            <input
              id="kill-player-p"
              type="number"
              onChange={(e) => checkInput(+e.target.value, 0, 0, player.id)}
            />
          </div>
          <div>
            <label htmlFor="kill-player-k">KALAHARI</label>
            <input
              id="kill-player-k"
              type="number"
              onChange={(e) => checkInput(0, 0, +e.target.value, player.id)}
            />
          </div>
          <button type="button" onClick={() => countKillPlayer(player.id)}>
            salvar
          </button>
        </>
      ) : (
        <button type="button" onClick={() => activeEditePlayer(player.id)}>
          edita
        </button>
      )}
    </div>
  );
}

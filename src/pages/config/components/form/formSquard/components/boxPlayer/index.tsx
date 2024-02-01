import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { FaSkullCrossbones, FaUser } from "react-icons/fa";
import apiRank from "../../../../../../../services/apiRank";
import { playerType } from "../../../../../../../types";
import styles from "./styles.module.scss";

type props = {
  player: playerType;
  setPlayersInSquard: Dispatch<SetStateAction<playerType[]>>;
  playersInSquard: playerType[];
};

const initialPlayer = {
  name: "",
  bermuda_kills: 0,
  purgatorio_kills: 0,
  kalahari_kills: 0,
};

export default function BoxPlayer({
  player,
  playersInSquard,
  setPlayersInSquard,
}: Readonly<props>) {
  const [form, setForm] = useState(initialPlayer);
  const [showDeletePlayer, setShowDeletePlayer] = useState(false);

  function handlerForm(e: ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function updatePlayer() {
    try {
      const newForm = {
        bermuda_kills: +form.bermuda_kills,
        purgatorio_kills: +form.purgatorio_kills,
        kalahari_kills: +form.kalahari_kills,
        name: !form.name ? player.name : form.name,
      };

      const { data } = await apiRank.put(`/player/edit/${player.id}`, {
        ...newForm,
      });

      const newKill =
        newForm.bermuda_kills +
        newForm.kalahari_kills +
        newForm.purgatorio_kills;
      const index = playersInSquard.findIndex(
        (player) => player.id === data.id
      );

      if (index === -1) return;

      playersInSquard.splice(index, 1, { ...data, active: false, newKill });
      console.log(data);
      setForm({ ...initialPlayer });
      setPlayersInSquard([...playersInSquard]);
      console.log(playersInSquard);
    } catch (error) {
      console.log(error);
    }
  }

  function activeEditePlayer(id: number) {
    playersInSquard.forEach((player) => {
      if (player.id === id) {
        player.active = true;
      }
    });

    setPlayersInSquard([...playersInSquard]);
  }

  async function deletePlayer() {
    try {
      const { data } = await apiRank.delete(`/player/delete/${player.id}`);
      const newList = playersInSquard.filter((player) => player.id !== data.id);

      setPlayersInSquard([...newList]);
      setShowDeletePlayer(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div key={player.id} className={styles["box-player"]}>
      <p>
        <span>
          {!player.active ? (
            <>
              <FaUser /> {player.name}
            </>
          ) : (
            <input
              placeholder="novo nome"
              name="name"
              onChange={(e) => handlerForm(e)}
            />
          )}
        </span>
        <span>
          <FaSkullCrossbones />
          Abates : {player.kills}
        </span>
      </p>
      {player.active ? (
        <>
          <div>
            <label htmlFor="kill-player-b">BERMUDA</label>
            <input
              id="kill-player-b"
              type="number"
              name="bermuda_kills"
              onChange={(e) => handlerForm(e)}
            />
          </div>
          <div>
            <label htmlFor="kill-player-p">PURGATORIO</label>
            <input
              id="kill-player-p"
              type="number"
              name="purgatorio_kills"
              onChange={(e) => handlerForm(e)}
            />
          </div>
          <div>
            <label htmlFor="kill-player-k">KALAHARI</label>
            <input
              id="kill-player-k"
              type="number"
              name="kalahari_kills"
              onChange={(e) => handlerForm(e)}
            />
          </div>
          <button type="button" onClick={() => updatePlayer()}>
            salvar
          </button>
        </>
      ) : !showDeletePlayer ? (
        <>
          <button type="button" onClick={() => activeEditePlayer(player.id)}>
            Editar
          </button>
          <button
            style={{ background: "red", color: "white" }}
            type="button"
            onClick={() => setShowDeletePlayer(true)}
          >
            Excluir
          </button>
        </>
      ) : (
        <>
          <button
            style={{ background: "red", color: "white" }}
            type="button"
            onClick={() => deletePlayer()}
          >
            SIM
          </button>
          <button type="button" onClick={() => setShowDeletePlayer(false)}>
            NÂO
          </button>
        </>
      )}
    </div>
  );
}

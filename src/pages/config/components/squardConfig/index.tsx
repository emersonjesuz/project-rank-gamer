import { useState } from "react";
import FormSquard from "../form/formSquard";
import NewPlayer from "../form/newPlayer";
import styles from "./styles.module.scss";
import { HiOutlinePencil, HiPlus, HiOutlineTrash } from "react-icons/hi";
import { FaUser, FaCubes } from "react-icons/fa";
import { playerType } from "../../../../types";

type props = {
  players: playerType[];
  name: string;
  id: number;
};

export default function SquardConfig({ players, name, id }: Readonly<props>) {
  const [showFormPlayer, setShowFormPlayer] = useState(false);
  const [showNewPlayer, setShowNewPlayer] = useState(false);
  const [playersInSquard, setPlayersInSquard] = useState<playerType[]>([
    ...players,
  ]);

  return (
    <>
      <div className={styles.squard}>
        <h5>{name}</h5>
        <span>
          <FaUser /> {playersInSquard.length} / 5
        </span>
        <span>
          <FaCubes /> 100
        </span>
        <button type="button" onClick={() => setShowNewPlayer(!showNewPlayer)}>
          <HiPlus />
        </button>
        <button
          type="button"
          onClick={() => setShowFormPlayer(!showFormPlayer)}
        >
          <HiOutlinePencil />
        </button>
        <button type="button" onClick={() => {}}>
          <HiOutlineTrash />
        </button>
      </div>
      {showFormPlayer && (
        <FormSquard
          playersInSquard={playersInSquard}
          setPlayersInSquard={setPlayersInSquard}
          setShowFormPlayer={setShowFormPlayer}
        />
      )}
      {showNewPlayer && (
        <NewPlayer
          squardId={id}
          playersInSquard={playersInSquard}
          setPlayersInSquard={setPlayersInSquard}
        />
      )}
    </>
  );
}

import { useState } from "react";
import { FaCubes, FaUser } from "react-icons/fa";
import { HiOutlinePencil, HiOutlineTrash, HiPlus } from "react-icons/hi";
import { playerType } from "../../../../types";
import DeleteSquard from "../form/deleteSquard";
import FormSquard from "../form/formSquard";
import NewPlayer from "../form/newPlayer";
import styles from "./styles.module.scss";

type props = {
  players: playerType[];
  name: string;
  id: number;
  points: number;
};

export default function SquardConfig({
  players,
  name,
  id,
  points,
}: Readonly<props>) {
  const [showFormPlayer, setShowFormPlayer] = useState(false);
  const [showNewPlayer, setShowNewPlayer] = useState(false);
  const [showDeleteSquard, setShowDeleteSquard] = useState({
    id: 0,
    active: false,
  });
  const [playersInSquard, setPlayersInSquard] = useState<playerType[]>([
    ...players,
  ]);

  return (
    <>
      <div key={id} className={styles.squard}>
        <h5>{name}</h5>
        <span>
          <FaUser /> {playersInSquard.length} / 5
        </span>
        <span>
          <FaCubes /> {points || 0}
        </span>
        <button
          type="button"
          onClick={() => {
            if (!showDeleteSquard.active) setShowNewPlayer(!showNewPlayer);
          }}
        >
          <HiPlus />
        </button>
        <button
          type="button"
          onClick={() => {
            if (!showDeleteSquard.active) setShowFormPlayer(!showFormPlayer);
          }}
        >
          <HiOutlinePencil />
        </button>
        <button
          type="button"
          onClick={() => {
            setShowFormPlayer(false);
            setShowNewPlayer(false);
            setShowDeleteSquard({ id, active: true });
          }}
        >
          <HiOutlineTrash />
        </button>
      </div>
      {showFormPlayer && (
        <FormSquard
          key={id}
          squard_id={id}
          playersInSquard={playersInSquard}
          setPlayersInSquard={setPlayersInSquard}
          setShowFormPlayer={setShowFormPlayer}
        />
      )}
      {showNewPlayer && (
        <NewPlayer
          key={id}
          squard_id={id}
          playersInSquard={playersInSquard}
          setPlayersInSquard={setPlayersInSquard}
        />
      )}

      {showDeleteSquard.active && (
        <DeleteSquard
          key={id}
          showDeleteSquard={showDeleteSquard}
          setShowDeleteSquard={setShowDeleteSquard}
        />
      )}
    </>
  );
}

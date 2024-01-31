import { useEffect, useState } from "react";
import FormSquard from "../form/formSquard";
import NewPlayer from "../form/newPlayer";
import styles from "./styles.module.scss";
import { HiOutlinePencil, HiPlus, HiOutlineTrash } from "react-icons/hi";
import { FaUser, FaCubes } from "react-icons/fa";
import { playerType } from "../../../../types";
import DeleteSquard from "../form/deleteSquard";

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
          squardId={id}
          playersInSquard={playersInSquard}
          setPlayersInSquard={setPlayersInSquard}
          setShowFormPlayer={setShowFormPlayer}
        />
      )}
      {showNewPlayer && (
        <NewPlayer
          squard_id={id}
          playersInSquard={playersInSquard}
          setPlayersInSquard={setPlayersInSquard}
        />
      )}

      {showDeleteSquard.active && (
        <DeleteSquard
          showDeleteSquard={showDeleteSquard}
          setShowDeleteSquard={setShowDeleteSquard}
        />
      )}
    </>
  );
}

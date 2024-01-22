import { Dispatch, SetStateAction } from "react";
import { playerType, squardType } from "../../../../types";
import styles from "./styles.module.scss";

type Props = {
  squards: squardType[];
  setShowModal: Dispatch<SetStateAction<boolean>>;
  type: "mvp" | "squard";
  players: playerType[];
};
type rankTypes = {
  id: number;
  name: string;
  squard?: string;
  position: number;
  booyar?: number;
  points?: number;
  kills: number;
};

export default function Table({
  squards,
  setShowModal,
  type,
  players,
}: Readonly<Props>) {
  function stylesRank(position: number): string {
    const rank = styles.info;

    if (position < 4) return styles.first;
    if (position > 9) return styles.latest;

    return rank;
  }

  function rank({
    position,
    name,
    booyar,
    id,
    kills,
    points,
    squard,
  }: rankTypes) {
    console.log(position, name, booyar, id, kills, points, squard);

    return (
      <div
        onClick={() => setShowModal(true)}
        key={id}
        className={stylesRank(position)}
      >
        <span>{position}</span>
        <span style={{ flex: 1 }}>{name}</span>
        {type === "mvp" && <span style={{ flex: 1 }}>{squard || ""}</span>}
        {type === "squard" && (
          <>
            <span style={{ color: "gray" }}>{points || 0}</span>
            <span>{booyar || 0}</span>
          </>
        )}
        <span>{kills}</span>
      </div>
    );
  }

  return (
    <div className={styles.table}>
      <div className={styles["header-table"]}>
        <span>RANK</span>
        <span style={{ flex: 1 }}>
          {type === "squard" ? "EQUIPE" : "JOGADOR"}
        </span>
        {type === "mvp" && <span style={{ flex: 1 }}>EQUIPE</span>}
        {type === "squard" && (
          <>
            <span>PONTOS</span>
            <span>BOOYAR</span>
          </>
        )}
        <span>ABATES</span>
      </div>
      <div className={styles["content-info"]}>
        {type === "squard" && squards.map((squard) => rank({ ...squard }))}
        {type === "mvp" &&
          players.map((player) =>
            rank({
              ...player,
              kills: player.kills ?? 0,
              position: player.position ?? 0,
            })
          )}
      </div>
    </div>
  );
}

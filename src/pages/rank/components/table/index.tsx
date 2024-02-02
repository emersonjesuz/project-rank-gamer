import { Dispatch, SetStateAction } from "react";
import { playerType, squardType } from "../../../../types";
import styles from "./styles.module.scss";

type Props = {
  squards: squardType[];
  setShowModal: Dispatch<
    SetStateAction<{ squard: squardType; active: boolean }>
  >;
  type: "mvp" | "squard";
  players: playerType[];
};
type rankTypes = {
  squard?: squardType;
  player?: playerType;
  index: number;
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

  function showModalSquard(squard: squardType) {
    if (squard) {
      setShowModal({ squard, active: true });
    }
  }

  function rank({ player, squard, index }: rankTypes) {
    return (
      <div
        key={player ? player.id : squard?.id}
        onClick={() => {
          squard && showModalSquard(squard);
        }}
        className={stylesRank(index)}
      >
        <span>{index}</span>
        <span style={{ flex: 1 }}>{player ? player.name : squard?.name}</span>
        {type === "mvp" && <span style={{ flex: 1 }}>{"??"}</span>}
        {type === "squard" && (
          <>
            <span style={{ color: "gray" }}>{squard?.points}</span>
            <span>{squard?.booyar}</span>
          </>
        )}
        <span>{player ? player.kills : squard?.kills}</span>
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
        {type === "squard" &&
          squards.map((squard, index) => rank({ squard, index: index + 1 }))}
        {type === "mvp" &&
          players.map((player, index) =>
            rank({
              player,
              index: index + 1,
            })
          )}
      </div>
    </div>
  );
}

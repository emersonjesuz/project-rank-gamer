import { Dispatch, SetStateAction } from "react";
import { squardType } from "../../../../types";
import styles from "./styles.module.scss";

type Props = {
  squards: squardType[];
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

export default function Table({ squards, setShowModal }: Props) {
  function stylesRank(position: number): string | undefined {
    const rank = styles.info;

    if (position < 4) return styles.first;
    if (position > 9) return styles.latest;

    return rank;
  }

  function rank({ position, name, booyar, id, kills, points }: squardType) {
    return (
      <div
        onClick={() => setShowModal(true)}
        key={id}
        className={stylesRank(position)}
      >
        <span>{position}</span>
        <span style={{ flex: 1 }}>{name}</span>
        <span style={{ color: "gray" }}>{points}</span>
        <span>{booyar}</span>
        <span>{kills}</span>
      </div>
    );
  }

  return (
    <div className={styles.table}>
      <div className={styles["header-table"]}>
        <span>RANK</span>
        <span style={{ flex: 1 }}>EQUIPE</span>
        <span>PONTOS</span>
        <span>BOOYAR</span>
        <span>ABATES</span>
      </div>
      <div className={styles["content-info"]}>
        {squards.map((squard) => rank({ ...squard }))}
      </div>
    </div>
  );
}

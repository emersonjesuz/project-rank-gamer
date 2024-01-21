import { Dispatch, SetStateAction } from "react";
import { playerType, squardType } from "../../../types";
import styles from "./styles.module.scss";
import { FaTimes } from "react-icons/fa";

type Props = {
  squard: squardType;
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

const players: playerType[] = [
  {
    id: 1,
    name: "wilson",
    kills: 10,
    squard: "agua de coco cassemiro",
    position: 1,
  },
  {
    id: 2,
    name: "wilson",
    kills: 10,
    squard: "agua de coco cassemiro",
    position: 2,
  },
  {
    id: 3,
    name: "wilson",
    kills: 10,
    squard: "agua de coco cassemiro",
    position: 3,
  },
  {
    id: 4,
    name: "wilson",
    kills: 10,
    squard: "agua de coco cassemiro",
    position: 4,
  },
];

export default function Squard({ squard, setShowModal }: Props) {
  function player({ id, kills, name }: playerType) {
    return (
      <div className={styles["player"]} key={id}>
        <span>{name}</span>
        <span>{kills}</span>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <header>
          <h1>agua de coco cassemiro</h1>
          <FaTimes
            className={styles.icon}
            size={40}
            onClick={() => setShowModal(false)}
          />
        </header>

        <div className={styles["content-menu"]}>
          <div className={styles.menu}>
            <span>RANK</span>
            <span>{squard.position}</span>
          </div>
          <div className={styles.menu}>
            <span>ABATES</span>
            <span>1</span>
          </div>
          <div className={styles.menu}>
            <span>BOOYAR</span>
            <span>1</span>
          </div>
          <div className={styles.menu}>
            <span>PONTOS</span>
            <span>1</span>
          </div>
        </div>
        <div className={styles["content-player"]}>
          <div className={styles["box-maps"]}>
            <div>
              <span>KALAHARI</span>
              <span>12</span>
            </div>
            <div>
              <span>PURGATORIO</span>
              <span>34</span>
            </div>
            <div>
              <span>BERMUDA</span>
              <span>33</span>
            </div>
          </div>
          <div className={styles["box-player"]}>
            <div className={styles["menu-player"]}>
              <span>NOME</span>
              <span>ABATES</span>
            </div>
            <div className={styles["info-player"]}>
              {players.map((p) => player({ ...p }))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

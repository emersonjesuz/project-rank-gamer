import { Dispatch, SetStateAction, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { playerType, squardType } from "../../../types";
import styles from "./styles.module.scss";

type Props = {
  setShowModal: Dispatch<
    SetStateAction<{ squard: squardType; active: boolean }>
  >;
  showModal: { squard: squardType; active: boolean };
};

export default function Squard({ setShowModal, showModal }: Readonly<Props>) {
  const [squard] = useState(showModal.squard);

  function player({ id, kills, name }: playerType) {
    return (
      <div className={styles["player"]} key={id}>
        <span>{name}</span>
        <span>{kills}</span>
      </div>
    );
  }

  function countBooyar(list: number[]): number {
    return list.filter((position) => position === 1).length;
  }

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <header>
          <h1>{squard.name}</h1>
          <FaTimes
            className={styles.icon}
            size={40}
            onClick={() => setShowModal({ ...showModal, active: false })}
          />
        </header>

        <div className={styles["content-menu"]}>
          <div className={styles.menu}></div>
          <div className={styles.menu}>
            <span>ABATES</span>
            <span>{squard.kills}</span>
          </div>
          <div className={styles.menu}>
            <span>BOOYAR</span>
            <span>{squard.booyar}</span>
          </div>
          <div className={styles.menu}>
            <span>PONTOS</span>
            <span>{squard.points}</span>
          </div>
        </div>
        <div className={styles["content-player"]}>
          <div className={styles["box-maps"]}>
            <div>
              <span>KALAHARI</span>
              <span>{countBooyar(squard.kalahari_position)}</span>
            </div>
            <div>
              <span>PURGATORIO</span>
              <span>{countBooyar(squard.purgatorio_position)}</span>
            </div>
            <div>
              <span>BERMUDA</span>
              <span>{countBooyar(squard.bermuda_position)}</span>
            </div>
          </div>
          <div className={styles["box-player"]}>
            <div className={styles["menu-player"]}>
              <span>NOME</span>
              <span>ABATES</span>
            </div>
            <div className={styles["info-player"]}>
              {squard.players?.map((getPlayer) => player({ ...getPlayer }))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

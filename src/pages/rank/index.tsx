import { useState } from "react";
import { HiOutlineExclamationCircle, HiViewGrid, HiUser } from "react-icons/hi";
import Squard from "../../components/modals/squard";
import { playerType, squardType } from "../../types";
import Header from "./components/header";
import Table from "./components/table";
import styles from "./styles.module.scss";
import Signin from "../../components/modals/sign-in";

const squards: squardType[] = [
  {
    id: 1,
    position: 1,
    name: "agua de coco casemirro",
    points: 10,
    booyar: 0,
    kills: 100,
  },
  {
    id: 2,
    position: 2,
    name: "agua de coco casemirro",
    points: 10,
    booyar: 0,
    kills: 100,
  },
  {
    id: 3,
    position: 3,
    name: "agua de coco casemirro",
    points: 10,
    booyar: 0,
    kills: 100,
  },
  {
    id: 4,
    position: 4,
    name: "agua de coco casemirro",
    points: 10,
    booyar: 0,
    kills: 100,
  },
  {
    id: 5,
    position: 5,
    name: "agua de coco casemirro",
    points: 10,
    booyar: 0,
    kills: 100,
  },
  {
    id: 6,
    position: 6,
    name: "agua de coco casemirro",
    points: 10,
    booyar: 0,
    kills: 100,
  },
  {
    id: 7,
    position: 7,
    name: "agua de coco casemirro",
    points: 10,
    booyar: 0,
    kills: 100,
  },
  {
    id: 8,
    position: 8,
    name: "agua de coco casemirro",
    points: 10,
    booyar: 0,
    kills: 100,
  },
  {
    id: 9,
    position: 9,
    name: "agua de coco casemirro",
    points: 10,
    booyar: 0,
    kills: 100,
  },
  {
    id: 10,
    position: 10,
    name: "agua de coco casemirro",
    points: 10,
    booyar: 0,
    kills: 100,
  },
  {
    id: 11,
    position: 11,
    name: "agua de coco casemirro",
    points: 10,
    booyar: 0,
    kills: 100,
  },
  {
    id: 12,
    position: 12,
    name: "agua de coco casemirro",
    points: 10,
    booyar: 0,
    kills: 100,
  },
];

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
  {
    id: 5,
    name: "wilson",
    kills: 10,
    squard: "agua de coco cassemiro",
    position: 5,
  },
  {
    id: 6,
    name: "wilson",
    kills: 10,
    squard: "agua de coco cassemiro",
    position: 6,
  },
  {
    id: 7,
    name: "wilson",
    kills: 10,
    squard: "agua de coco cassemiro",
    position: 7,
  },
  {
    id: 8,
    name: "wilson",
    kills: 10,
    squard: "agua de coco cassemiro",
    position: 8,
  },
];

type showTableTypes = {
  active: boolean;
  type: "mvp" | "squard";
};

export default function Rank() {
  const [showModal, setShowModal] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showTable, setShowTable] = useState<showTableTypes>({
    active: false,
    type: "squard",
  });

  return (
    <div className={styles.container}>
      <Header setShowSignup={setShowSignup} />
      <main className={styles.main}>
        <div className={styles["content-table"]}>
          <section className={styles.title}>
            <button
              onClick={() => setShowTable({ active: true, type: "squard" })}
            >
              Clasaificação <HiViewGrid size={30} />
            </button>
            <button onClick={() => setShowTable({ active: true, type: "mvp" })}>
              MVP <HiUser size={30} />
            </button>
          </section>
          {showTable && (
            <Table
              squards={squards}
              players={players}
              setShowModal={setShowModal}
              type={showTable.type}
            />
          )}
        </div>
      </main>
      {showModal && <Squard squard={squards[0]} setShowModal={setShowModal} />}
      {showSignup && <Signin setShowSignup={setShowSignup} />}
    </div>
  );
}

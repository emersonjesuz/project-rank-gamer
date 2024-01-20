import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import Squard from "../../components/modals/squard";
import { squardType } from "../../types";
import Header from "./components/header";
import Table from "./components/table";
import styles from "./styles.module.scss";

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

export default function Rank() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div className={styles["content-table"]}>
          <section className={styles.title}>
            <h1>Classificação</h1>
            <HiOutlineExclamationCircle size={30} />
          </section>
          <Table squards={squards} setShowModal={setShowModal} />
        </div>
      </main>
      {showModal && <Squard squard={squards[0]} setShowModal={setShowModal} />}
    </div>
  );
}

import { useEffect, useState } from "react";
import { HiUser, HiViewGrid } from "react-icons/hi";
import Signin from "../../components/modals/sign-in";
import Squard from "../../components/modals/squard";
import { useGlobalContext } from "../../context/dataSquardContext";
import apiRank from "../../services/apiRank";
import Header from "./components/header";
import Table from "./components/table";
import styles from "./styles.module.scss";
import NotifyError from "../../utils/apiNotify";

type showTableTypes = {
  active: boolean;
  type: "mvp" | "squard";
};

export default function Rank() {
  const { setDataSquard, dataSquard, dataPlayer, setDataPlayer } =
    useGlobalContext();
  const [showModal, setShowModal] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showTable, setShowTable] = useState<showTableTypes>({
    active: false,
    type: "squard",
  });

  async function listSquard() {
    try {
      const { data } = await apiRank.get("/list");
      setDataSquard([...data]);
    } catch (error) {
      NotifyError(error);
    }
  }
  async function listPlayer() {
    try {
      const { data } = await apiRank.get("/player/list");

      setDataPlayer([...data]);
    } catch (error) {
      NotifyError(error);
    }
  }

  useEffect(() => {
    listSquard();
    listPlayer();
  }, []);

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
              squards={dataSquard}
              players={dataPlayer}
              setShowModal={setShowModal}
              type={showTable.type}
            />
          )}
        </div>
      </main>
      {showModal && (
        <Squard squard={dataSquard[0]} setShowModal={setShowModal} />
      )}
      {showSignup && <Signin setShowSignup={setShowSignup} />}
    </div>
  );
}

import { Dispatch, SetStateAction } from "react";
import styles from "./styles.module.scss";
import apiRank from "../../../../../services/apiRank";
import { useGlobalContext } from "../../../../../context/dataSquardContext";

type props = {
  setShowDeleteSquard: Dispatch<
    SetStateAction<{ id: number; active: boolean }>
  >;
  showDeleteSquard: { id: number; active: boolean };
};

export default function DeleteSquard({
  setShowDeleteSquard,
  showDeleteSquard,
}: Readonly<props>) {
  const { dataSquard, setDataSquard } = useGlobalContext();

  async function handlerDeleteSquard() {
    try {
      const { data } = await apiRank.delete(`/delete/${showDeleteSquard.id}`);
      const newList = dataSquard.filter((squard) => squard.id !== data.id);

      setDataSquard([...newList]);
      setShowDeleteSquard({ ...showDeleteSquard, active: false });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.box}>
      <h4>Deseja excluir a equipe ?</h4>
      <button id={styles["first-button"]} onClick={() => handlerDeleteSquard()}>
        SIM
      </button>
      <button
        id={styles["second-button"]}
        onClick={() =>
          setShowDeleteSquard({ ...showDeleteSquard, active: false })
        }
      >
        NÂO
      </button>
    </div>
  );
}

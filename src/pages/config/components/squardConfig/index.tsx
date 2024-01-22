import FormSquard from "../form/formSquard";
import styles from "./styles.module.scss";
import { HiOutlinePencil, HiPlus, HiOutlineTrash } from "react-icons/hi";

export default function SquardConfig() {
  return (
    <>
      <div className={styles.squard}>
        <h5>agua de coco cassemiro</h5>
        <span> 1 / 5</span>
        <button>
          <HiPlus />
        </button>
        <button>
          <HiOutlinePencil />
        </button>
        <button>
          <HiOutlineTrash />
        </button>
      </div>
      <FormSquard />
    </>
  );
}

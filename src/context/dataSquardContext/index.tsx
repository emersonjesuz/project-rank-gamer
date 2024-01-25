import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { squards } from "../../database";
import { squardType } from "../../types";

interface Props {
  children: React.ReactNode;
}

interface ContextProps {
  dataSquard: squardType[];
  setDataSquard: Dispatch<SetStateAction<squardType[]>>;
  getCountPlayer: () => number;
  countPlayer: number;
  setCountPlayer: Dispatch<SetStateAction<number>>;
}

const GlobalContext = createContext<ContextProps>({
  dataSquard: [],
  setDataSquard: () => [],
  getCountPlayer: (): number => 0,
  countPlayer: 0,
  setCountPlayer: () => 0,
});

export const GlobalContextProvider = ({ children }: Props) => {
  const [dataSquard, setDataSquard] = useState<squardType[]>([...squards]);
  const [countPlayer, setCountPlayer] = useState<number>(getCountPlayer());

  function getCountPlayer(): number {
    let count = 0;
    dataSquard.forEach((squard) => {
      count += squard.players.length;
    });

    return count;
  }

  const props = {
    dataSquard,
    setDataSquard,
    getCountPlayer,
    countPlayer,
    setCountPlayer,
  };

  return (
    <GlobalContext.Provider value={props}>{children}</GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

import { playerType, squardType } from "../../types";

interface Props {
  children: React.ReactNode;
}

interface ContextProps {
  dataSquard: squardType[];
  setDataSquard: Dispatch<SetStateAction<squardType[]>>;
  getCountPlayer: () => number;
  countPlayer: number;
  setCountPlayer: Dispatch<SetStateAction<number>>;
  dataPlayer: playerType[];
  setDataPlayer: Dispatch<SetStateAction<playerType[]>>;
}

const GlobalContext = createContext<ContextProps>({
  dataSquard: [],
  setDataSquard: () => [],
  getCountPlayer: (): number => 0,
  countPlayer: 0,
  setCountPlayer: () => 0,
  dataPlayer: [],
  setDataPlayer: () => [],
});

export const GlobalContextProvider = ({ children }: Props) => {
  const [dataSquard, setDataSquard] = useState<squardType[]>([]);
  const [dataPlayer, setDataPlayer] = useState<playerType[]>([]);
  const [countPlayer, setCountPlayer] = useState<number>(getCountPlayer());

  function getCountPlayer(): number {
    let count = 0;
    dataSquard.forEach((squard) => {
      count += squard.players?.length ?? 0;
    });

    return count;
  }

  const props = {
    dataSquard,
    setDataSquard,
    getCountPlayer,
    countPlayer,
    setCountPlayer,
    dataPlayer,
    setDataPlayer,
  };

  return (
    <GlobalContext.Provider value={props}>{children}</GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);

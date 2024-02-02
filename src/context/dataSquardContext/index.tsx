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
  dataPlayer: playerType[];
  setDataPlayer: Dispatch<SetStateAction<playerType[]>>;
}

const GlobalContext = createContext<ContextProps>({
  dataSquard: [],
  setDataSquard: () => [],
  dataPlayer: [],
  setDataPlayer: () => [],
});

export const GlobalContextProvider = ({ children }: Props) => {
  const [dataSquard, setDataSquard] = useState<squardType[]>([]);
  const [dataPlayer, setDataPlayer] = useState<playerType[]>([]);

  const props = {
    dataSquard,
    setDataSquard,
    dataPlayer,
    setDataPlayer,
  };

  return (
    <GlobalContext.Provider value={props}>{children}</GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);

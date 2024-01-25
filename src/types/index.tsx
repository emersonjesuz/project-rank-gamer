export type squardType = {
  id: number;
  position: number;
  name: string;
  booyar: number;
  points: number;
  kills: number;
  players: playerType[];
};

export type playerType = {
  id: number;
  name: string;
  kills?: number;
  squard?: string;
  position?: number;
  bermuda?: number;
  kalahari?: number;
  purgatorio?: number;
  active?: boolean;
  squard_id: number;
};

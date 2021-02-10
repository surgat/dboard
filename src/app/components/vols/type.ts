export type VOLS = 'scolcovo' | 'm10' | 'm9' | 'ba86' | 'b19'  | 'south';

export enum VOLSLineStatus {
  ok,
  ng,
  nt,
  na
}

export interface VOLSLine {
  name: string;
  status: VOLSLineStatus;
}

export interface VOLSPoint {
  name: string;
  status?: any;
  roleStatus?: any;
  data: {[key in VOLS]?: VOLSLine[]};
}

export interface GraphProps {
  data: {[key in VOLS]?: VOLSPoint};
  width: number;
  height: number;
}

export interface IPointCoord {
  name: string;
  x: number;
  y: number;
}

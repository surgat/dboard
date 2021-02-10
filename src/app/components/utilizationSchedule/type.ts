export interface UtilizationScheduleBlock {
  name: string;
  area?: string;
  in?: number[],
  out?: number[],
}

export interface UtilizationSchedule {
  top: UtilizationScheduleBlock[];
  bottom: UtilizationScheduleBlock[];
}

export interface GraphProps {
  data: UtilizationScheduleBlock[];
  width: number;
  height: number;
}
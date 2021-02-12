export interface Series {
    text?: string,
    values?: any[],
    animation?: any,
    backgroundColor?: string
    lineColor?: string,
    marker?: {
        backgroundColor?: string,
        borderColor?: string
    }
}

export { pieConfig } from './pieserie'
export { timeseriesConfig } from './timeseries'
export { stackedareaConfig } from './stackedarea'
export { gaugeConfig } from './gauge'
import { timeseriesConfig } from './timeseries'

export function stackedareaConfig() {
    return {
        ...timeseriesConfig(),
        type: 'area',
        stacked: true,
    }
}

// export function stackedareaConfig() {
//     return {
//         type: 'area',
//         stacked: true,
//         title: {
//             text: 'Stackedarea',
//             marginTop: '5px',
//             marginLeft: '15px',
//             backgroundColor: 'transparent',
//             color: 'black',
//             fontSize: '13pt',
//             position: '0px 0px',
//             textAlign: 'left'
//         },
//         legend: {
//             align: 'left',
//             marginTop: '30px',
//             backgroundColor: 'none',
//             borderWidth: '0px',
//             item: {
//                 fontFamily: 'Roboto'
//             },
//             layout: 'x4',
//             marker: {
//                 type: 'circle',
//                 borderColor: 'transparent',
//                 size: '5px'
//             },
//             shadow: false,
//             toggleAction: 'remove',
//             verticalAlign: 'top'
//         },
//         plot: {
//             tooltip: {
//                 text: '<div style="text-align: center; line-height: 14px; padding-top: 5px;"><b>%t</b><br><br>%kt<br><br><b>Traffic: %node-value KBps</b></div>',
//                 marginTop: '5px',
//                 padding: '5px 15px',
//                 fontFamily: 'Roboto',
//                 htmlMode: true
//             },
//             activeArea: true,
//             alphaArea: 0.7,
//             aspect: 'spline',
//             marker: {
//                 borderColor: '#ffffff',
//                 shadow: false,
//                 size: '3px'
//             },
//             shadow: false
//         },
//         plotarea: {
//             marginTop: '70px',
//             marginRight: '65px',
//             marginLeft: '20px'
//         },
//         scaleX: {
//             // values: [1564646407000, 1564646707000, 1564647007000, 1564647307000, 1564647607000, 1564647907000, 1564648207000, 1564648507000, 1564648807000, 1564649107000, 1564649407000, 1564649707000, 1564650007000],
//             guide: {
//                 visible: false
//             },
//             item: {
//                 fontColor: '#acacac',
//                 fontFamily: 'Roboto',
//                 offsetY: '2px',
//                 rules: [
//                     {
//                         offsetX: '20px',
//                         rule: '%scale-position === 0'
//                     }
//                 ]
//             },
//             lineWidth: '0px',
//             tick: {
//                 visible: false
//             },
//             transform: {
//                 type: 'date',
//                 all: '%d %M %Y<br>%h:%i %A'
//             },
//             zooming: true
//         },
//         scaleY: {
//             format: '%v KBps',
//             guide: {
//                 lineStyle: 'dotted'
//             },
//             item: {
//                 fontColor: '#acacac',
//                 fontFamily: 'Roboto'
//             },
//             lineWidth: '0px',
//             placement: 'opposite',
//             tick: {
//                 visible: false
//             },
//             zooming: true
//         },
//         zoom: {
//             preserveZoom: true // saves state so appears to not reload
//         },
//         preview: {
//             marginRight: '20px',
//             marginBottom: '5px',
//             marginLeft: '20px',
//             alpha: 0.2,
//             borderColor: '#aeaeae',
//             borderWidth: '1px',
//             handleTop: {
//                 borderColor: '#ccc',
//                 borderWidth: '1px'
//             },
//             handleRight: {
//                 borderColor: '#ccc',
//                 borderWidth: '1px'
//             },
//             handleBottom: {
//                 borderColor: '#ccc',
//                 borderWidth: '1px'
//             },
//             handleLeft: {
//                 borderColor: '#ccc',
//                 borderWidth: '1px'
//             },
//             height: '55px',
//             live: true,
//             mask: {
//                 backgroundColor: '#c7c7c7'
//             },
//             preserveZoom: true
//         }
//     };
// }
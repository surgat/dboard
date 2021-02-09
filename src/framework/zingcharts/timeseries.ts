export const timeseriesConfig = {
    type: 'line',
    title: {
        text: 'Time Series',
        adjustLayout: true,
        marginTop: '7px',
    },
    legend: {
        align: 'center',
        backgroundColor: 'none',
        borderWidth: '0px',
        item: {
            cursor: 'hand',
        },
        marker: {
            type: 'circle',
            borderWidth: '0px',
            cursor: 'hand'
        },
        verticalAlign: 'top'
    },
    plot: {
        aspect: 'spline',
        lineWidth: '2px',
        marker: {
            borderWidth: '0px',
            size: '5px'
        }
    },
    plotarea: {
        margin: 'dynamic 70'
    },
    scaleX: {
        minValue: 1612180800000,
        step: 'day',
        transform: {
            type: 'date',
            all: '%D %M %d<br>%h:%i:%s'
        },
        zooming: true,
        zoomTo: [0, 15]
    },
    scaleY: {
        guide: {
            lineStyle: 'dashed'
        },
        minorGuide: {
            alpha: 0.7,
            lineStyle: 'dashed',
            lineWidth: '1px',
            visible: true
        },
        minorTicks: 1
    },
    crosshairX: {
        marker: {
            alpha: 0.5,
            size: '7px'
        },
        plotLabel: {
            borderRadius: '3px',
            multiple: true
        },
        scaleLabel: {
            borderRadius: '3px'
        }
    },
    crosshairY: {
        type: 'multiple',
        scaleLabel: {
            bold: true,
            borderRadius: '3px',
            decimals: 2,
            offsetX: '-5px'
        }
    },
    shapes: [
        {
            type: 'rectangle',
            id: 'view_all',
            borderRadius: '3px',
            borderWidth: '1px',
            cursor: 'hand',
            label: {
                text: 'View All',
                bold: true,
                fontSize: '12px'
            },
            width: '75px',
            height: '20px',
            x: '85%',
            y: '11%'
        }
    ],
    tooltip: {
        borderRadius: '3px',
        borderWidth: '0px'
    },
    preview: {
        adjustLayout: true,
    }
};
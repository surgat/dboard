export function pieConfig() {
    return {
        type: 'pie',
        // title: {
        //     text: `pie`,
        //     // adjustLayout: true,
        //     // marginTop: '7px',
        // },
        // subtitle: {
        //     text: `Updated: `,
        //     align: 'right',
        //     offsetX: '0px',
        //     offsetY: '40px'
        // },
        plot: {
            tooltip: {
                text: '%v',
                padding: '5 10',
                fontSize: '18px'
            },
            valueBox: {
                text: '%t\n%v (%npv%)',
                placement: 'out',
                fontSize: "12px"
            },
            animation: {
                effect: 'ANIMATION_EXPAND_VERTICAL',
                method: 'ANIMATION_REGULAR_EASE_OUT',
                sequence: 'ANIMATION_BY_PLOT',
                speed: 500
            },
            borderWidth: '5px'
        },
        // plotarea: {
        //     margin: '0 10 0 0'
        // },
    };
}
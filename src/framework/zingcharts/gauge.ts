export function gaugeConfig() {
    return {
        type: 'gauge',
        theme: 'classic',
        alpha: 1,
        backgroundColor: '#fff #eee',
        title: {
            text: `gauge`,
            adjustLayout: true,
            marginTop: '0',
        },
        plot: {
            backgroundColor: '#666'
        },
        // plotarea: {
        //     margin: '0 0 0 0'
        // },
        scale: {
            sizeFactor: 1.25,
            offsetY: '120px'
        },
        scaleR: {
            values: '0:100:10',
            backgroundColor: '#eeeeee,#b3b3b3',
            borderColor: '#b3b3b3',
            borderWidth: '2px',
            ring: {
                offsetR: '130px',
                rules: [
                    {
                        backgroundColor: '#348D00',
                        rule: '%v >=0 && %v < 20'
                    },
                    {
                        backgroundColor: '#B1AD00',
                        rule: '%v >= 20 && %v < 40'
                    },
                    {
                        backgroundColor: '#FAC100',
                        rule: '%v >= 40 && %v < 60'
                    },
                    {
                        backgroundColor: '#EC7928',
                        rule: '%v >= 60 && %v < 80'
                    },
                    {
                        backgroundColor: '#FB0A02',
                        rule: '%v >= 80'
                    }
                ],
                size: '10px'
            }
        },
        labels: [
            {
                id: 'lbl1',
                text: 'очень медленно',
                tooltip: {
                    text: '< 80 <br>Units',
                    padding: '10px',
                    backgroundColor: '#ea0901',
                    shadow: false
                },
                padding: '10px',
                anchor: 'c',
                backgroundColor: '#FB0A02',
                offsetX: '180px',
                textAlign: 'center',
                width: '120px',
                x: '50%',
                y: '90%'
            },
            {
                id: 'lbl2',
                text: 'медленно',
                tooltip: {
                    text: '> 60 < 80<br>Units',
                    padding: '10px',
                    backgroundColor: '#da6817',
                    shadow: false
                },
                padding: '10px',
                anchor: 'c',
                backgroundColor: '#EC7928',
                offsetX: '80px',
                textAlign: 'center',
                width: '80px',
                x: '50%',
                y: '90%'
            },
            {
                id: 'lbl3',
                text: 'средне',
                tooltip: {
                    text: '> 40 < 60<br>Units',
                    padding: '10px',
                    backgroundColor: '#e9b000',
                    shadow: false
                },
                padding: '10px',
                anchor: 'c',
                backgroundColor: '#FAC100',
                offsetX: '0px',
                textAlign: 'center',
                width: '80px',
                x: '50%',
                y: '90%'
            },
            {
                id: 'lbl4',
                text: 'быстро',
                tooltip: {
                    text: '> 20 < 40<br>Units',
                    padding: '10px',
                    backgroundColor: '#a09c00',
                    shadow: false
                },
                padding: '10px',
                anchor: 'c',
                backgroundColor: '#B1AD00',
                offsetX: '-80px',
                textAlign: 'center',
                width: '80px',
                x: '50%',
                y: '90%'
            },
            {
                id: 'lbl5',
                text: 'очень быстро',
                tooltip: {
                    text: '< 20<br>Units',
                    padding: '10px',
                    backgroundColor: '#237b00',
                    shadow: false
                },
                padding: '10px',
                anchor: 'c',
                backgroundColor: '#348D00',
                offsetX: '-160px',
                textAlign: 'center',
                width: '80px',
                x: '50%',
                y: '90%'
            }
        ],
        tooltip: {
            backgroundColor: 'black'
        }
    }
}

$(document).ready(function () {

    var charts = [
            // yellow to purple
            ['#4c3f85',
                '#5f3b75',
                '#78336a',
                '#ae306d',
                '#a52c4b',
                '#cc573b',
                '#e7772b',
                '#ea8c27',
                '#ec9c23',
                '#efb121'],

            // blue to orange
            ['#d5443a',
                '#b52f4e',
                '#962a69',
                '#76316a',
                '#61356c',
                '#433a83',
                '#293ca7',
                '#2d50b0',
                '#346aa4',
                '#3f7ca4'],

            // purple to blue to green
            ['#9a3069',
                '#5f3b75',
                '#3e3e95',
                '#293ca7',
                '#384b98',
                '#356499',
                '#207e71',
                '#5caa5e',
                '#a4c33f',
                '#dee646'],

            // green to orange
            ['#2f7fa1',
                '#433a83',
                '#288073',
                '#55ab60',
                '#80c24f',
                '#c7d352',
                '#e4ac2f',
                '#f59a2b',
                '#f2892f',
                '#e37331',
                '#df6032']
        ];

    // get a random chart
    var currentChart = Math.floor((Math.random() * charts.length));
});

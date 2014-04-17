$(document).ready(function () {

    var smallScreen = false;

    $(window).resize(function() {
        var width = $(window).width();
        
        if(width <= 960) {
            $('body').addClass('smallScreen');
            smallScreen = true;
        } else {
            $('body').removeClass('smallScreen');
            smallScreen = false;
        }
    });
    $(window).trigger('resize');

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

    function addChartClass() {
        switch (currentChart) {
        case 0:
            $('body').addClass('yellowToPurple');
            break;
        case 1:
            $('body').addClass('blueToOrange');
            break;
        case 2:
            $('body').addClass('purpleToGreen');
            break;
        case 3:
            $('body').addClass('greenToOrange');
            break;
        }
    }
    addChartClass();

    var summarySlider = {};
        summarySlider.inner = $('.summary li');
        summarySlider.height = 0;
        summarySlider.current = 0;
        summarySlider.length = 0;
        summarySlider.text = '';
        summarySlider.init = function() {
        
            summarySlider.text = summarySlider.inner.attr('data-text');
            summarySlider.text = summarySlider.text.split('/');

            summarySlider.length = summarySlider.text.length;


            summarySlider.formatText();
        };

        summarySlider.formatText = function() {
            var text = summarySlider.text[summarySlider.current];
                text = text.split(' ');
            var prefix = '<span>';
            var suffix = '</span> ';

            for(var i in text) {
                text[i] = prefix+text[i]+suffix;
            }
            text.join();

            if (smallScreen == true) {
                summarySlider.height = 40;   
            } else {
                summarySlider.height = 60;
            }


            summarySlider.inner.html(text);        
            summarySlider.inner.children().each(function(i) {
                $(this).css({'padding-top': summarySlider.height});
                $(this).delay(i*100).animate({'padding-top': 0}, 200);
            });
            
            var timer = setTimeout(function(){ 
                summarySlider.inner.children().each(function(i) {
                    $(this).delay(i*100).animate({'padding-top': summarySlider.height}, 200, function(){
                        if(i == summarySlider.inner.children().length-1) {
                            summarySlider.next();             
                        }
                    });
                });
                
            }, 5000);
            
        };
        summarySlider.next = function() {
            summarySlider.current = (summarySlider.current < summarySlider.length-1)? summarySlider.current+1 : 0;

            summarySlider.formatText();
        };

        summarySlider.init();
});

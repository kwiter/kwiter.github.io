$(function() {
        $('.inlinesparkline').sparkline(); 

        var myvalues = [10,8,5,7,4,4,1];
        $('.dynamicsparkline').sparkline(myvalues,{width:"3em"});

        $('.dynamicbar').sparkline(myvalues, {type: 'bar', barColor: 'green'} );

        $('.inlinebar').sparkline('html', {type: 'bar', barColor: 'red'} );

        var mynormal = [0,0,0.001,0.002,0.004,0.009,0.018,0.032,0.054,0.086,0.13,0.183,0.242,0.301,0.352,0.387,0.399,0.387,0.352,0.301,0.242,0.183,0.13,0.086,0.054,0.032,0.018,0.009,0.004,0.002,0.001,0,0];
        $('.normalsparkline').sparkline(mynormal,{width:"3em"});
        
         var myTnormal = [0,0,0,0,0,0,0,0,0,0,0,0,0,0.301,0.352,0.387,0.399,0.387,0.352,0.301,0,0,0,0,0,0,0,0,0,0,0,0,0];
        $('.Tnormalsparkline').sparkline(myTnormal,{width:"3em"});
        
       var myskew = [0,0,0.003,0.013,0.038,0.088,0.17,0.293,0.461,0.677,0.938,1.235,1.555,1.874,2.161,2.373,2.458,2.349,1.968,1.222,0];
        $('.skewsparkline').sparkline(myskew,{width:"3em"});

	var mySimp = [7.8,8.05,8.2,8.2,8.4,8.4,8.3,8.1,7.9,7.6,7.3,7.3,7.1,7.1,7.1,7,7,7,6.9,6.9,6.9,6.95,6.85,6.85,6.81,6.81,6.8];
        $('.simpsparkline').sparkline(mySimp,{width:"3em"});

	var myNeg = [10,8,5,7,4,4,1];
        $('.negsparkline').sparkline(myNeg,{width:"3em"});
        
   var myExp = [1,1,2,4,7,11,18,30,49,81,134];
        $('.expsparkline').sparkline(myExp,{width:"3em"});
        
});

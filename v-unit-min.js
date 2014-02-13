/*
 MIT
*/
;(function(h,c){var b={a:{c:"v-unit-sheet",h:100},b:{height:0,width:0},j:function(){b.e();b.l()},l:function(){return h.setInterval(b.e,b.a.h)},e:function(){var a=b.b.height,d=b.b.width,c=b.d();c.height==a&&c.width==d||b.i()},g:function(){var a=c.createElement("style");a.rel="stylesheet";a.type="text/css";a.id=b.a.c;return a},k:function(a){for(var d=b.d(),f=d.height/100,d=d.width/100,g="",e=1;100>=e;e++)g+=".vh"+e+"{height:"+Math.round(f*e)+"px;}.vw"+e+"{width:"+Math.round(d*e)+"px;}\n";a.styleSheet?
a.styleSheet.cssText=g:a.appendChild(c.createTextNode(g))},f:function(a){var d=c.getElementById(b.a.c),f=c.head||c.getElementsByTagName("head")[0]||c.documentElement;d&&f.removeChild(d);f.appendChild(a)},d:function(){var a={height:c.documentElement.clientHeight,width:c.documentElement.clientWidth};return b.b=a},i:function(){var a=b.g();b.k(a);b.f(a)}};b.j()})(window,document);

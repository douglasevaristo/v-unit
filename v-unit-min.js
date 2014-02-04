/*
 MIT
*/
(function(h,g){var b={a:{c:"v-unit-sheet",h:100},b:{height:0,width:0},j:function(){b.e();b.l()},l:function(){return h.setInterval(b.e,b.a.h)},e:function(){var a=b.b.height,c=b.b.width,d=b.d();d.height==a&&d.width==c||b.i()},g:function(){var a=document.createElement("style");a.rel="stylesheet";a.type="text/css";a.id=b.a.c;return a},k:function(a){for(var c=b.d(),d=c.height/100,c=c.width/100,f="",e=1;100>=e;e++)f+=".vh"+e+"{height:"+Math.round(d*e)+"px;}.vw"+e+"{width:"+Math.round(c*e)+"px;}\n";a.styleSheet?
a.styleSheet.cssText=f:a.appendChild(document.createTextNode(f))},f:function(a){var c=document.getElementById(b.a.c),d=document.getElementsByTagName("head")[0];c&&d.removeChild(c);d.appendChild(a)},d:function(){var a={height:g.documentElement.clientHeight,width:g.documentElement.clientWidth};return b.b=a},i:function(){var a=b.g();b.k(a);b.f(a)}};b.j()})(window,document);

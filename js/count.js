function countUp(a){var b=100,c=Math.round(a/b),d=$(".count"),e=1,f=24,g=setInterval(function(){if(e<b)d.text(c*e),e++;else if(parseInt(d.text())<a){var f=parseInt(d.text())+1;d.text(f)}else clearInterval(g)},f)}function countUp2(a){var b=100,c=Math.round(a/b),d=$(".count2"),e=1,f=24,g=setInterval(function(){if(e<b)d.text(c*e),e++;else if(parseInt(d.text())<a){var f=parseInt(d.text())+1;d.text(f)}else clearInterval(g)},f)}function countUp3(a){var b=100,c=Math.round(a/b),d=$(".count3"),e=1,f=24,g=setInterval(function(){if(e<b)d.text(c*e),e++;else if(parseInt(d.text())<a){var f=parseInt(d.text())+1;d.text(f)}else clearInterval(g)},f)}function countUp4(a){var b=100,c=Math.round(a/b),d=$(".count4"),e=1,f=24,g=setInterval(function(){if(e<b)d.text(c*e),e++;else if(parseInt(d.text())<a){var f=parseInt(d.text())+1;d.text(f)}else clearInterval(g)},f)}countUp(200),countUp2(947),countUp3(328),countUp4(10328);
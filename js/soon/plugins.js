!function(a){a.queryLoader2=function(b,c){var d=this;d.$el=a(b),d.el=b,d.$el.data("queryLoader2",d),d.qLimageContainer="",d.qLoverlay="",d.qLbar="",d.qLpercentage="",d.qLimages=[],d.qLbgimages=[],d.qLimageCounter=0,d.qLdone=0,d.qLdestroyed=!1,d.init=function(){d.options=a.extend({},a.queryLoader2.defaultOptions,c),d.findImageInElement(d.el),1==d.options.deepSearch&&d.$el.find("*:not(script)").each(function(){d.findImageInElement(this)}),d.createPreloadContainer(),d.createOverlayLoader()},d.createPreloadContainer=function(){d.qLimageContainer=a("<div></div>").appendTo("body").css({display:"none",width:0,height:0,overflow:"hidden"});for(var b=0;d.qLbgimages.length>b;b++)a.ajax({url:d.qLbgimages[b],type:"HEAD",complete:function(){d.qLdestroyed||d.addImageForPreload(this.url)}})},d.addImageForPreload=function(b){var c=a("<img />").attr("src",b);d.bindLoadEvent(c),c.appendTo(d.qLimageContainer)},d.createOverlayLoader=function(){var b="absolute";"BODY"==d.$el.prop("tagName")?b="fixed":d.$el.css("position","relative"),d.qLoverlay=a("<div id='"+d.options.overlayId+"'></div>").css({width:"100%",height:"100%",backgroundColor:d.options.backgroundColor,backgroundPosition:"fixed",position:b,zIndex:666999,top:0,left:0}).appendTo(d.$el),d.qLbar=a("<div id='qLbar'></div>").css({height:d.options.barHeight+"px",marginTop:"-"+d.options.barHeight/2+"px",backgroundColor:d.options.barColor,width:"0%",position:"absolute",top:"50%"}).appendTo(d.qLoverlay),1==d.options.percentage&&(d.qLpercentage=a("<div id='qLpercentage'></div>").text("0%").css({height:"40px",width:"100px",position:"absolute",fontSize:"3em",top:"50%",left:"50%",marginTop:"-"+(59+d.options.barHeight)+"px",textAlign:"center",marginLeft:"-50px",color:d.options.barColor}).appendTo(d.qLoverlay)),d.qLimages.length||d.destroyContainers()},d.destroyContainers=function(){d.qLdestroyed=!0,d.qLimageContainer.remove(),d.qLoverlay.remove()},d.findImageInElement=function(b){var c="",e=a(b),f="normal";if("none"!=e.css("background-image")?(c=e.css("background-image"),f="background"):"undefined"!=typeof e.attr("src")&&"img"==b.nodeName.toLowerCase()&&(c=e.attr("src")),-1==c.indexOf("gradient")){c=c.replace(/url\(\"/g,""),c=c.replace(/url\(/g,""),c=c.replace(/\"\)/g,""),c=c.replace(/\)/g,"");for(var g=c.split(", "),h=0;h<g.length;h++)if(g[h].length>0&&-1==d.qLimages.indexOf(g[h])&&!g[h].match(/^(data:)/i)){var i="";d.isIE()||d.isOpera()?(i="?rand="+Math.random(),d.qLbgimages.push(g[h]+i)):"background"==f?d.qLbgimages.push(g[h]):d.bindLoadEvent(e),d.qLimages.push(g[h])}}},d.isIE=function(){return navigator.userAgent.match(/msie/i)},d.isOpera=function(){return navigator.userAgent.match(/Opera/i)},d.bindLoadEvent=function(a){d.qLimageCounter++,a.bind("load error",function(){d.completeImageLoading(this)})},d.completeImageLoading=function(){d.qLdone++;var b=d.qLdone/d.qLimageCounter*100;d.qLbar.stop().animate({width:b+"%",minWidth:b+"%"},200),1==d.options.percentage&&d.qLpercentage.text(Math.ceil(b)+"%"),d.qLdone==d.qLimageCounter&&d.endLoader()},d.endLoader=function(){d.qLdestroyed=!0,d.onLoadComplete()},d.onLoadComplete=function(){if("grow"==d.options.completeAnimation){var b=500;d.qLbar.stop().animate({width:"100%"},b,function(){a(this).animate({top:"0%",width:"100%",height:"100%"},500,function(){a("#"+d.options.overlayId).fadeOut(500,function(){a(this).remove(),d.destroyContainers(),d.options.onComplete()})})})}else a("#"+d.options.overlayId).fadeOut(500,function(){a("#"+d.options.overlayId).remove(),d.destroyContainers(),d.options.onComplete()})},d.init()},a.queryLoader2.defaultOptions={onComplete:function(){},backgroundColor:"#000",barColor:"#fff",overlayId:"qLoverlay",barHeight:1,percentage:!1,deepSearch:!0,completeAnimation:"fade",minimumTime:500},a.fn.queryLoader2=function(b){return this.each(function(){new a.queryLoader2(this,b)})}}(jQuery),Array.prototype.indexOf||(Array.prototype.indexOf=function(a){var b=this.length>>>0,c=Number(arguments[1])||0;for(c=c<0?Math.ceil(c):Math.floor(c),c<0&&(c+=b);c<b;c++)if(c in this&&this[c]===a)return c;return-1}),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focus",i="hover"==g?"mouseleave":"blur";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this.tip();this.setContent(),this.options.animation&&c.addClass("fade");var d="function"==typeof this.options.placement?this.options.placement.call(this,c[0],this.$element[0]):this.options.placement,e=/\s?auto?\s?/i,f=e.test(d);f&&(d=d.replace(e,"")||"top"),c.detach().css({top:0,left:0,display:"block"}).addClass(d),this.options.container?c.appendTo(this.options.container):c.insertAfter(this.$element);var g=this.getPosition(),h=c[0].offsetWidth,i=c[0].offsetHeight;if(f){var j=this.$element.parent(),k=d,l=document.documentElement.scrollTop||document.body.scrollTop,m="body"==this.options.container?window.innerWidth:j.outerWidth(),n="body"==this.options.container?window.innerHeight:j.outerHeight(),o="body"==this.options.container?0:j.offset().left;d="bottom"==d&&g.top+g.height+i-l>n?"top":"top"==d&&g.top-l-i<0?"bottom":"right"==d&&g.right+h>m?"left":"left"==d&&g.left-h<o?"right":d,c.removeClass(k).addClass(d)}var p=this.getCalculatedOffset(d,g,h,i);this.applyPlacement(p,d),this.$element.trigger("shown.bs."+this.type)}},b.prototype.applyPlacement=function(a,b){var c,d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),a.top=a.top+g,a.left=a.left+h,d.offset(a).addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;if("top"==b&&j!=f&&(c=!0,a.top=a.top+f-j),/bottom|top/.test(b)){var k=0;a.left<0&&(k=-2*a.left,a.left=0,d.offset(a),i=d[0].offsetWidth,j=d[0].offsetHeight),this.replaceArrow(k-e+i,i,"left")}else this.replaceArrow(j-f,j,"top");c&&d.offset(a)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function e(){"in"!=b.hoverState&&c.detach()}var b=this,c=this.tip(),d=a.Event("hide.bs."+this.type);return this.$element.trigger(d),d.isDefaultPrevented()?void 0:(c.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?c.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),this.$element.trigger("hidden.bs."+this.type),this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(window.jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function f(){e.trigger("closed.bs.alert").remove()}var c=a(this),d=c.attr("data-target");d||(d=c.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,""));var e=a(d);b&&b.preventDefault(),e.length||(e=c.hasClass("alert")?c:c.parent()),e.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(e.removeClass("in"),a.support.transition&&e.hasClass("fade")?e.one(a.support.transition.end,f).emulateTransitionEnd(150):f())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(window.jQuery),function(a){function h(){d=!1;for(var c=0;c<b.length;c++){var e=a(b[c]).filter(function(){return a(this).is(":appeared")});if(e.trigger("appear",[e]),g){var f=g.not(e);f.trigger("disappear",[f])}g=e}}var g,b=[],c=!1,d=!1,e={interval:250,force_process:!1},f=a(window);a.expr[":"].appeared=function(b){var c=a(b);if(!c.is(":visible"))return!1;var d=f.scrollLeft(),e=f.scrollTop(),g=c.offset(),h=g.left,i=g.top;return i+c.height()>=e&&i-(c.data("appear-top-offset")||0)<=e+f.height()&&h+c.width()>=d&&h-(c.data("appear-left-offset")||0)<=d+f.width()?!0:!1},a.fn.extend({appear:function(f){var g=a.extend({},e,f||{}),i=this.selector||this;if(!c){var j=function(){d||(d=!0,setTimeout(h,g.interval))};a(window).scroll(j).resize(j),c=!0}return g.force_process&&setTimeout(h,g.interval),b.push(i),a(i)}}),a.extend({force_appear:function(){return c?(h(),!0):!1}})}(jQuery);
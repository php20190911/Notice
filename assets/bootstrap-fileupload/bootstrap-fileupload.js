!function(a){"use strict";var b=function(b,c){if(this.$element=a(b),this.type=this.$element.data("uploadtype")||(this.$element.find(".thumbnail").length>0?"image":"file"),this.$input=this.$element.find(":file"),0!==this.$input.length){this.name=this.$input.attr("name")||c.name,this.$hidden=this.$element.find('input[type=hidden][name="'+this.name+'"]'),0===this.$hidden.length&&(this.$hidden=a('<input type="hidden" />'),this.$element.prepend(this.$hidden)),this.$preview=this.$element.find(".fileupload-preview");var d=this.$preview.css("height");"inline"!=this.$preview.css("display")&&"0px"!=d&&"none"!=d&&this.$preview.css("line-height",d),this.original={exists:this.$element.hasClass("fileupload-exists"),preview:this.$preview.html(),hiddenVal:this.$hidden.val()},this.$remove=this.$element.find('[data-dismiss="fileupload"]'),this.$element.find('[data-trigger="fileupload"]').on("click.fileupload",a.proxy(this.trigger,this)),this.listen()}};b.prototype={listen:function(){this.$input.on("change.fileupload",a.proxy(this.change,this)),a(this.$input[0].form).on("reset.fileupload",a.proxy(this.reset,this)),this.$remove&&this.$remove.on("click.fileupload",a.proxy(this.clear,this))},change:function(a,b){var c=void 0!==a.target.files?a.target.files[0]:a.target.value?{name:a.target.value.replace(/^.+\\/,"")}:null;if("clear"!==b){if(!c)return void this.clear();if(this.$hidden.val(""),this.$hidden.attr("name",""),this.$input.attr("name",this.name),"image"===this.type&&this.$preview.length>0&&("undefined"!==typeof c.type?c.type.match("image.*"):c.name.match("\\.(gif|png|jpe?g)$"))&&"undefined"!==typeof FileReader){var d=new FileReader,e=this.$preview,f=this.$element;d.onload=function(a){e.html('<img src="'+a.target.result+'" '+("none"!=e.css("max-height")?'style="max-height: '+e.css("max-height")+';"':"")+" />"),f.addClass("fileupload-exists").removeClass("fileupload-new")},d.readAsDataURL(c)}else this.$preview.text(c.name),this.$element.addClass("fileupload-exists").removeClass("fileupload-new")}},clear:function(b){if(this.$hidden.val(""),this.$hidden.attr("name",this.name),this.$input.attr("name",""),a.browser.msie){var c=this.$input.clone(!0);this.$input.after(c),this.$input.remove(),this.$input=c}else this.$input.val("");this.$preview.html(""),this.$element.addClass("fileupload-new").removeClass("fileupload-exists"),b&&(this.$input.trigger("change",["clear"]),b.preventDefault())},reset:function(){this.clear(),this.$hidden.val(this.original.hiddenVal),this.$preview.html(this.original.preview),this.original.exists?this.$element.addClass("fileupload-exists").removeClass("fileupload-new"):this.$element.addClass("fileupload-new").removeClass("fileupload-exists")},trigger:function(a){this.$input.trigger("click"),a.preventDefault()}},a.fn.fileupload=function(c){return this.each(function(){var d=a(this),e=d.data("fileupload");e||d.data("fileupload",e=new b(this,c)),"string"==typeof c&&e[c]()})},a.fn.fileupload.Constructor=b,a(function(){a("body").on("click.fileupload.data-api",'[data-provides="fileupload"]',function(b){var c=a(this);if(!c.data("fileupload")){c.fileupload(c.data());var d=a(b.target).is("[data-dismiss=fileupload],[data-trigger=fileupload]")?a(b.target):a(b.target).parents("[data-dismiss=fileupload],[data-trigger=fileupload]").first();d.length>0&&(d.trigger("click.fileupload"),b.preventDefault())}})})}(window.jQuery);
!function(e,i){"function"==typeof define&&define.amd?define(["jquery"],i):i(jQuery)}(this,function(e){var i={prefix:"imagelistexpander-"},n=function(){var e=null;return function(i){e&&clearTimeout(e),e=setTimeout(i,500)}}(),t=function(t,r){var f=e.extend({},i,r),c=e(t),s=c.find("."+f.prefix+"item"),a=c.find("."+f.prefix+"trigger"),o=c.find("."+f.prefix+"trigger-close"),d=function(){e(window).bind("resize",u),a.bind("click",h),o.bind("click",x)},u=function(){n(function(){s.filter(".active").each(function(){var i=e(this),n=i.find("."+f.prefix+"expander-contents"),t=i.find("."+f.prefix+"expander"),r=n.outerHeight();i.css("height",i.find("."+f.prefix+"contents").outerHeight()+r),t.css("max-height",r)})})},h=function(){var i=e(this).parents("."+f.prefix+"item");i.hasClass("active")?g(i):p(i)},x=function(){g(s)},p=function(e){g(e.siblings());var i=e.find("."+f.prefix+"expander-contents"),n=e.find("."+f.prefix+"expander"),t=i.outerHeight();e.addClass("active").css("height",e.find("."+f.prefix+"contents").outerHeight()+t),n.css("max-height",t)},g=function(i){i=i.filter(".active");var n=i.find("."+f.prefix+"expander");i.each(function(){var i=e(this);i.css("height",i.find("."+f.prefix+"contents").outerHeight())}),i.removeClass("active"),n.css("max-height",0)};d()};return e.fn.imagelistexpander=function(i){e(this).each(function(){t(this,i||{})})},e});
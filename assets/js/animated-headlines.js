jQuery(document).ready(function(s){function e(){a(s(".cd-headline.letters").find("b")),n(s(".cd-headline"))}function a(e){e.each(function(){var e=s(this),a=e.text().split(""),n=e.hasClass("is-visible");for(i in a)e.parents(".rotate-2").length>0&&(a[i]="<em>"+a[i]+"</em>"),a[i]=n?'<i class="in">'+a[i]+"</i>":"<i>"+a[i]+"</i>";var t=a.join("");e.html(t).css("opacity",1)})}function n(i){var e=h;i.each(function(){var i=s(this);if(i.hasClass("loading-bar"))e=p,setTimeout(function(){i.find(".cd-words-wrapper").addClass("is-loading")},f);else if(i.hasClass("clip")){var a=i.find(".cd-words-wrapper"),n=a.width()+10;a.css("width",n)}else if(!i.hasClass("type")){var d=i.find(".cd-words-wrapper b"),r=0;d.each(function(){var i=s(this).width();i>r&&(r=i)}),i.find(".cd-words-wrapper").css("width",r+60)}setTimeout(function(){t(i.find(".is-visible").eq(0))},e)})}function t(s){var i=o(s);if(s.parents(".cd-headline").hasClass("type")){var e=s.parent(".cd-words-wrapper");e.addClass("selected").removeClass("waiting"),setTimeout(function(){e.removeClass("selected"),s.removeClass("is-visible").addClass("is-hidden").children("i").removeClass("in").addClass("out")},C),setTimeout(function(){d(i,w)},m)}else if(s.parents(".cd-headline").hasClass("letters")){var a=s.children("i").length>=i.children("i").length;r(s.find("i").eq(0),s,a,u),l(i.find("i").eq(0),i,a,u)}else s.parents(".cd-headline").hasClass("clip")?s.parents(".cd-words-wrapper").animate({width:"2px"},v,function(){c(s,i),d(i)}):s.parents(".cd-headline").hasClass("loading-bar")?(s.parents(".cd-words-wrapper").removeClass("is-loading"),c(s,i),setTimeout(function(){t(i)},p),setTimeout(function(){s.parents(".cd-words-wrapper").addClass("is-loading")},f)):(c(s,i),setTimeout(function(){t(i)},h))}function d(s,i){s.parents(".cd-headline").hasClass("type")?(l(s.find("i").eq(0),s,!1,i),s.addClass("is-visible").removeClass("is-hidden")):s.parents(".cd-headline").hasClass("clip")&&s.parents(".cd-words-wrapper").animate({width:s.width()+10},v,function(){setTimeout(function(){t(s)},T)})}function r(i,e,a,n){if(i.removeClass("in").addClass("out"),i.is(":last-child")?a&&setTimeout(function(){t(o(e))},h):setTimeout(function(){r(i.next(),e,a,n)},n),i.is(":last-child")&&s("html").hasClass("no-csstransitions")){var d=o(e);c(e,d)}}function l(s,i,e,a){s.addClass("in").removeClass("out"),s.is(":last-child")?(i.parents(".cd-headline").hasClass("type")&&setTimeout(function(){i.parents(".cd-words-wrapper").addClass("waiting")},200),e||setTimeout(function(){t(i)},h)):setTimeout(function(){l(s.next(),i,e,a)},a)}function o(s){return s.is(":last-child")?s.parent().children().eq(0):s.next()}function c(s,i){s.removeClass("is-visible").addClass("is-hidden"),i.removeClass("is-hidden").addClass("is-visible")}var h=3e3,p=3800,f=p-3e3,u=70,w=150,C=500,m=C+800,v=600,T=1500;e(),s(window).resize(function(){if(headline=s(".cd-headline"),!headline.hasClass("type")){var i=headline.find(".cd-words-wrapper b"),e=0;i.each(function(){var i=s(this).width();i>e&&(e=i)}),headline.find(".cd-words-wrapper").css("width",e)}})});
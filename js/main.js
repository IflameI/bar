$(document).ready((function(){$(window).outerWidth(),$(window).outerHeight();var t=window.navigator.userAgent,e=(t.indexOf("MSIE "),{Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return e.Android()||e.BlackBerry()||e.iOS()||e.Opera()||e.Windows()}});function s(){return(t=navigator.userAgent).indexOf("MSIE ")>-1||t.indexOf("Trident/")>-1}function i(t){var e=0,s=t.parents("form");if("email"==t.attr("name")||t.hasClass("email")){if(t.val()!=t.attr("data-value")){var i=t.val().replace(" ","");t.val(i)}/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(t.val())&&t.val()!=t.attr("data-value")?l(t):(e++,a(t))}else""==t.val()||t.val()==t.attr("data-value")?(e++,a(t)):l(t);return"checkbox"==t.attr("type")&&(1==t.prop("checked")?t.removeClass("err").parent().removeClass("err"):(e++,t.addClass("err").parent().addClass("err"))),t.hasClass("name")&&(/^[А-Яа-яa-zA-Z-]+( [А-Яа-яa-zA-Z-]+)$/.test(t.val())||(e++,a(t))),t.hasClass("pass-2")&&(s.find(".pass-1").val()!=s.find(".pass-2").val()?a(t):l(t)),e}function a(t){if(t.addClass("err"),t.parent().addClass("err"),t.parent().find(".form__error").remove(),t.hasClass("email")){var e="";null!=(e=(""==t.val()||(t.val(),t.attr("data-value")),t.data("error")))&&t.parent().append('<div class="form__error">'+e+"</div>")}else null!=t.data("error")&&0==t.parent().find(".form__error").length&&t.parent().append('<div class="form__error">'+t.data("error")+"</div>");t.parents(".select-block").length>0&&(t.parents(".select-block").parent().addClass("err"),t.parents(".select-block").find(".select").addClass("err"))}function l(t){t.removeClass("err"),t.parent().removeClass("err"),t.parent().find(".form__error").remove(),t.parents(".select-block").length>0&&(t.parents(".select-block").parent().removeClass("err"),t.parents(".select-block").find(".select").removeClass("err").removeClass("active"))}function n(t){""==t.val()&&(t.inputmask("remove"),t.hasClass("l")||t.val(t.attr("data-value")),t.removeClass("focus"),t.parent().removeClass("focus"))}function o(){$.each($('.select[data-type="search"]'),(function(t,e){var s=$(this).parent(),i=$(this).parent().find("select");1==$(this).find(".select-options__value:visible").length?($(this).addClass("focus"),$(this).parents(".select-block").find("select").val($(".select-options__value:visible").data("value")),$(this).find(".select-title__value").val($(".select-options__value:visible").html()),$(this).find(".select-title__value").attr("data-value",$(".select-options__value:visible").html())):""==i.val()&&($(this).removeClass("focus"),s.find("input.select-title__value").val(i.find('option[selected="selected"]').html()),s.find("input.select-title__value").attr("data-value",i.find('option[selected="selected"]').html()))}))}if(s()&&$("body").addClass("ie"),e.any()&&$("body").addClass("touch"),function(){if($("select").length>0){function t(){$.each($("select"),(function(t,s){var i=t;$(this).hide(),0==$(this).parent(".select-block").length?$(this).wrap("<div class='select-block "+$(this).attr("class")+"-select-block'></div>"):$(this).parent(".select-block").find(".select").remove();var a,l,n="",o="",r=$(this).parent(".select-block"),c="<div class='select-options'><div class='select-options-scroll'><div class='select-options-list'>";"multiple"==$(this).attr("multiple")&&(n="multiple",o="check"),$.each($(this).find("option"),(function(t,e){if(""!=$(this).attr("class")&&null!=$(this).attr("class")){$(this).attr("class")}""!=$(this).attr("value")?c=""!=$(this).attr("data-icon")&&null!=$(this).attr("data-icon")?c+"<div data-value='"+$(this).attr("value")+"' class='select-options__value_"+i+" select-options__value value_"+$(this).val()+"  "+o+"'><div><img src="+$(this).attr("data-icon")+' alt=""></div><div>'+$(this).html()+"</div></div>":c+"<div data-value='"+$(this).attr("value")+"' class='select-options__value_"+i+" select-options__value value_"+$(this).val()+"  "+o+"'>"+$(this).html()+"</div>":"on"==$(this).parent().attr("data-label")&&0==r.find(".select__label").length&&r.prepend('<div class="select__label">'+$(this).html()+"</div>")})),c+="</div></div></div>","search"==$(this).attr("data-type")?(r.append("<div data-type='search' class='select_"+i+" select "+$(this).attr("class")+"__select "+n+"'><div class='select-title'><div class='select-title__arrow ion-ios-arrow-down'></div><input data-value='"+$(this).find('option[selected="selected"]').html()+"' class='select-title__value value_"+$(this).find('option[selected="selected"]').val()+"' /></div>"+c+"</div>"),$(".select_"+i).find("input.select-title__value").jcOnPageFilter({parentSectionClass:"select-options_"+i,parentLookupClass:"select-options__value_"+i,childBlockClass:"select-options__value_"+i})):"true"==$(this).attr("data-icon")?r.append("<div class='select_"+i+" select "+$(this).attr("class")+"__select icon "+n+"'><div class='select-title'><div class='select-title__arrow ion-ios-arrow-down'></div><div class='select-title__value value_"+$(this).find('option[selected="selected"]').val()+"'><div><img src="+$(this).find('option[selected="selected"]').attr("data-icon")+' alt=""></div><div>'+$(this).find('option[selected="selected"]').html()+"</div></div></div>"+c+"</div>"):r.append("<div class='select_"+i+" select "+$(this).attr("class")+"__select "+n+"'><div class='select-title'><div class='select-title__arrow ion-ios-arrow-down'></div><div class='select-title__value value_"+$(this).find('option[selected="selected"]').val()+"'>"+$(this).find('option[selected="selected"]').html()+"</div></div>"+c+"</div>"),""!=$(this).find('option[selected="selected"]').val()&&r.find(".select").addClass("focus"),1==r.find(".select-options__value").length&&r.find(".select").addClass("one"),"on"==$(this).attr("data-req")&&$(this).addClass("req"),$(".select_"+i+" .select-options-scroll").niceScroll(".select-options-list",(a=100,l=50,e.any()&&(a=10,l=1),{cursorcolor:"#9B4E7C",cursorwidth:"12px",background:"",autohidemode:!1,bouncescroll:!1,cursorborderradius:"10px",scrollspeed:a,mousescrollstep:l,directionlockdeadzone:0,cursorborder:"0px solid #fff"}))}))}t(),$("body").on("keyup","input.select-title__value",(function(){$(".select").not($(this).parents(".select")).removeClass("active").find(".select-options").slideUp(50),$(this).parents(".select").addClass("active"),$(this).parents(".select").find(".select-options").slideDown(50,(function(){$(this).find(".select-options-scroll").getNiceScroll().resize()})),$(this).parents(".select-block").find("select").val("")})),$("body").on("click",".select",(function(){if(!$(this).hasClass("disabled")&&!$(this).hasClass("one")){$(".select").not(this).removeClass("active").find(".select-options").slideUp(50),$(this).toggleClass("active"),$(this).find(".select-options").slideToggle(50,(function(){$(this).find(".select-options-scroll").getNiceScroll().resize()})),"search"==$(this).attr("data-type")&&($(this).hasClass("active")||o(),$(this).find(".select-options__value").show());var t=$.trim($(this).find(".select-title__value").attr("class").replace("select-title__value",""));$(this).find(".select-options__value").show().removeClass("hide").removeClass("last"),""!=t&&$(this).find(".select-options__value."+t).hide().addClass("hide"),$(this).find(".select-options__value").last().hasClass("hide")&&$(this).find(".select-options__value").last().prev().addClass("last")}})),$("body").on("click",".select-options__value",(function(){if($(this).parents(".select").hasClass("multiple"))return $(this).hasClass("active")?($(this).parents(".select").find(".select-title__value span").length>0?$(this).parents(".select").find(".select-title__value").append('<span data-value="'+$(this).data("value")+'">, '+$(this).html()+"</span>"):($(this).parents(".select").find(".select-title__value").data("label",$(this).parents(".select").find(".select-title__value").html()),$(this).parents(".select").find(".select-title__value").html('<span data-value="'+$(this).data("value")+'">'+$(this).html()+"</span>")),$(this).parents(".select-block").find("select").find("option").eq($(this).index()+1).prop("selected",!0),$(this).parents(".select").addClass("focus")):($(this).parents(".select").find(".select-title__value").find('span[data-value="'+$(this).data("value")+'"]').remove(),0==$(this).parents(".select").find(".select-title__value span").length&&($(this).parents(".select").find(".select-title__value").html($(this).parents(".select").find(".select-title__value").data("label")),$(this).parents(".select").removeClass("focus")),$(this).parents(".select-block").find("select").find("option").eq($(this).index()+1).prop("selected",!1)),!1;"search"==$(this).parents(".select").attr("data-type")?($(this).parents(".select").find(".select-title__value").val($(this).html()),$(this).parents(".select").find(".select-title__value").attr("data-value",$(this).html())):($(this).parents(".select").find(".select-title__value").attr("class","select-title__value value_"+$(this).data("value")),$(this).parents(".select").find(".select-title__value").html($(this).html())),$(this).parents(".select-block").find("select").find("option").removeAttr("selected"),""!=$.trim($(this).data("value"))?($(this).parents(".select-block").find("select").val($(this).data("value")),$(this).parents(".select-block").find("select").find('option[value="'+$(this).data("value")+'"]').attr("selected","selected")):($(this).parents(".select-block").find("select").val($(this).html()),$(this).parents(".select-block").find("select").find('option[value="'+$(this).html()+'"]').attr("selected","selected")),""!=$(this).parents(".select-block").find("select").val()?$(this).parents(".select-block").find(".select").addClass("focus"):($(this).parents(".select-block").find(".select").removeClass("focus"),$(this).parents(".select-block").find(".select").removeClass("err"),$(this).parents(".select-block").parent().removeClass("err"),$(this).parents(".select-block").removeClass("err").find(".form__error").remove()),""!=!$(this).parents(".select").data("tags")&&0==$(this).parents(".form-tags").find('.form-tags__item[data-value="'+$(this).data("value")+'"]').length&&$(this).parents(".form-tags").find(".form-tags-items").append('<a data-value="'+$(this).data("value")+'" href="" class="form-tags__item">'+$(this).html()+'<span class="fa fa-times"></span></a>'),$(this).parents(".select-block").find("select").change(),"on"==$(this).parents(".select-block").find("select").data("update")&&t()})),$(document).on("click touchstart",(function(t){$(t.target).is(".select *")||$(t.target).is(".select")||($(".select").removeClass("active"),$(".select-options").slideUp(50,(function(){})),o())})),$(document).on("keydown",(function(t){27==t.which&&($(".select").removeClass("active"),$(".select-options").slideUp(50,(function(){})),o())}))}function s(t,e){t.find(".rating__activeline").css({width:e+"%"})}$("input,textarea").focus((function(){$(this).val()==$(this).attr("data-value")&&($(this).addClass("focus"),$(this).parent().addClass("focus"),"pass"==$(this).attr("data-type")&&$(this).attr("type","password"),$(this).val("")),l($(this))})),$("input[data-value], textarea[data-value]").each((function(){""!=this.value&&this.value!=$(this).attr("data-value")||($(this).hasClass("l")&&0==$(this).parent().find(".form__label").length?$(this).parent().append('<div class="form__label">'+$(this).attr("data-value")+"</div>"):this.value=$(this).attr("data-value")),this.value!=$(this).attr("data-value")&&""!=this.value&&($(this).addClass("focus"),$(this).parent().addClass("focus"),$(this).hasClass("l")&&0==$(this).parent().find(".form__label").length&&$(this).parent().append('<div class="form__label">'+$(this).attr("data-value")+"</div>")),$(this).click((function(){this.value==$(this).attr("data-value")&&("pass"==$(this).attr("data-type")&&$(this).attr("type","password"),this.value="")})),$(this).blur((function(){""==this.value&&($(this).hasClass("l")||(this.value=$(this).attr("data-value")),$(this).removeClass("focus"),$(this).parent().removeClass("focus"),"pass"==$(this).attr("data-type")&&$(this).attr("type","text")),$(this).hasClass("vn")&&i($(this))}))})),$(".form-input__viewpass").click((function(t){$(this).hasClass("active")?$(this).parent().find("input").attr("type","password"):$(this).parent().find("input").attr("type","text"),$(this).toggleClass("active")})),$.each($("input.phone"),(function(t,e){$(this).attr("type","tel"),$(this).focus((function(){$(this).inputmask("+7(999) 999 9999",{clearIncomplete:!0,clearMaskOnLostFocus:!0,onincomplete:function(){n($(this))}}),$(this).addClass("focus"),$(this).parent().addClass("focus"),$(this).parent().removeClass("err"),$(this).removeClass("err")}))})),$("input.phone").focusout((function(t){n($(this))})),$.each($("input.num"),(function(t,e){$(this).focus((function(){$(this).inputmask("9{1,1000}",{clearIncomplete:!0,placeholder:"",clearMaskOnLostFocus:!0,onincomplete:function(){n($(this))}}),$(this).addClass("focus"),$(this).parent().addClass("focus"),$(this).parent().removeClass("err"),$(this).removeClass("err")}))})),$("input.num").focusout((function(t){n($(this))})),$.each($(".check"),(function(t,e){1==$(this).find("input").prop("checked")&&$(this).addClass("active")})),$("body").off("click",".check",(function(t){})),$("body").on("click",".check",(function(t){$(this).hasClass("disable")||($(t.target).is("a")||($(this).toggleClass("active"),$(this).hasClass("active")?$(this).find("input").prop("checked",!0):$(this).find("input").prop("checked",!1)))})),$.each($(".option.active"),(function(t,e){$(this).find("input").prop("checked",!0)})),$(".option").click((function(t){$(this).hasClass("disable")||($(t.target).is("a")||($(this).hasClass("active")&&$(this).hasClass("order")&&$(this).toggleClass("orderactive"),$(this).parents(".options").find(".option").removeClass("active"),$(this).toggleClass("active"),$(this).children("input").prop("checked",!0)))})),$(".rating.edit .star").hover((function(){var t=$(this).parents(".rating");t.find(".rating__activeline").css({width:"0%"});var e=($(this).index()+1)/t.find(".star").length*100;s(t,e)}),(function(){var t=$(this).parents(".rating");t.find(".star").removeClass("active");var e=t.find("input").val()/t.find(".star").length*100;s(t,e)})),$(".rating.edit .star").click((function(t){var e=$(this).parents(".rating"),i=$(this).index()+1;e.find("input").val(i);var a=i/e.find(".star").length*100;s(e,a)})),$.each($(".rating"),(function(t,e){var i=$(this).find("input").val()/$(this).parent().find(".star").length*100;s($(this),i)})),$(".quantity__btn").click((function(t){var e=parseInt($(this).parent().find(".quantity__input").val());return $(this).hasClass("dwn")?(e-=1)<1&&(e=1):e+=1,$(this).parent().find(".quantity__input").val(e),!1})),$("#range").length>0&&($("#range").slider({range:!0,min:0,max:5e3,values:[0,5e3],slide:function(t,e){$("#rangefrom").val(e.values[0]),$("#rangeto").val(e.values[1]),$(this).find(".ui-slider-handle").eq(0).html("<span>"+e.values[0]+"</span>"),$(this).find(".ui-slider-handle").eq(1).html("<span>"+e.values[1]+"</span>")},change:function(t,e){e.values[0]!=$("#range").slider("option","min")||e.values[1]!=$("#range").slider("option","max")?$("#range").addClass("act"):$("#range").removeClass("act")}}),$("#rangefrom").val($("#range").slider("values",0)),$("#rangeto").val($("#range").slider("values",1)),$("#range").find(".ui-slider-handle").eq(0).html("<span>"+$("#range").slider("option","min")+"</span>"),$("#range").find(".ui-slider-handle").eq(1).html("<span>"+$("#range").slider("option","max")+"</span>"),$("#rangefrom").bind("change",(function(){1*$(this).val()>1*$("#range").slider("option","max")&&$(this).val($("#range").slider("option","max")),1*$(this).val()<1*$("#range").slider("option","min")&&$(this).val($("#range").slider("option","min")),$("#range").slider("values",0,$(this).val())})),$("#rangeto").bind("change",(function(){1*$(this).val()>1*$("#range").slider("option","max")&&$(this).val($("#range").slider("option","max")),1*$(this).val()<1*$("#range").slider("option","min")&&$(this).val($("#range").slider("option","min")),$("#range").slider("values",1,$(this).val())})),$("#range").find(".ui-slider-handle").eq(0).addClass("left"),$("#range").find(".ui-slider-handle").eq(1).addClass("right")),$(".form-addfile__input").change((function(t){if(""!=$(this).val()){var e=$(this);e.parents(".form-addfile").find("ul.form-addfile-list").html(""),$.each(t.target.files,(function(s,i){0==e.parents(".form-addfile").find('ul.form-addfile-list>li:contains("'+t.target.files[s].name+'")').length&&e.parents(".form-addfile").find("ul.form-addfile-list").append("<li>"+t.target.files[s].name+"</li>")}))}}))}(),$("form button[type=submit]").click((function(){var t=0,e=$(this).parents("form"),s=e.data("ms");return $.each(e.find(".req"),(function(e,s){t+=i($(this))})),0==t&&(function(t){t.find(".form__generalerror").hide().html("")}(e),null!=s&&""!=s?(function(t){$(".popup").hide(),u("message."+t,"")}(s),!1):void 0)})),(e={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return e.Android()||e.BlackBerry()||e.iOS()||e.Opera()||e.Windows()}}).any(),location.hash){var r=location.hash.replace("#","");$(".popup-"+r).length>0?u(r):$("div."+r).length>0&&$("body,html").animate({scrollTop:$("div."+r).offset().top},500,(function(){}))}$(".wrapper").addClass("loaded");if(e.iOS());let c=document.querySelector(".icon-menu"),d=document.querySelector("body"),h=document.querySelector(".menu__body");function u(t,s){$(".popup").removeClass("active").hide(),$(".menu__body").hasClass("active"),e.any()?setTimeout((function(){$("body").addClass("lock")}),300):($("body").css({paddingRight:$(window).outerWidth()-$(".wrapper").outerWidth()}).addClass("lock"),$(".pdb").css({paddingRight:$(window).outerWidth()-$(".wrapper").outerWidth()})),history.pushState("","","#"+t),""!=s&&null!=s&&$(".popup-"+t+" .popup-video__value").html('<iframe src="https://www.youtube.com/embed/'+s+'?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>'),$(".popup-"+t).fadeIn(300).delay(300).addClass("active"),$(".popup-"+t).find(".slick-slider").length>0&&$(".popup-"+t).find(".slick-slider").slick("setPosition")}function p(){$(".popup").removeClass("active").fadeOut(300),$(".menu__body").hasClass("active")||(e.any()?$("body").removeClass("lock"):(setTimeout((function(){$("body").css({paddingRight:0}),$(".pdb").css({paddingRight:0})}),200),setTimeout((function(){$("body").removeClass("lock")}),200))),$(".popup-video__value").html(""),history.pushState("","",window.location.href.split("#")[0])}var v,f,m;c&&c.addEventListener("click",(function(){c.classList.toggle("active"),d.classList.toggle("lock"),h.classList.toggle("active")})),$(".gallery").length>0&&baguetteBox.run(".gallery",{}),$(".pl").click((function(t){return u($(this).attr("href").replace("#",""),$(this).data("vid")),!1})),$(".popup-close,.popup__close").click((function(t){return p(),!1})),$(".popup").click((function(t){if(!$(t.target).is(".popup>.popup-table>.cell *")||$(t.target).is(".popup-close")||$(t.target).is(".popup__close"))return p(),!1})),$(document).on("keydown",(function(t){27==t.which&&p()})),$(".goto").click((function(){var t=$(this).attr("href").replace("#","");return $("body,html").animate({scrollTop:$("."+t).offset().top+0},500,(function(){})),$(".menu__body").hasClass("active")&&($(".menu__body,.icon-menu").removeClass("active"),$("body").removeClass("lock")),!1})),function(){if(s()){let e=document.querySelectorAll(".ibg");for(var t=0;t<e.length;t++)e[t].querySelector("img")&&null!=e[t].querySelector("img").getAttribute("src")&&(e[t].style.backgroundImage="url("+e[t].querySelector("img").getAttribute("src")+")")}}(),$(document).on("click touchstart",(function(t){$(t.target).is(".select *")||$(".select").removeClass("active")})),$(window).scroll((function(){$(window).width();$(window).scrollTop()>50?$("#up").fadeIn(300):$("#up").fadeOut(300)})),$("#up").click((function(t){$("body,html").animate({scrollTop:0},300)})),$("body").on("click",".tab__navitem",(function(t){var e=$(this).index();if($(this).hasClass("parent"))e=$(this).parent().index();$(this).hasClass("active")||($(this).closest(".tabs").find(".tab__navitem").removeClass("active"),$(this).addClass("active"),$(this).closest(".tabs").find(".tab__item").removeClass("active").eq(e).addClass("active"),$(this).closest(".tabs").find(".slick-slider").length>0&&$(this).closest(".tabs").find(".slick-slider").slick("setPosition"))})),$.each($(".spoller.active"),(function(t,e){$(this).next().show()})),$("body").on("click",".spoller",(function(t){return $(this).hasClass("mob")&&!e.any()||($(this).parents(".one").length>0&&($(this).parents(".one").find(".spoller").not($(this)).removeClass("active").next().slideUp(300),$(this).parents(".one").find(".spoller").not($(this)).parent().removeClass("active")),$(this).hasClass("closeall")&&!$(this).hasClass("active")&&$.each($(this).closest(".spollers").find(".spoller"),(function(t,e){$(this).removeClass("active"),$(this).next().slideUp(300)})),$(this).toggleClass("active").next().slideToggle(300,(function(t,e){$(this).parent().find(".slick-slider").length>0&&$(this).parent().find(".slick-slider").slick("setPosition")}))),!1})),-1!=navigator.appVersion.indexOf("Mac")||$(".scroll-body").length>0&&$(".scroll-body").niceScroll(".scroll-list",(v=100,f=50,m=!1,e.any()&&(v=10,f=1,m=!0),{cursorcolor:"#fff",cursorwidth:"4px",background:"",autohidemode:!0,cursoropacitymax:.4,bouncescroll:m,cursorborderradius:"0px",scrollspeed:v,mousescrollstep:f,directionlockdeadzone:0,cursorborder:"0px solid #fff"})),$(".t,.tip").length>0&&$(".t,.tip").webuiPopover({placement:"top",trigger:"hover",backdrop:!1,animation:"fade",dismissible:!0,padding:!1,onShow:function(t){},onHide:function(t){}}).on("show.webui.popover hide.webui.popover",(function(t){$(this).toggleClass("active")})),$(".filter__item").click((function(t){var e=$(this).data("filter");return 1==e?$(".works__column").show():($(".works__column").hide(),$(".works__column.f_"+e).show()),$(".filter__item").removeClass("active"),$(this).addClass("active"),!1}));const _=document.querySelectorAll("._anim-items");if(_.length>0){function g(t){for(let t=0;t<_.length;t++){const e=_[t],s=e.offsetHeight,i=C(e).top,a=4;let l=window.innerHeight-s/a;s>window.innerHeight&&(l=window.innerHeight-window.innerHeight/a),pageYOffset>i-l&&pageYOffset<i+s?e.classList.add("_active"):e.classList.contains("_anim-no-hide")||e.classList.remove("_active")}}function C(t){const e=t.getBoundingClientRect(),s=window.pageXOffset||document.documentElement.scrollLeft,i=window.pageYOffset||document.documentElement.scrollTop;return{top:e.top+i,left:e.left+s}}window.addEventListener("scroll",g),setTimeout((()=>{g()}),100)}!function(){let t=[],e=document.querySelectorAll("[data-da]"),s=[],i=[];if(e.length>0){let r=0;for(let i=0;i<e.length;i++){const a=e[i],o=a.getAttribute("data-da");if(""!=o){const e=o.split(","),i=e[1]?e[1].trim():"last",c=e[2]?e[2].trim():"767",d="min"===e[3]?e[3].trim():"max",h=document.querySelector("."+e[0].trim());e.length>0&&h&&(a.setAttribute("data-da-index",r),t[r]={parent:a.parentNode,index:(l=a,n=void 0,n=Array.prototype.slice.call(l.parentNode.children),n.indexOf(l))},s[r]={element:a,destination:document.querySelector("."+e[0].trim()),place:i,breakpoint:c,type:d},r++)}}(a=s).sort((function(t,e){return t.breakpoint>e.breakpoint?-1:1})),a.sort((function(t,e){return t.place>e.place?1:-1}));for(let t=0;t<s.length;t++){const e=s[t],a=e.breakpoint,l=e.type;i.push(window.matchMedia("("+l+"-width: "+a+"px)")),i[t].addListener(o)}}var a,l,n;function o(t){for(let t=0;t<s.length;t++){const e=s[t],a=e.element,l=e.destination,n=e.place,o="_dynamic_adapt_"+e.breakpoint;if(i[t].matches){if(!a.classList.contains(o)){let t=c(l)[n];"first"===n?t=c(l)[0]:"last"===n&&(t=c(l)[c(l).length]),l.insertBefore(a,l.children[t]),a.classList.add(o)}}else a.classList.contains(o)&&(r(a),a.classList.remove(o))}}function r(e){const s=e.getAttribute("data-da-index"),i=t[s],a=i.parent,l=i.index,n=c(a,!0)[l];a.insertBefore(e,a.children[n])}function c(t,e){const s=t.children,i=[];for(let t=0;t<s.length;t++){const a=s[t];(e||null==a.getAttribute("data-da"))&&i.push(t)}return i}o()}()}));
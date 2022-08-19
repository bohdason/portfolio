
$(function(){

//*****Scrollll********** */
let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();


    $(window).on("scroll load resize", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        if( scrollPos > introH ){
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    });

    //********Animationnnn*******/

   







    /*****Filter****** **/

let filter = $("[data-filter]");

filter.on("click", function(event) {
    event.preventDefault();
    
    let cat = $(this).data('filter')

    if (cat == 'all') {
        $('[data-cat]').removeClass("hide");
    } else{

    


    $("[data-cat]").each(function() {
        let workCat = $(this).data('cat');

        if(workCat !=cat) {
            $(this).addClass('hide');


        } else{
            $(this).removeClass('hide');
        }

    });
}

});


/******Modall***** */


const modallCall = $("[data-modal]");
const modalClose = $("[data-close]");

modallCall.on("click", function(event){
    event.preventDefault();

    let $this = $(this);
    let modalId = $this.data('modal');

    $(modalId).addClass('show');
    $("body").addClass('no-scroll');

    setTimeout(function(){
        $(modalId).find(".modal__dialog").css({
            transform: "rotateX(0)"
        });
    }, 300);

    $('#worksSlider').slick('setPosition');

});

modalClose.on("click", function(event){
    event.preventDefault();

    let $this = $(this);
    let modalParent = $this.parents('.modal');

        modalParent.find(".modal__dialog").css({
            transform: "rotateX(90deg)"
        });

    setTimeout(function(){
        modalParent.removeClass('show');
        $("body").removeClass('no-scroll');
        
    }, 300);

});

$(".modal").on("click", function(event){
    let $this = $(this);

    $this.find(".modal__dialog").css({
        transform: "rotateX(90deg)"
    });

    setTimeout(function(){
        $this.removeClass('show');
        $("body").removeClass('no-scroll');
        
    }, 300);

});

$(".modal__dialog").on("click", function(event){

    event.stopPropagation();

});


/*******Sliderrr******https://kenwheeler.github.io/slick******* */

$('[data-slider="slick"]').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true
  });

  $(".slickPrew").on("click", function(event){
    event.preventDefault();

    let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');

    currentSlider.slick("slickPrew");
  });

  $(".slickNext").on("click", function(event){
    event.preventDefault();

    let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');

    currentSlider.slick("slickNext");
  });

  /****** Mobile Navvv =============
   * ===============*/


const navToggle = $("#navToggle");
const nav = $("#nav");

  navToggle.on("click", function(event){
    event.preventDefault();

    nav.toggleClass("show");

  });


  


});


/******Animationn*** */

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0){
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
for (let index = 0; index < animItems.length; index++) {
    const animItem = animItems[index];
    const animItemHeight = animItem.offsetHeight;
    const animItemOffset = offset(animItem).top;
    const animStart = 4;

let animItemPoint = window.innerHeight - animItemHeight / animStart;
if(animItemHeight > window.innerHeight){
    animItemPoint = window.innerHeight - window.innerHeight / animStart;
}

if ((scrollY > animItemOffset - animItemPoint) && scrollY <(animItemOffset + animItemHeight) ){
    animItem.classList.add('_active');
} else{
    if (!animItem.classList.contains('_anim-no-hide')){
        animItem.classList.remove('_active');
    }
    
}

    }
}

function offset(el){
    const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageXOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}
setTimeout(() => {

animOnScroll();
}, 400);

}



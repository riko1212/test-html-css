window.addEventListener('DOMContentLoaded', function() {

let slideIndex = 1,
    slides = document.querySelectorAll('.slider-item'),
    dotsWrap = document.querySelector('.slider-nav'),
    dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);

    function showSlides(n) {

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');
        // for (let i = 0; i < slides.length; i++) {
        //     slides[i].style.display = 'none';
        // }
        dots.forEach((item) => item.classList.remove('dot-active'));

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) {
        showSlides(slideIndex += n); 
    }
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function plusSlides(n) {
        showSlides(slideIndex += n); 
    }





    // dotsWrap.addEventListener('mouseleave', function() {
    //     setInterval(function() {
    //         plusSlides(1);
    //     }, 6000);
    // });
    
    function timer(flag){
        var intervalId = setInterval (function(){plusSlides(1);
        }, 6000);
        if (flag == 'false') {
                    clearInterval(intervalId);
                 }
    }

    timer(true);


    dotsWrap.addEventListener('click', function(event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
                currentSlide(i);
            }
        }
    });

    

    let  btn = $('.send-form-btn') ;

    btn.on('click', function() {
        $(this).addClass('clicked');
    });

    jQuery(document).on('click',function (e) {
        let el = '.send-form-btn';
        if (jQuery(e.target).closest(el).length) return;
        $('.send-form-btn').removeClass('clicked');
    });

    $('.header-menu-item-select').on('click', function(){
        $('.submenu').fadeIn()
    })

    jQuery(document).on('click',function (e) {
        let el = '.header-menu-item-select';
        if (jQuery(e.target).closest(el).length) return;
        $('.submenu').fadeOut();
    });

});

jQuery(function($) {
    $('.send-form').on('submit', function(event) {
      if ( validateForm() ) { 
        event.preventDefault();
      }
    });
    
    function validateForm() {
      $(".text-error").remove();

      
      var reg     = /^\w+([\.-]?\w+)*@(((([a-z0-9]{2,})|([a-z0-9][-][a-z0-9]+))[\.][a-z0-9])|([a-z0-9]+[-]?))+[a-z0-9]+\.([a-z]{2}|(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum))$/i;
      var el_e    = $(".email");
      var v_email = el_e.val()?false:true;
    
      if ( v_email ) {
        el_e.after('<div class="text-error for-email">Hum… Please enter a valid email address 🚧</div>');
        el_e.css('border-color', '#e88282')
        $(".for-email").css({top: el_e.position().top + el_e.outerHeight() + 2});
      } else if ( !reg.test( el_e.val() ) ) {
        v_email = true;
        el_e.after('<div class="text-error for-email">Hum… Please enter a valid email address 🚧</div>');
        el_e.css('border-color', '#e88282')
        $(".for-email").css({top: el_e.position().top + el_e.outerHeight() + 2});
      }
      $("#email").toggleClass('error', v_email );
      
      
      return (v_email);
    }
     
  });
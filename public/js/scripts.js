$(document).ready(function() {
    
    //modal signup form
    
    //setting up waypoint for sticky navi
    $('.js--section-about').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });
    
    //settin up buttons for scrolling animation
    $('.js--scroll-to-about').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-about').offset().top}, 1000);
    });
    
    // navigation scroll
    $(function() {
        $('a[href*=\\#]:not([href=\\#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                   if (target.length) {
                     $('html,body').animate({
                       scrollTop: target.offset().top
                    }, 1000);
                       console.log('something');
                    return false;
                }
            }
        });
    });
    
    //mobile navi
    $('.js--navi-icon').click(function() {
        var navi = $('.js--main-navi');
        var icon = $('.js--navi-icon i');
        
        navi.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });
    
    $('.js-wp-1').waypoint(function(direction) {
        $('.js-wp-1').addClass('animated fadeInUp');
    }, {
        offset: '70%'
    });
    
    
    
//    var map = new GMaps({
//        div: '.map',
//        lat: 40.7313923,
//        lng: -74.18,
//        zoom: 12
//    });
//    
//    map.addMarker({
//      lat: 40.7313923,
//      lng: -74.2522674,
//      title: 'Newark',
//      infoWindow: function(e) {
//        content: '<p>Our office and garage are located in Newark, NJ!</p>'
//      }
//    });
    
    
});















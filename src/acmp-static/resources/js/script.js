$(document).ready(function(){
 /*sticky navigation */
    $('.js--sectionabout').waypoint(function(direction){
        if(direction == "down"){
            $('nav').addClass('sticky');
            $('.main-header-nav').addClass('sticky');
        }
        else{
            $('nav').removeClass('sticky');
            $('.main-header-nav').removeClass('sticky');
        }
});
    
    /*click and scroll to section */
   $('.js-go-to-volunteer').click(function(direction){
       $('html, body').animate({scrollTop: $('.js-scroll-volunteer').offset().top}, 100)
   });
    $('.js-go-to-member').click(function(direction){
       $('html, body').animate({scrollTop: $('.js-scroll-member').offset().top}, 100)
   });
   $('.js-go-to-sponsor').click(function(direction){
       $('html, body').animate({scrollTop: $('.js-scroll-sponsor').offset().top}, 100)
   });
   $('.js-go-to-event').click(function(direction){
       $('html, body').animate({scrollTop: $('.js-scroll-event').offset().top}, 100)
   });
   

});
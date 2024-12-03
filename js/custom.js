(function ($) {

"use strict";

  // MENU
  $('#sidebarMenu .nav-link').on('click',function(){
    $("#sidebarMenu").collapse('hide');
  });
  
  // CUSTOM LINK
  $('.smoothscroll').click(function(){
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height();

    scrollToDiv(elWrapped,header_height);
    return false;

    function scrollToDiv(element,navheight){
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop-navheight;

      $('body,html').animate({
      scrollTop: totalScroll
      }, 300);
    }
  });

  // COMPRIMIR && EXPANDIR ASSOCIADOS
  const $botaoCarregarMaisAssociados = $('#carregarMaisAssociados');
  const $botaoCarregarMenosAssociados = $('#carregarMenosAssociados');

  $botaoCarregarMaisAssociados.on('click', function() {

    if ( $botaoCarregarMenosAssociados.hasClass( "btn-hidden" ) ) {
      $botaoCarregarMenosAssociados.removeClass( "btn-hidden" );
    }

    const $cardGroup = $('.card-group');

    $cardGroup.each( function( index ) {
    
      if ( index === $cardGroup.length - 1 ) {
        $botaoCarregarMaisAssociados.addClass( "btn-hidden" );
      }

      if ( index > 0 ) {

        if( !$(this).hasClass( "card-group-show" ) ) {

          $(this).addClass( "card-group-show" );
          return false;
          
        }

      }
      
    })

  })

  $botaoCarregarMenosAssociados.on('click', function() {

    if ( $botaoCarregarMaisAssociados.hasClass( "btn-hidden" ) ){
      $botaoCarregarMaisAssociados.removeClass( "btn-hidden" );
    }
    

    const $inverseCardGroup = $.makeArray( $( '.card-group') ).reverse();

    $( $inverseCardGroup ).each( function( index ) {

      if ( index === $inverseCardGroup.length - 2 ){
        $botaoCarregarMenosAssociados.addClass( "btn-hidden" );
      }

      if ( index < $inverseCardGroup.length - 1 ) {

        if( $(this).hasClass( "card-group-show" ) ) {
  
          $(this).removeClass( "card-group-show" );
          return false;
  
        }

      }

    })

  })

})(window.jQuery);



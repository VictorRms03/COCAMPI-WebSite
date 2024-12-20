(function ($) {

"use strict";

  // CONFIGURAÇÕES INICIAS DA BARRA DE NAVEGAÇÃO
  $('#sidebarMenu .nav-item .nav-link:link').addClass('inactive');    
  $('#sidebarMenu .nav-item .nav-link').eq(0).addClass('active');
  $('#sidebarMenu .nav-item .nav-link:link').eq(0).removeClass('inactive');

  // MENU
  $('#sidebarMenu .nav-link').on('click',function(){
    $("#sidebarMenu").collapse('hide');
  });
  
  // BOTÃO DE RETORNAR AO TOPO
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

          scrollInto( this );

          return false;
          
        }

      }
      
    })

  });

  $botaoCarregarMenosAssociados.on('click', function() {

    if ( $botaoCarregarMaisAssociados.hasClass( "btn-hidden" ) ) {
      $botaoCarregarMaisAssociados.removeClass( "btn-hidden" );
    }
  
    const $inverseCardGroup = $.makeArray( $( '.card-group') ).reverse();

    $( $inverseCardGroup ).each( function( index ) {

      if ( index === $inverseCardGroup.length - 2 ) {
        $botaoCarregarMenosAssociados.addClass( "btn-hidden" );
      }

      if ( index < $inverseCardGroup.length - 1 ) {

        if( $(this).hasClass( "card-group-show" ) ) {
  
          $(this).removeClass( "card-group-show" );

          scrollInto( $inverseCardGroup[ index+1 ] );

          return false;
  
        }

      }

    })

  });

})(window.jQuery);

// BARRA DE NAVEGAÇÃO INTERATIVA
var sectionArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
$.each(sectionArray, function(index, value){
          
     $(document).scroll(function(){
         var offsetSection = $('#' + 'section_' + value).offset().top - 0;
         var docScroll = $(document).scrollTop();
         var docScroll1 = docScroll + 1;
         
        
         if ( docScroll1 >= offsetSection ){
             $('#sidebarMenu .nav-link').removeClass('active');
             $('#sidebarMenu .nav-link:link').addClass('inactive');  
             $('#sidebarMenu .nav-item .nav-link').eq(index).addClass('active');
             $('#sidebarMenu .nav-item .nav-link').eq(index).removeClass('inactive');
         }
         
     });
    
    $('.click-scroll').eq(index).click(function(e){
        var offsetClick = $('#' + 'section_' + value).offset().top - 0;
        e.preventDefault();
        $('html, body').animate({
            'scrollTop':offsetClick
        }, 300)
    });
    
});

function scrollInto( object ) {

  object.scrollIntoView({behavior: "smooth", block: "center"});
  
}


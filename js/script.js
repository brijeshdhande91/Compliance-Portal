$(document).ready(function () {
	$('.toggle').on('click', function() {
	  $('. container').stop().addClass('active');
	});

	$('.close').on('click', function() {
	  $('. container').stop().removeClass('active');
	});

  $('.dropdown').click(function() {
    $(this).toggleClass('cart-90deg');
  });
  $('.menurem').click(function(){
    $('#slidrmv').removeClass('slide-in');
  });
  $('.menurem').click(function(){
    $('#bs-example-navbar-collapse-1').removeClass('in');
  });
});

jQuery(document).ready(function($) {
    var open = false;

    var openSidebar = function(){
    $('.search_section').addClass('_srch');
	    open = true;
	}
	var closeSidebar = function(){
	    $('.search_section').removeClass('_srch');
	    open = false;
	}

	$('.search').click( function(event) {
	    event.stopPropagation();
	    var toggle = open ? closeSidebar : openSidebar;
	    toggle();
	});

	$(document).click( function(event){
	    if ( !$(event.target).closest('.search_section').length ) {
	        closeSidebar();   
	    }
	});
});

$(function () {
    $('.navbar-toggle-sidebar').click(function () {
      $('.navbar-nav').toggleClass('slide-in');
      $('.side-body').toggleClass('body-slide-in');
      $('#search').removeClass('in').addClass('collapse').slideUp(200);
    });

    $('#search-trigger').click(function () {
      $('.navbar-nav').removeClass('slide-in');
      $('.side-body').removeClass('body-slide-in');
      $('.search-input').focus();
    });
  });

$(document).ready(function () {
  $('#dashbrd').on('click', function() {
     $('#charts,#tit1').addClass('section_show animated');
    $('#ncUnit,#tit2').removeClass('section_show animated');
    $('#ncAct,#tit3').removeClass('section_show animated');
    $('#ncAll,#tit4').removeClass('section_show animated');
    $('#act_sec,#tit5').removeClass('section_show animated');
    $('#vendor_sec,#tit6').removeClass('section_show animated');
    $('#filereturn_sec,#tit7').removeClass('section_show animated');
  });
  $('#nc_unit').on('click', function() {
   $('#charts,#tit1').removeClass('section_show animated');
    $('#ncUnit,#tit5').addClass('section_show animated');
    $('#ncAct,#tit3').removeClass('section_show animated');
    $('#ncAll,#tit4').removeClass('section_show animated');
    $('#act_sec,#tit2').removeClass('section_show animated');
    $('#vendor_sec,#tit6').removeClass('section_show animated');
    $('#filereturn_sec,#tit7').removeClass('section_show animated');
  });

  $('#nc_act').on('click', function() {
   $('#charts,#tit1').removeClass('section_show animated');
    $('#ncUnit,#tit2').removeClass('section_show animated');
    $('#ncAct,#tit6').addClass('section_show animated');
    $('#ncAll,#tit4').removeClass('section_show animated');
    $('#act_sec,#tit5').removeClass('section_show animated');
    $('#vendor_sec,#tit3').removeClass('section_show animated');
    $('#filereturn_sec,#tit7').removeClass('section_show animated');
  });

  $('#nc_all').on('click', function() {
    $('#charts,#tit1').removeClass('section_show animated');
    $('#ncUnit,#tit2').removeClass('section_show animated');
    $('#ncAct,#tit3').removeClass('section_show animated');
    $('#ncAll,#tit7').addClass('section_show animated');
    $('#act_sec,#tit5').removeClass('section_show animated');
    $('#vendor_sec,#tit6').removeClass('section_show animated');
    $('#filereturn_sec,#tit4').removeClass('section_show animated');
  });

  $('#act').on('click', function() {
    $('#charts,#tit1').removeClass('section_show animated');
    $('#ncUnit,#tit5').removeClass('section_show animated');
    $('#ncAct,#tit3').removeClass('section_show animated');
    $('#ncAll,#tit4').removeClass('section_show animated');
    $('#act_sec,#tit2').addClass('section_show animated');
    $('#vendor_sec,#tit6').removeClass('section_show animated');
    $('#filereturn_sec,#tit7').removeClass('section_show animated');
  });

  $('#vendor').on('click', function() {
    $('#charts,#tit1').removeClass('section_show animated');
    $('#ncUnit,#tit2').removeClass('section_show animated');
    $('#ncAct,#tit6').removeClass('section_show animated');
    $('#ncAll,#tit4').removeClass('section_show animated');
    $('#act_sec,#tit5').removeClass('section_show animated');
    $('#vendor_sec,#tit3').addClass('section_show animated');
    $('#filereturn_sec,#tit7').removeClass('section_show animated');
  });
  $('#filereturn').on('click', function() {
    $('#charts,#tit1').removeClass('section_show animated');
    $('#ncUnit,#tit2').removeClass('section_show animated');
    $('#ncAct,#tit3').removeClass('section_show animated');
    $('#ncAll,#tit6').removeClass('section_show animated');
    $('#act_sec,#tit5').removeClass('section_show animated');
    $('#vendor_sec,#tit7').removeClass('section_show animated');
    $('#filereturn_sec,#tit4').addClass('section_show animated');
  });
});
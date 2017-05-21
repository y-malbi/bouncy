$('.header-navigation').on('click', 'a', function(event){
    event.preventDefault();
    var link = $(this).attr('href'); //id блока
    var distanse = $(link).offset().top; //px
    $('html, body').animate({
    scrollTop: distanse
    }, 500); //500 - время в мс

});

$('.header-navigation > li > a').click(function(e){
    if ($(this).hasClass('active-section')){
    }else{
        $('.header-navigation > li > a').removeClass('active-section')
        $(this).addClass('active-section');
    }
});

//  ISOTOPE + MASONRY
var $grid = $('.grid').isotope({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use element for option
    columnWidth: '.grid-item-size',
    gutter: 5,
    horizontalOrder: true
  }
});

// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});



//  Slider
$('.slide-content').slick({
	// autoplay: true,
	// autoplaySpeed: 1000
    arrows: false,
    dots: true
});

$('.carousel').slick({
	slidesToShow: 3,
	slidesToScroll: 2,
	dots: true,
	arrows: false
});


// карта
function initMap() {
  var map;
  var chernihiv = {lat: 51.4938405,lng: 31.3015627},
    poltava = {lat: 49.5687001,lng: 34.5835126},
    kyiv = {lat: 50.4492763,lng: 30.5143413},
    odesa = {lat: 46.4836438, lng: 30.7373918};

    map = new google.maps.Map(document.getElementById('map'), {
      center: chernihiv,
      zoom: 15,
      scrollwheel: false, // карта не скролится колесиком, но перетаскивается
      mapTypeControl: false // убирает элементы выбора типа карты
    });

    var infowindow = new google.maps.InfoWindow({
      content: "Beetroot Academy"
    });

    var image = {
      url: 'img/favicon.png', // image is 512 x 512
      scaledSize : new google.maps.Size(22, 22)// устанавливает размер картинки 22х22рх
    };

    var marker_che = new google.maps.Marker({
      position: chernihiv,
      map: map,
      icon: image
    });

    infowindow.open(map, marker_che); //появление информационного окна при загрузке
  
    marker_che.addListener('click', function() {
      infowindow.open(map, marker_che); //появление информационного окна при нажатии
    });

    google.maps.event.addDomListener(window, 'resize', function() { // при изменении размера окна маркет остается в центре
      var center = map.getCenter()
      google.maps.event.trigger(map, "resize")
      map.setCenter(center)
    });
};

$(document).ready(function(){
  initMap();
});

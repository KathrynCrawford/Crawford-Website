var titles = $(".titles"),
plays = $(".plays"),
distance = $('.navbar-default').offset().top,
$window = $(window),
//create animation for each element
animations = plays.map(createAnimation);

$window.scroll(function() {
    if ( $window.scrollTop() >= distance ) {
        $('.navbar-default').css({
        	'position':'fixed',
          'top':'0',
          'width':'100%',
          'left':'0',
          'right':'0',
          'z-index': '10'
        })
    } else {
    	$('.navbar-default').css({
        	'position':'static'
        })
    }
});

titles.click(playAnimation);

function playAnimation(event) {

  // You links are causing errors on CodePen
  event.preventDefault();

  var selected = event.target.dataset.play;

  //cycle through list of animations, toggling reversed state
  animations.each(function(i, animate) {
    animate(selected);
  });
}

function createAnimation(i, element) {

  var tween = TweenLite.to(element, 1, { autoAlpha: 1 }).reverse();

  var play = element.dataset.play;

  //return a function to toggle reversed state
  return function(selected) {

    //var reversed = element !== target ? true : !tween.reversed();

    // DOING IT THIS WAY WILL TOGGLE THE SELECTED ONE IF CLICKED AGAIN
    //var reversed = selected !== play ? true : !tween.reversed();

    // DOING IT THIS WAY WILL KEEP THE SELECTED ONE OPEN REGARDLESS OF IT WAS CLICKED AGAIN
    var reversed = (selected !== play);
    tween.reversed(reversed);
  }
}

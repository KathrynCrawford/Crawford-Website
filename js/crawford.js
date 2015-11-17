var plays = document.getElementsByClassName('plays')
var playsLength = plays.getLength();

// for( i = 0; i < playsLength; i++ ) {
// 	var tl = new TimelineMax({paused: false});
// 	tl.to(plays[i] , 0.3, {autoAlpha: 1, display:'block'});
// };

TimelineMax.to("#artesia", 0.6, {autoAlpha: 1, display: 'block'});

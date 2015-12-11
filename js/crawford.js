var plays = document.getElementsByClassName('plays'),
    playsLength = plays.length,
    titles = document.getElementsByClassName('titles'),
    titlesLength = titles.length,
    timelines = [];

//Fill up tl array with timelines for each clippath
for (var i = 0; i < playsLength; i ++) {
  createTimelines(i);
  assignListeners(i);
}

function createTimelines(i) {
  var timeline = new TimelineMax({ paused: true });
  //timeline.staggerTo(plays, 0.6, {autoAlpha: 0, ease: Expo.easeInOut}, 0.1)
  timeline.set(plays, {clearProps: "all"})
          .to(plays[i], 0.6, {
          autoAlpha: 1,
          ease: Expo.easeInOut});
  timelines[i] = timeline;
}

function assignListeners(i) {
    titles[i].addEventListener('click', function(e) { expand(e, i);}, false);
}

function expand(e, i) {
  timelines[i].play();
}

for (var x = 0; x < playsLength; x++ ){
  console.log(createTimelines(i));
}

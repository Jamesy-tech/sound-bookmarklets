javascript:(function(){
  var audio = new Audio('https://www.myinstants.com/media/sounds/jixaw-metal-pipe-falling-sound.mp3');
  audio.play().catch(function(e){console.log('Audio play failed:', e)});
})();

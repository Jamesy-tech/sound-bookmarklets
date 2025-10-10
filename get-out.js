javascript:(function(){
  var audio = new Audio('https://github.com/Jamesy-tech/sound-bookmarklets/raw/main/get-out.mp3');
  audio.play().catch(function(e){console.log('Audio play failed:', e)});
})();

javascript:(function(){
  var audio = new Audio('https://github.com/Jamesy-tech/sound-bookmarklets/raw/main/what-the-dog-doin.mp3');
  audio.play().catch(function(e){console.log('Audio play failed:', e)});
})();

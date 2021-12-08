document.addEventListener('keydown', function(event){
  playSongs(event.key);
});
function playSongs(character)
{
  if(character=='s'){
  var song1 = new Audio('songs/crash(1).mp3');
  song1.play();
}

else  if(character=='h'){
  var song2 = new Audio('songs/kick-bass.mp3');
  song2.play();
}

else   if(character=='u'){
  var song3 = new Audio('songs/tom-1.mp3');
  song3.play();
}

else   if(character=='b'){
  var song4 = new Audio('songs/tom-1.mp3');
  song4.play();
}

else   if(character=='h'){
  var song5 = new Audio('songs/tom-2.mp3');
  song5.play();
}

else   if(character=='a'){
  var song6= new Audio('songs/tom-3.mp3');
  song6.play();
}

else {
  var song7 = new Audio('songs/tom-4.mp3');
song7.play();
}
}

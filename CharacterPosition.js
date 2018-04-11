function CharacterPosition(sentence){
  var count = {};

  for(var i = 0; i < sentence.length; i++){
    if(sentence[i] !== " "){
      if(!count[sentence[i]]) {
        count[sentence[i]] = [];
      }
      count[sentence[i]].push(i);
    }
  }
  return count;
}

console.log(CharacterPosition("lighthouse in the house"));
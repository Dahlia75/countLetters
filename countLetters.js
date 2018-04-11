function countLetters(sentance){
  var count={};

  for(var i = 0; i < sentance.length; i++){
    if(sentance[i] !== " "){
      if(!count[sentance[i]]) {
        count[sentance[i]] = 0;
      }
      count[sentance[i]] += 1;
    }
  }
  console.log(count);
}
countLetters("lighthouse in the house")
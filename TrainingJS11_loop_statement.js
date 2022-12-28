function grabDoll(dolls){
  var bag=[];
  //coding here
  for (var i = 0; i < dolls.length; i++) {
    if (bag.length > 2) break;
    if (dolls[i] == "Hello Kitty" || dolls[i] == "Barbie doll") {
      bag.push(dolls[i]);
    } 
    continue;
    
  }
  return bag;
}
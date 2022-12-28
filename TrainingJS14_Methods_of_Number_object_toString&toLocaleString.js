function colorOf(r,g,b){
    var one = r.toString(16);
    var two = g.toString(16);
    var three = b.toString(16);
    if (one.length < 2) {
      one = "0" + one;
    }
    if (two.length < 2) {
      two = "0" + two;
    }
    if (three.length < 2) {
      three = "0" + three;
    }
    var rgb = "#"+one+two+three;
    return rgb;
  }
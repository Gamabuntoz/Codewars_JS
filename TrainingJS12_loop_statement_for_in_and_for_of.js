function giveMeFive(obj){
    //coding here
    var arr = [];
    for (var param in obj) {
      if (param.length == 5) {
        arr.push(param);
      }
      if (obj[param].length == 5) {
        arr.push(obj[param]);
      }
    }
    return arr;
  }
  
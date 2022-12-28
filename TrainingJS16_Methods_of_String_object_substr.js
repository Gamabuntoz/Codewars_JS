function cutIt(arr){
    var leng = arr[0];
    for (i = 0; i < arr.length; i++) {
      if (arr[i].length < leng.length) {
        leng = arr[i];
      }
    }
    for (j = 0; j < arr.length; j++) {
      arr[j] = arr[j].substr(0,leng.length);
    }
    return arr;
  }
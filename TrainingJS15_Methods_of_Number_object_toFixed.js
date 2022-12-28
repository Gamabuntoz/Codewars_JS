function howManySmaller(arr,n){
    var u = 0;
    for (i = 0; i < arr.length; i++) {
      arr[i] = arr[i].toFixed(2);
      if (n > arr[i]) {
        u += 1;
      }
    }
      return u;
  }
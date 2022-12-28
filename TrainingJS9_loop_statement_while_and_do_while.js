function padIt(str,n){
    var multi = str;
    var nubm = n;
    while (nubm > 0) {
      nubm = nubm - 2;
      multi = "*" + multi;
    }
    while (n > 1) {
      n = n - 2;
      multi = multi + "*";
    }
   return multi;
  }
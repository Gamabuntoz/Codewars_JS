function saleHotdogs(n){
    if ((n >= 5) && (n < 10)) {
      return n * 95;
    }
    else if (n >= 10) {
      return n * 90;
    }
    else
      return n * 100;
  }
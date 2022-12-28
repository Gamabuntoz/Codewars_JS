function splitAndMerge(string, separator) {
    var res = string[0];
      for (i = 1; i < string.length; i++) {
      if (string[i] != " ") {
          res = res + separator + string[i];
      } else {
          res = res + string[i] + string[i+1];
          i++;
      }
  }
     return res;
  }
function alienLanguage(str){
    let b = str.toUpperCase();
        let c = b.split(" ");
    for (var i=0;i<c.length;i++){
      let a = c[i].length-1;
      c[i]=c[i].slice(0, a) + c[i][a].toLowerCase();
    }
     c = c.join(" ");
    return c
    }
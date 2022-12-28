function decode(str){
    var chars=str.split("");
    for (let i = 0; i < chars.length; i++) {
        if (chars[i].charCodeAt() < 65 || (chars[i].charCodeAt() > 90 && chars[i].charCodeAt() < 97)) {
            continue;
        }
        if (chars[i].charCodeAt()-3 > 90 && chars[i].charCodeAt()-3 < 97) {
            chars[i] = String.fromCharCode(chars[i].charCodeAt() + 23);
            continue;
        }
        if (chars[i].charCodeAt() - 3 >= 62 && chars[i].charCodeAt() - 3 <= 64) {
            chars[i] = String.fromCharCode(chars[i].charCodeAt() + 23);
            continue;
        }
        chars[i] = String.fromCharCode(chars[i].charCodeAt() - 3);
    }
    return console.log(chars.join(""));
}

decode('Khoor Zruog!')
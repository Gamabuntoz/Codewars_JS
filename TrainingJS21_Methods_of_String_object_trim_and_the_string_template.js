function fiveLine(s){
    let finish = s.trim();
    let finish2 = finish;
    for (let i = 2; i < 6; i++) {
        finish2 += `\n${finish.repeat(i)}`;
    }
    return console.log(finish2);
}
fiveLine('           Ok               ')
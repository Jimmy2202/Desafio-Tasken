const verifySequence = (string, index) => {
    let count = 1;
    for (let i = index; i < string.length; i++) {
        if (string[i + 1] == string[i] ){
            count++;
        }else{
            break
        }
    }
    return count;
}

const compactString = (string) => {
    const compactWord = [];
    let i = 0
    while (i < string.length) {
        let num = verifySequence(string, i);
        compactWord.push(string[i]);
        if (num > 1) {
            compactWord.push(num)
            i = i + num
        }else{
            i = i+1
        }
    }
    console.log(compactWord.join(""))
}

const string = prompt("Digite o a string: ")
compactString(string)

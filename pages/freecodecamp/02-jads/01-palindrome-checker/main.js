function palindrome (str) {
    const strLower = str.toLowerCase();
    const punctuation = /[\.,?!_:()/ -]/g;

    const newStr = strLower.replace(punctuation, "");

    const array = [];
    let strCompare1 = "";
    let strCompare2 = "";

    for (let i = 0; i < newStr.length; i++){
        if (newStr[i] != ' '){
            array.push(newStr[i]);
        }
    }

    for (let i = 0; i < array.length; i++){
        strCompare1 += array[i];       
    }

    for (let i = array.length - 1; i >= 0; i--){
        strCompare2 += array[i];
    }

    console.log(`String 1: ${strCompare1}`);
    console.log(`String 2: ${strCompare2}`);

    return strCompare1 === strCompare2;
}

let string = '';
document.getElementById('palindrome-input').addEventListener('input', (e) => {
    string += e;
    console.log(string);
});


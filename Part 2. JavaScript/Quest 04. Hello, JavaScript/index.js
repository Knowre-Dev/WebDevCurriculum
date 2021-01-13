function stars(num) {
    let i, j;
    for (i = 0; i < num; i++) {             // n번 반복
        // num - i + 1 만큼 공백 출력
        // i + 1 만큼 * 출력
        console.log(
            letters(num - i + 1, " ")
            +letters(i*2+1,"*")
        );
    }
}

// Array.fill : 지정한 값으로 치환 함
// Array.join : 구분자를 치환하여 연결 함

function letters(num, letter){
    let arr = new Array(num);
    arr.fill(letter);
    return arr.join("");
}

num = prompt();
stars(num)

function stars(num) {
    let i, j;
    for (i = 0; i < num; i++) {             // n번 반복
        // num - i + 1 만큼 공백 출력
        // i + 1 만큼 * 출력
        console.log(
            letters(num - i, " ") + letters(i*2+1,"*")
        );
    }
}

// Array.fill : 지정한 값으로 치환 함
// Array.join : 구분자를 치환하여 연결 함

function letters(num, letter){
    // let arr = new Array(num);       // num 길이의 배열 생성
    // arr.fill(letter);               // 배열을 letter 의 값으로 치환함
    // return arr.join("");            // join 하여 구분자 기준 연결

    // 아래와 같은 방법으로도 가능
    return (new Array(num)).fill(letter).join("");
}

num = prompt();
stars(num)

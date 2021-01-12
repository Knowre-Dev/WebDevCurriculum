function stars(num) {
    let i, j, res;
    for (i = 0; i < num; i++) {             // n번 반복
        res = "";
        for (j = 0; j < num + (num - 1); j++) {         // n = 4, 반복 당 넓이 : 4+(4-1) = 7
            if (j <= num - 1 + i && j >= num - 1 - i) {  // 좌우의 Space 구현
                res += "*";
            } else {
                res += " ";
            }
        }
        document.write(res);
        console.log(res + "\n");
    }
}
num = prompt();
stars(num)

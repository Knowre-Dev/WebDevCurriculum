function stars(num) {
    let i, j, res;
    for (i = 0; i < num; i++) {
        res = "";
        for(j=0;j<num+(num-1);j++){
            if(j<=num-1+i && j>= num-1-i){
                res += "*";
            }
            else{
                res += "&nbsp";
            }
        }
        document.write(res);
        document.write("<br>");
    }
}

let num = prompt();
stars(num)


/* if Unused Code */
// for (i = 0; i < num; i++) {
//     for (j = num-1; j > i ; j--) {
//         console.log(" ");
//         document.write("&nbsp");
//     }
//
//     for(j=0;j<=i*2;j++){
//         console.log("*");
//         document.write("*");
//     }
//     document.write("<br>");
//     console.log("<br>");
// }

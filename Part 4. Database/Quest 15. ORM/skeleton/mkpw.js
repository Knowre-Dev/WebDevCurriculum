const crypto = require('crypto');

function get_real_pw(pw){
    let real_pw = pw + '!@#$%^';
    for(let i=0; i<2; i++){
        console.log(real_pw);
        real_pw = crypto.createHash('sha256').update(real_pw).digest('base64');
    }
    return real_pw;
}

console.log(get_real_pw('2345'));
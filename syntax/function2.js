const { setupMaster } = require("cluster");

console.log(Math.round(1.6));
console.log(Math.round(1.4));

function sum(first, second){  //매개 변수 (pafameter)
    console.log('a');
    return first+second; //리턴은 실행됨과 동시에 즉시 정지한다. 그러므로 'b' 는 작동하지 않는다.
    console.log('b');
}


console.log(sum(2,4)); //인자 (arguament)
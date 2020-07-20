let n = prompt('2부터 n까지의 숫자 중 소수찾기. n을 입력하세요.','');

if(n == 2){
    alert(2);
}else if(n % 2 == 0 && n != 2){
    nextprime:
    for(let i = 2 ;i < n;i++){
        for(let j = 2 ; j < i;j++){
            if(i%j == 0){
                continue nextprime;
            }
        }
        alert(i);
    }
}
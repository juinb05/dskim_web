

{
    console.log('quiz_1');
    for(i=5;i > 0; i--){
        let line = "";
        for(j=0;j<i;j++){
            line += "*";
        }
        line += "\n";
        console.log(line);
    }

}



{
    console.log('quiz_2');
    let line ="";
    for(let i = 1; i <= 5 ; i++){
        for (let j = 5; j >i;j--){
            line += " ";
        }
        for (let k =i;k > 0;k--){
            line += "*";
        }
        line += "\n";
    }
    console.log(line);
}



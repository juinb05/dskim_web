let salaries = {  John: 100    
    ,  Ann: 160    
    ,  Pete: 130    
    }

let sum = 0;

for (key in salaries){
    if (salaries[key] != 0) {
        sum += salaries[key];
    }else if (salaries[key] = 0){
        sum = 0;
    }
}

console.log(sum);

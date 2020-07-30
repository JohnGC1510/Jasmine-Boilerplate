Calculator = function(){
    this.value = 0;
}

Calculator.prototype.add = function(number){
    if(typeof(number) == "number"){
        this.value += number;
    }
    else{
        alert("Error!");
    }
}

function drinkAboutGame(age){
        if(typeof(age) != "number" || age < 0 || age > 129){
            return "Sorry. I can't tell what drink because that age is incorrect!";
        }
        else if(age >= 0 && age < 14){
            return "Drink Toddy";
        }
        else if(age > 13 && age < 18){
            return "Drink Coke";
        }
        else if(age > 17 && age < 21){
            return "Drink Beer";
        }
        else if(age > 20 && age < 130){
            return "Drink Whiskey";
        }
    };
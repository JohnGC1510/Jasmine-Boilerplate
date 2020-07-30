describe("Calculator", function(){

    beforeEach(function(){
      calc = new Calculator;
    })

    describe("Addition tests", function(){
        it("should return 42", function(){
            calc.add(20);
            calc.add(22);
            expect(calc.value).toBe(42);
        });
        it("should return 26", function(){
            calc.add(7);
            calc.add(19);
            expect(calc.value).toBe(26); /*Two tests for basic addition to prevent test being circumvented by hardcoding the answer*/
        });
        it("should return an error if we don't supply two number", function(){
            spyOn(window, "alert"); /*Spy lets us check if a function has been called or not - checks if alert function has been called*/
            calc.add("Hitchhikers");
            expect(window.alert).toHaveBeenCalledWith("Error!"); /*alert function needs to be called with string "Error!" to pass the test*/
                /*toHaveBeenCalledWith is able to check if a function has been called with a specific parameter
                in this case checkiing the alert box has been called with the parameter Error!*/
        });
    });
});


describe("Drink About Game", function(){
    describe("Error tests", function(){
        it("should return string: Sorry. I can't tell what drink because that age is incorrect!",function(){
            expect(drinkAboutGame(-1)).toBe("Sorry. I can't tell what drink because that age is incorrect!");
        });
        it("should return string: Sorry. I can't tell what drink because that age is incorrect!",function(){
            expect(drinkAboutGame(130)).toBe("Sorry. I can't tell what drink because that age is incorrect!");
        });
        it("should return string: Sorry. I can't tell what drink because that age is incorrect!",function(){
            expect(drinkAboutGame("cake")).toBe("Sorry. I can't tell what drink because that age is incorrect!");
        });
    });
    describe("Drink Toddy tests", function(){
        it("should return string: Drink Toddy", function(){
            expect(drinkAboutGame(0)).toBe("Drink Toddy");
        });
        it("should return string: Drink Toddy", function(){
            expect(drinkAboutGame(13)).toBe("Drink Toddy");
        });
    });
    describe("Drink Coke tests", function(){
        it("should return string: Drink Coke", function(){
            expect(drinkAboutGame(14)).toBe("Drink Coke");
        });
        it("should return string: Drink Coke", function(){
            expect(drinkAboutGame(17)).toBe("Drink Coke");
        });
    });
    describe("Drink Beer tests", function(){
        it("should return string: Drink Beer", function(){
            expect(drinkAboutGame(18)).toBe("Drink Beer");
        });
        it("should return string: Drink Beer", function(){
            expect(drinkAboutGame(20)).toBe("Drink Beer");
        });
    });
    describe("Drink Whiskey tests", function(){
        it("should return string: Drink Whiskey", function(){
            expect(drinkAboutGame(22)).toBe("Drink Whiskey");
        });
        it("should return string: Drink Whiskey", function(){
            expect(drinkAboutGame(129)).toBe("Drink Whiskey");
        });
    });
});
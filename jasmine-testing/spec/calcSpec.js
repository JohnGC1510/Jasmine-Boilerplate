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

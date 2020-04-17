describe("Drink About Game", function() {
    describe("whatCanIDrink", function() {

        beforeEach(function() {
        drink = new whatCanIDrink();
        });

        it("test if function defined", function() {
           expect(whatCanIDrink).toBeDefined
        }); 
        
        it("should return can't tell if whatCanIDrink equals -5", function() {
            let result = whatCanIDrink(-5)
            expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });

        it("should return can't tell if whatCanIDrink equals 155", function() {
            let result = whatCanIDrink(155)
            expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });

        it("should return Toddy if whatCanIDrink equals 6", function() {
            let result = whatCanIDrink(6)
            expect(result).toBe("Drink Toddy");
        });

        it("should return Coke if whatCanIDrink equals 14", function() {
            let result = whatCanIDrink(14)
            expect(result).toBe("Drink Coke");
        });

        it("should return Beer if whatCanIDrink equals 18", function() {
            let result = whatCanIDrink(18)
            expect(result).toBe("Drink Beer");
        });

        it("should return whisky when whatCanIDrink equals 30", function() {
            let result = whatCanIDrink(30)
            expect(result).toBe("Drink Whisky");
        });
    });
});
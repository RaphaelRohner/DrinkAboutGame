function whatCanIDrink(age) {

    if (age > 0 && age < 14) {
        return "Drink Toddy";
    } else if (age > 13 && age < 18) {
        return "Drink Coke";
    } else if (age > 17 && age < 21) {
        return "Drink Beer";
    } else if (age > 20 && age < 130) {
        return "Drink Whisky";
    } else {
        return "Sorry. I can’t tell what drink because that age is incorrect!";
    }
}
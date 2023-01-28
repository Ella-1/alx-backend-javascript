import Currency from "./3-currency";

export default class Pricing {
    constructor(amount, currency){
        this_amount = amount;
        this._currency = currency;
    }

    get amount() {
        return this._amount;
    }

    set amount(n){
        return this._amount=n;
    }

    get currency() {
        return this._currency;
    }

    set currency(n) {
        return this._currency = n;
    }

    displayFullPrice() {
        return `${this._amount} ${Currency._name} (${Currency.code})`
    }

    static conversionRate(number,conversionRate) {
        return number * conversionRate
    }
}

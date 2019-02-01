export function calculateChange(money, index) {
    let muchMoney = 'Вы не можете вставить больше 100 рублей';
    let notEnoughMoney = 'Вы ввели недостаточное количество средств';
    let drink = [30, 35, 40, 45];
    if (money <= 100 && money >= drink[index]) {
        return money - drink[index];
    }
    if (money > 100) {
        return muchMoney;
    }

    return notEnoughMoney;
}
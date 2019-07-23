let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

    let appData ={
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
    };

    let quset_1 = prompt("Введите обязательную статью расходов в этом месяце"),
        quset_2 = prompt("Во сколько обойдется?"),
        quset_3 = prompt("Введите обязательную статью расходов в этом месяце"),
        quset_4 = prompt("Во сколько обойдется?");

            appData.expenses.quset_1 = quset_2;
            appData.expenses.quset_3 = quset_4;
            
            alert(appData.budget / 30);


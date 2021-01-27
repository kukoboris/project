'use strict';
let money, time;

function start() {
  money = +prompt('Ваш бюджет на месяц?', '');
  time = prompt('Введите дату в формате YYYY-MM-DD', '');

  while (isNaN(money) || money == '' || money == null) {
    money = +prompt('Ваш бюджет на месяц?', '');
  }
}

start();

let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  savings: true,
};

function chooseExpences() {
  for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
      b = prompt('Во сколько обойдется?', '');

    if (
      typeof a === 'string' &&
      typeof a != null &&
      typeof b != null &&
      a !== '' &&
      b !== '' &&
      a.length < 50
    ) {
      console.log('done');
      appData.expenses[a] = b;
    } else {
      console.log('Bad result');
      i--;
    }
  }
}

chooseExpences();

function detectDayBudget() {
  appData.moneyPerDay = (appData.budget / 30).toFixed();
  alert('Ежедневный бюджет составляет:' + appData.moneyPerDay + 'руб.');
}

detectDayBudget();

// Расчет уровня достатка (в консоль)
function detectLevel() {
  if (appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка');
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Средний уровень достатка');
  } else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка');
  } else {
    console.log('Упс...Произошла какая-то ошибка');
  }
}

detectLevel();

function checkSavings() {
  if (appData.savings == true) {
    let save = +prompt('Какова сумма накоплений?'),
      percent = +prompt('Под какой процент?');

    appData.monthIncome = ((save / 100 / 12) * percent).toFixed(2);
    alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
  }
}

checkSavings();

// Функция для определения необязательных расходов

function chooseOptExpenses() {              
  for (let i = 1; i <= 3; i++) {
    let a = prompt('Введите НЕобязательную статью расходов в этом месяце', '');

    if (
      typeof a === 'string' &&
      typeof a != null &&
      a !== '' &&
      a.length < 50
    ) {
      console.log('done');
      appData.optionalExpenses[i] = a;
      console.log(appData.optionalExpenses);
    } else {
      console.log('Bad result');
      i--;
    }
  }
}
chooseOptExpenses();

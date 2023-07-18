let family = {
  incomes: [2500, 2600, 4000, 200],
  expenses: [45, 222, 1000, 50],
};

calculateBalance();

function sum(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }
  return total;
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes);
    const calculateExpenses = sum(family.expenses);

    if (calculateExpenses > calculateIncomes) {
        console.log("Saldo Negativo");
    } else if (calculateExpenses < calculateIncomes) {
        console.log("Saldo Positivo");
    } else {
        console.log("Neutro")
    }
}


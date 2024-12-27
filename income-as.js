function monthlySalary(arr, livingCost) {

    if (!Array.isArray(arr) || typeof(livingCost) !== 'number' ) {
        return"please input valid input"
    }

    let finalIncome = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 3000) {
            const tk = arr[i] - (arr[i] * 20 / 100);
            finalIncome.push(tk)
        } else {
            finalIncome.push(arr[i])
        }
    }
    let sum = 0;
    for (let item of finalIncome) {
        sum += item
    }

     savings = sum - livingCost;

    if (savings < 0) {
        return 'earn more'      
    } else if (savings >= 0) {
        return savings
    }

}

const payment= [1000,2000,3000]
const leftOver= 5400
console.log(monthlySalary(payment, leftOver));

const arr = [2000, 4000, 500, 24000, 560, 1000, 3400]
const cost = 20000;
console.log(monthlySalary(arr,cost));





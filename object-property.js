const personalInfo = {
    id: 1,
    name: 'mesu',
    age: 24,
    salary: 50000,
    qualification: ['ssc', 'hsc', 'bsc'],
    friends: { name: 'monisha', age: 24 },

    position: function () {
        console.log(this.name, 'akon student.');
    },

    expenseMonth: function (daily) {
        const total = daily * 30;
        return total;

    },
    saving: function (expense) {
        const save = this.salary - this.expenseMonth(10);
        return save;

    }

}

//console.log(personalInfo);
personalInfo.position();
const expense = personalInfo.expenseMonth(10);
console.log(expense);

const save = personalInfo.saving();
console.log(save);

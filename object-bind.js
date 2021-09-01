const me = {
    name: 'mesu', id: 1, age: 25, salary: 50000, saving: 50000
}

const friend = {
    name: 'monisha', id: 2, age: 25, salary: 60000, saving: 60000,

    expense: function (money) {
        this.saving = this.saving - money;
        console.log(this);
        return this.saving;

    }

}


const exp = friend.expense(1000);
// console.log(friend);


const saving = friend.expense.bind(me);
saving(1000);
// console.log(me)




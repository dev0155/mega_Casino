class User {

    constructor(name, money) {
        this.name = name;
        if (money <= 0) {
            return
        }
        this.money = money;
        this.play = function (money) {
            return new GameMachine().play(money)
        }
    }
}

class SuperAdmin extends User{

    constructor(name, money) {
        super(name, money);
        this.addCasino = function (casino) {
            if (casino.length) {
                return casino
            }
        };
        this.addGameMachine = function (money) {
            return new GameMachine(money).putMoney(money)
        };
        this.getMoneyFromCasino = function () {
            let gameMachine = new GameMachine(money).getMoney();
        };
        this.addMoney = function (money) {
            return money
        };
        this.deleteGameMachine = function (number) {
            return new GameMachine()
        }

    }
}


class Casino {

    constructor(name) {
        this.name = name;
        this.getMoney = function () {
            return Casino.money
        };
        this.getMachineCount = function () {
            return Casino.count
        }
    }
}


class GameMachine {

    constructor(money) {
        this.money = money;
        this.getMoney = function (gameMachine) {
            return this.money;
        };
        this.takeMoney = function (money) {
            return money
        };
        this.putMoney = function (money) {
            return money
        };
        this.play = function (money) {
            if (!money && money <= 0) {
                return 'Money is not enough!';
            }
            this.money += money;
            let number = Math.floor(100 + Math.random() * 900).toString().split('');
            let findDuplicates = (arr) => arr.filter((item, index) => arr.indexOf(item) != index);
            let result = findDuplicates(number);
            if (result.length <= 0) {
                return 0
            } else if (result.length === 1) {
                this.money -= money * 2;
                return money * 2
            } else {
                this.money -= money * 3;
                return money * 3
            }
        }

    }
}

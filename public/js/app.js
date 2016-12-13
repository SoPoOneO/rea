class Roommate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {name: props.name, expenses: props.expenses};
        this.addExpense = this.addExpense.bind(this);
    }

    addExpense(){
        var key = Date.now();
        var item = "";
        var ammount = "";
        var expense = {key, item, ammount};
        // console.log(expense);
        // this.setState((prevState) => ({
        //     roomate.expenses: prevState.roommate.expenses.concat(expense)
        // }));
    }

    render() {
        return (
            <li>
                <input defaultValue={this.state.name} />
                <ul>
                    {this.state.expenses.map(expense => (
                        <Expense key={expense.key} expense={expense} />
                    ))}
                </ul>
                <button onClick={this.addExpense}>Add Expense</button>
                <br /><br />
            </li>
        );
    }
}

class Expense extends React.Component {

    render() {
        return (
            <li>
                item:
                <input defaultValue={this.props.expense.item} />
                -
                ammout:
                <input defaultValue={this.props.expense.ammount} />
            </li>
        );
    }
}



class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {roommates: roommates};
        this.addRoommate = this.addRoommate.bind(this);
    }

    render() {
        return (
            <div>
                <h3>Roommates</h3>
                <ul>
                    {this.state.roommates.map(roommate => (
                        <Roommate key={roommate.key} name={roommate.name} expenses={roommate.expenses} />
                    ))}
                </ul>
                <button onClick={this.addRoommate}>Add Roommate</button>
            </div>
        );
    }

    addRoommate(){
        var key = Date.now();
        var name = "roommate5";
        var expenses = [{name: '', ammount: null}];
        var roommate = {key, name, expenses};
        this.setState((prevState) => ({
            roommates: prevState.roommates.concat(roommate)
        }));
    }
}

var roommates = [{
        key: 1,
        name: 'alice',
        expenses: [{
            key: 1,
            item: "rent",
            ammount: 200
        },{
            key: 2,
            item: "food",
            ammount: 50
        }]
    },{
        key: 2,
        name: 'Bob',
        expenses: [{
            key: 1,
            item: "laundry",
            ammount: 80
        }]
    }
];

ReactDOM.render(<App />,  document.getElementById("content"));
class Roommate extends React.Component {

    render() {
        return (
            <li>
                <input defaultValue={this.props.roommate.name} />
                <ul>
                    {this.props.roommate.expenses.map(expense => (
                        <Expense key={expense.key} expense={expense} />
                    ))}
                </ul>
                <button>Add Expense</button>
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
    }

    render() {
        return (
            <div>
                <h3>Roommates</h3>
                <ul>
                    {this.state.roommates.map(roommate => (
                        <Roommate key={roommate.key} roommate={roommate} />
                    ))}
                </ul>
                <button>Add Roommate</button>
            </div>
        );
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
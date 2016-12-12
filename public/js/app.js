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
            </li>
        );
    }
}

class Expense extends React.Component {

    render() {
        return (
            <li>
                {this.props.expense.item}: {this.props.expense.ammount}
            </li>
        );
    }
}



class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            roommates: [{
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
            }]
        };
    }

    render() {
        return (
            <div>
                <h3>TODO</h3>
                <ul>
                    {this.state.roommates.map(roommate => (
                        <Roommate key={roommate.key} roommate={roommate} />
                    ))}
                </ul>
            </div>
        );
    }
}

ReactDOM.render(<App />,  document.getElementById("content"));
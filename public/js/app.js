class Roommate extends React.Component {

    render() {
        return (
            <li>
                {this.props.roommate.name}
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
                expense
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
                name: 'john',
                expenses: [{
                    key: 1
                    item: "rent",
                    ammount: 200
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
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={this.state.text} />
                    <button>{'Add #' + (this.state.roommates.length + 1)}</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<App />,  document.getElementById("content"));
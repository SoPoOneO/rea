var Sect = React.createClass({
    render: function(){
        return (
            <div>sect</div>
        );
    }
});


var App = React.createClass({
    getInitialState: function(){
        return {
            active: true
        }
    },
    handleClick: function(){
        this.setState({
            active: !this.state.active
        });
    },
    render: function(){
        var buttonSwitch = this.state.active ? "On" : "Off";
        return (
            <div>
                <Sect />
                <Sect />
                <p>Click the button!</p>
                <input type="submit" onClick={this.handleClick} />
                <p>{buttonSwitch}</p>
            </div>
        );
    }
});
React.render(<App />,  document.getElementById("content"));
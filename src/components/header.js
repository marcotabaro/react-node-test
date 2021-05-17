class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //something
        }
    }
    //Function, change of state, etc.
    //EX1
    toggleVisibility() {
        this.setState(state => {
          if (state.visibility === true) {
             return { visibility: false };
           } else {
             return { visibility: true };
          }
        });
      }

      //EX2
      toggleVisibility() {
        this.setState(state => ({
          visibility: !state.visibility
        }));
      }
    render () {
        return(
            <div>
                <h1> test</h1>
                <MyStatelessComponent />
                <MyStatefulComponent />
            </div>
        );
    };
};


MyStatelessComponent = (props) => {

}


class ControlledInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: ''
      };
    this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
      this.setState({
        input: event.target.value
      })
    }
    render() {
      return (
        <div>
          <input value= {this.state.input} onChange={this.handleChange.bind(this)}/>
          <h4>Controlled Input:</h4>
          <p>{this.state.input}</p>
        </div>
      );
    }
  };

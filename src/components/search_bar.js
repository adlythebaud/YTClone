// we import react because whenever we export a call to a function, it turns into
// React.createElement(<input />)
import React, { Component } from 'react';


// class SearchBar extends Component {
//
// 	constructor(props) {
// 		super(props);		// override props. Use this if we want to access this.props.
// 		this.state = {term: "" };
// 	}
//
// 	onInputChange(term) {
// 		// console.log(event.target.value);
// 		this.setState({term});
// 		this.props.onSearchTermChange(term);
//
// 	}
//
// 	render() {
// 		// put variables in the render function... because variables go in functions.. no globals...
// 		// <input onChange={event => this.onInputChange(event.target.value)} />
//
// 		return (
// 			<div>
// 				<input
// 					value={this.state.term}
// 					onChange={event => this.onInputChange(event.target.value)} />
// 				<br />
// 				{/* Only this.state.term can be rendered in the DOM like below. Keep this for reference. */}
// 				Value of the input: {this.state.term}
// 				<br />
// 			</div>
// 		);
// 	}
//
//
// }
//
// export default SearchBar;

class SearchBar extends Component {
	/*
		This is a function.
		Declare an event handler, then pass event handler to a monitor for whenever handler occurs.
	*/
	onInputChange(event) {
		console.log("The input changed!");
		console.log(event);
		console.log(event.target.value);
	}

	constructor(props) {
		// constructor function is reserved for doing class set up, like initializing variables and state.
		super(props);
		this.state = { term: 'Hello, World!',
	 								 number: ''
								 };

		// first definition of state, and the state has a term....
		// whenever we use state, we create a new object (term), and assign it to the class's state with this.state.
		/*
			What is "State"?
			State is a plain JavaScript object used to record and react to user events.
			Each class based component that we define has it's own state object.
			If SearchBar had some text, and it changed, it's state would change and
			it's render method would be called to re-render.
			Any component or item changing in code tells the state to change.

			To use state:
			- Initialize state. Set the property state to a plain JS object inside the class's constructor method.

		*/
	}


	render() {
		return (
			<div>
				{/*Controlled components*/}
				<input
					value = {this.state.term}
					onChange={event => (
						this.setState({term: event.target.value}),
						console.log(this.state.term)
					)}
				/>

			</div>
		);
	}
}

export default SearchBar;

/*
<h3>First Input Field</h3>
<input onChange={this.onInputChange} />
<h3>Second Input Field, using this.setState</h3>
<input onChange = {event => this.setState({ term: event.target.value, number: 5 })} />
<br />
Value of the input: {this.state.term}
<br />
Value of number: {this.state.number}
<br />
<h3>Third Input Field</h3>
<input onChange = {this.onInputChange} />
<h3>Fourth Input Field</h3>
<input onChange={event => console.log("test from search_bar.js")} />
<h3>Fifth Input Field</h3>
*/

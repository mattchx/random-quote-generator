import React, { Component } from 'react';
import './App.css';
import 'typeface-roboto';
import QuoteGenerator from './components/QuoteGenerator';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: null
    }
    //if a function uses this. -> we need to bind here to the construtor 
    this.selectQuoteIndex = this.generateNewQuoteIndex.bind(this);
    this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
  }
  // ###PROPS###
  // set state needs to been done on a single line as this function is asynchronous
  componentDidMount() {
    fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
      .then(data => data.json())
      .then(quotes => this.setState({ quotes },this.assignNewQuoteIndex)); //quotes:quotes object array 
  }

  get selectedQuote() { // can call this function as if it were a variable
    if (!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)) {
      return; //undefined
    }
    return this.state.quotes[this.state.selectedQuoteIndex];
  } //returning the quote at the desired index
/** 
* Returns an integer representing an index in state.quotes
**/
  generateNewQuoteIndex() {
    if (!this.state.quotes.length) {
      return; // undefined
    }
    return Math.floor(Math.random() * this.state.quotes.length - 1) + 1;
  }

  assignNewQuoteIndex() {
    this.setState({selectedQuoteIndex : this.generateNewQuoteIndex() });
  }

  // render is run once state is updated
  render() {
    return (
      <div className="App" id="quote-box">
        <QuoteGenerator selectedQuote={this.selectedQuote} assignNewQuoteIndex={this.assignNewQuoteIndex}/>
      </div>
    );
  }
}

export default App;

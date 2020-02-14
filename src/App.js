import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: null
    }
    //if a function uses this. -> we need to bind here to the construtor 
    this.selectQuoteIndex = this.selectQuoteIndex.bind(this);
  }

  // set state needs to been done on a single line as this function is asynchronous
  componentDidMount() { 
    fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
      .then(data => data.json())
      .then(quotes => this.setState({ quotes }, () => {
        this.setState({selectQuoteIndex: this.selectQuoteIndex() })
      })); //quotes:quotes object array 
  } 

//get SelectedQuote () { // can call this function as if it were a variable
 // if (!this.state.quotes.length || !Number.isInteger(this.state.quotes.length)){
  //  return undefined;
 // }
  // returning the quote at the desired index
 // return this.state.quotes[this.state.selectedQuoteIndex];
//}

  selectQuoteIndex() {
      if (!this.state.quotes.length) {
        return; // undefined
      }
      return Math.floor(Math.random() * this.state.quotes.length-1) + 1;
  }

  // render is run once state is updated
  render() { 
    //console.log(this.state.selectQuoteIndex)
    return (
      <div className="App" id="quote-box">
        {/*this.selectedQuote.quote? this.state.selectedQuote.quote : ''*/}
        <Button diplayButtonName="Click me" clickHandler={this.nextQuoteClickHandler} />
      </div>
    );
  }
}

export default App;

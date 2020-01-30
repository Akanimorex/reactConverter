import React, {Component} from 'react';
import './App.css';
import Footer from './Footer';







class App  extends Component {

constructor(props){
  super(props);
  this.state={
    dollars : '',
    naira : ''
  }
}

convert=()=>{
   this.setState({naira:this.state.dollars * 362});
}

handleChange =(event)=>{
  console.log(event.target.value);
  (this.setState({dollars: event.target.value}))
}






  render (){

    return(
    <div className="App">

      <div className='Card'>
        <h3 style={{color:'white',fontStyle:'italic'}}>CONVERTER</h3>
        
        <input type='number' placeholder='Amount in dollars' value={this.state.dollars}  onChange={this.handleChange}  />

        <input type='number' placeholder='Naira Equivalent' value={this.state.naira}  readOnly />

        <input type='submit' value='Convert' onClick={this.convert} />

        
      </div>
        <Footer/>
      
    </div>
    );
  }

}

export default App;

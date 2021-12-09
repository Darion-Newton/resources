import React, { Component } from 'react';

class Formpress extends Component {

  constructor(props) {
    super(props)
  
      this.state = {
        toggle: true };
      this.clickHandler = this.clickHandler.bind(this)
  
  }

  clickHandler(){
    this.setState(prevState => ({
      
      toggle: !prevState.toggle
  }));
  
  console.log(this)
  }
  
  render() {
    return (
      <div className="lg:flex">

          
          <div className="flex-grow justify-center  px-8 lg:px-20 py-20 lg:py-48">

          <div className={this.state.toggle ? ' hidden':
                   'uppercase px-8 py-4 shadow-sm rounded inline-block mt-8 font-semibold text-white ' }>
<div class="bg-blue-100 border-t-4 border-blue-500 rounded-b text-blue-900 px-4 py-3 shadow-md" role="alert">
  <div class="flex">
    <div class="py-1"><svg class="fill-current h-6 w-6 text-blue-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
      <span className="font-bold ">File Name</span>
      <div className="py-8">
      <span className="text-sm inline-block">  <button className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded" type="button"  onClick={this.clickHandler}>
   Download
    </button> </span>
    <span className="text-sm inline-block"> <button className="flex-shrink-0 border-transparent border-4 text-blue-500 hover:text-blue-800 text-sm py-1 px-2 rounded " type="button" onClick={this.clickHandler} >
      Cancel
    </button>   </span>
</div>
  </div>
</div>
                    </div>
                    <div className=' right-0 md:block md:relative w-full md:w-auto '>
               
                 <div className="w-full md:bg-transparent rounded shadow-lg px-6 py-4 mt-4 text-center md:p-0 md:mt-0 md:shadow-none">
                 
                 
                 <div className="md:flex items-center">
               
              
          <div className= {this.state.toggle ? 'flex justify-center bg-white p-8 border rounded ': 'hidden'}>

 
             
              
          <form name="contact">

          <h2 className="text-xl text-center lg:text-xl font-medium mb-1 text-gray-700">Get your Free resource template!</h2>
          
  <div className="flex items-center border-b border-blue-500 py-2">
    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Jane Doe" aria-label="Full name"/>
    <button className="block flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded" type="button"  onClick={this.clickHandler}>
      Sign Up
    </button>

  </div>
</form>
          </div>
        </div>
      </div>
      
      </div>
        </div>
      </div>
      
  
    )
  }
}

export default Formpress
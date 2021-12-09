import React, { Component } from 'react';
class Formconst extends Component {

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

                    <div class="bg-blue-100 border-t-4 border-blue-500 rounded-b text-blue-900 px-4 py-3 shadow-md flex">
                        <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" >
                        </div>
                    <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div class="mb-8">
                                <p class="text-sm text-gray-600 flex items-center">
                                    <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                    </svg>
                                YOUR NAME
                                </p>
                                    <div class="text-gray-900 font-bold text-xl mb-2">Preview of file</div>
                            <p class="text-gray-700 text-base">Addtional tips to help your customers!</p>
                        </div>
                        <span className="font-bold ">File Name</span>
                            <div className="py-8">
                                <span className="text-sm inline-block"><button className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded" type="button"  onClick={this.clickHandler}>
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
                     <div className="flex justify-center">
            <div>
                    <h2 className="text-xl lg:text-xl font-medium mb-1 text-gray-700">Get your Free resource template!</h2>

                    <form name="contact" >
                        <div class="mb-4">

                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Email
                        </label>

                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter email"/>
                        </div>
                    </form>
                    <div class="flex items-center justify-between">


<button onClick={this.clickHandler} type="submit" id="submit-button"
    className=" w-full font-semibold bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Submit
    </button>
    
</div>
                 </div>
                 

                </div>

                    </div>
                
                </div>   

            </div>
     
        
       
     </div>
     </div>
   </div>

  
    )
  }
}

export default Formconst
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {

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

      
      
          <div className={this.state.toggle ? ' flex-grow justify-center text-center py-4 lg:px-4' : 'hidden'} >
      <div className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
       
        <button onClick={this.clickHandler}
                     >  <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3"> Click me<svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg> </span> </button>
    
      </div>



    </div>
    

<div className=' right-0 md:block md:relative w-full md:w-auto '>
               
               
                  <div className="w-full md:bg-transparent rounded shadow-lg px-6 py-4 mt-4 text-center md:p-0 md:mt-0 md:shadow-none">
                    
                    
                    <div className="md:flex items-center"> 
               
                 

                      
    <div className={this.state.toggle ?  'hidden' : "flex-grow justify-center bg-white px-8 lg:px-20 py-20 lg:py-48" }>
       <div className="flex justify-center">
            <div>
              <h3 className="text-xl lg:text-xl font-medium mb-1 text-gray-700">Download our free and easy expense report template today <span></span>by completing one simple action! </h3>
              <span className="text-sm mb-4 text-gray-400"> Sign up </span>
         </div>
         
         
         <div>
              <form name="contact"  autocomplete="off" >
       
                <input type="hidden" name="form-name" value="contact"/>


                  <div className="input-animated">
                    <input type="email" id="email" name="email" required placeholder="the placeholder" />
                      <label htmlFor="email" className="label-email"><span className="content-email">Email</span></label>
                  </div>
           
             
                <button onClick={this.clickHandler} type="submit" id="submit-button"
                  className="w-full font-semibold rounded-tl-3xl rounded-br-3xl uppercase text-center px-5 py-3 shadow-md my-4 lg:mb-0 bg-gray-900 text-yellow-50 hover:bg-gray-700 focus:ring-4 focus:ring-yellow-300">Get Free Resource</button>
        
      
              </form>
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

export default Landing
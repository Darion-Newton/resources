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
                   

<div className="w-full">                

<section
            class="relative bg-gradient-to-r from-indigo-700 to-purple-400  px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-8">
            <div class="flex flex-col lg:flex-row items-center justify-between">
                <h2 class="text-2xl font-bold text-white">Download Our Free & Easy Expense Report Template Today <div></div><span className="text-yellow-200">By Completing One Simple Action!</span></h2>
         
                <form name="seo_contact" 
                    class="flex items-center mt-6 w-full md:w-auto">
            
                    <div class="w-full md:w-80">
                        <div class="relative">
                            

                            
                
                        <input
                                class="appearance-none block w-full bg-purple-200 text-purple-700 border border-purple-200 rounded py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                type="email" placeholder="Enter Your Email Address.." required/>
    
    <button type="submit"
                                class="m-auto uppercase appearance-none block w-full px-4 py-4 text-sm font-bold rounded top-0 right-0 my-2 mr-2 bg-purple-500 text-purple-50 hover:bg-purple-300">Download</button>
                        </div>
             </div>
                </form>

                
            </div>
            


            
        </section>

      </div>

      

                
      


      
      
  
    )
  }
}

export default Landing
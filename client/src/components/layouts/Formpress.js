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
            class="relative bg-gradient-to-r from-indigo-500 to-purple-400  px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-8">
            <div class="flex flex-col lg:flex-row items-center justify-between">
                <h2 class="text-2xl font-bold text-white">Our FREE  Easy Expense Report Template Is Here To Help!</h2>
         
                <form name="seo_contact" 
                    class="flex items-center mt-6 w-full md:w-auto">
                    <p class="hidden">
                        <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
                    </p>
                    <div class="w-full md:w-80">
                        <div class="relative">
                            <input
                                class="appearance-none block w-full bg-purple-200 text-purple-700 border border-purple-200 rounded py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                type="email" placeholder="Enter Your Email Address.." required/>

                           
                                
                        </div>
                        
                    </div>
              
                        <div class="relative">
                            

                            <button type="submit"
                                class="m-auto uppercase appearance-none block w-full px-4 py-4 text-sm font-bold rounded top-0 right-0 my-2 mr-2 bg-purple-500 text-purple-50 hover:bg-purple-700">Download</button>
                            <span id="success"
                                class="hidden mt-2 px-4 py-2 font-medium border rounded-sm border-purple-500 bg-purple-100 text-purple-600">Enjoy!</span>
                            <span id="error"
                                class="hidden mt-2 px-4 py-2 font-medium border rounded-sm border-red-500 bg-red-100 text-red-600">Whoops...
                                Something went wrong.</span>
                                
                        </div>
             
                </form>

                
            </div>
            
            <span class="inline-block w-full mt-4 text-center lg:mt-0 lg:text-left font-medium text-purple-200">Download our <a href="tel:0823253551" class="underline">free & easy</a> <span class="font-bold italic text-purple-100">Expense Report Template </span>today by completing one simple action!</span>

            
        </section>

      </div>

      

                
      


      
      
  
    )
  }
}

export default Landing
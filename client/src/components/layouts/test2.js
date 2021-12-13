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
            class="relative bg-purple-900 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-8">
            <div class="flex flex-col lg:flex-row items-center justify-between">
                <h2 class="text-2xl font-bold text-white">Download Our Free & Easy Expense Report Template Today <div></div><span className="text-yellow-200">By Completing One Simple Action!</span></h2>
         
                <form name="seo_contact" 
                    class="flex items-center mt-6 w-full md:w-auto">
            
            <div class="w-full md:w-80">
                        <div class="relative">
                            <input
                                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                type="email" placeholder="Email address..." required/>

                            <button type="submit"
                                class="uppercase px-4 py-2 text-sm font-bold rounded absolute top-0 right-0 my-2 mr-2 bg-indigo-900 text-indigo-50 hover:bg-indigo-700">DOWNLOAD
                                </button>
                            <span id="success"
                                class="hidden mt-2 px-4 py-2 font-medium border rounded-sm border-green-500 bg-green-100 text-green-600">Thanks!
                                We'll be in touch soon.</span>
                            <span id="error"
                                class="hidden mt-2 px-4 py-2 font-medium border rounded-sm border-red-500 bg-red-100 text-red-600">Whoops...
                                Something went wrong.</span>
                        </div>
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
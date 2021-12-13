import React, { Component } from 'react';


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
            class="relative bg-matching px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-8">
            <div class="flex flex-col lg:flex-row items-center justify-between">
                <h2 class="text-2xl font-bold text-white">Download Our Free & Easy Expense Report Template Today <div></div><span className="text-yellow-200">By Completing One Simple Action!</span></h2>
         
                <form name="seo_contact" 
                    class="flex items-center mt-6 w-full md:w-auto">
            
            <div class="w-full md:w-80">
                        <div class="relative">

                        <input
                                class="appearance-none block w-full bg-indigo-200 text-indigo-700 border border-indigo-200 rounded py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
                                type="email" placeholder="Enter Your Email Address.." required/>

                        <button type="submit"
                                class="m-auto uppercase appearance-none block w-full px-4 py-4 text-sm font-bold rounded top-0 right-0 my-2 mr-2 bg-indigo-900 text-indigo-50 hover:bg-indigo-300">Download</button>
                            <span id="success"
                                class="hidden mt-2 px-4 py-2 font-medium border rounded-sm border-indigo-500 bg-indigo-100 text-indigo-600">Enjoy!</span>
                            <span id="error"
                                class="hidden mt-2 px-4 py-2 font-medium border rounded-sm border-red-500 bg-red-100 text-red-600">Whoops...
                                Something went wrong.</span>
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
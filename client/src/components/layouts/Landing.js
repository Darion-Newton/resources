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
                <h2 class="text-2xl font-bold text-white font-sans">Download Our Free & Easy Expense Report Template Today <div></div><span className="text-cta">By Completing One Simple Action!</span></h2>
         
                <form name="seo_contact" 
                    class="flex items-center mt-6 w-full md:w-auto">
            
            <div class="w-full md:w-80">
                        <div class="relative">

                        <input
                                class="appearance-none  w-full bg-gray-200 text-green-900 border border-green-200 rounded py-4 px-4 leading-tight focus:outline-none focus:bg-gray-600 focus:border-green-500"
                                type="email" placeholder="Enter Your Email Address.." required/>

                        <button type="submit"
                                class="uppercase appearance-none w-full px-4 py-4 text-md font-bold rounded my-2 mr-2 bg-button bg-button2 font-sans font-light border-4 hover:bg-green-600 ">   <div class=" inline-block rounded-full bg-white mx-2 "><i class=" px-1.5 py-1 fas fa-arrow-right"></i> </div>Download </button>
                            <span id="success"
                                class="hidden mt-2 px-4 py-2 font-medium border rounded-sm border-green-500 bg-green-100 text-green-600">Enjoy!</span>
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
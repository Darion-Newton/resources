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
          <div className="flex justify-center" className={this.state.toggle ? ' hidden':
                   'uppercase px-8 py-4 shadow-sm rounded inline-block mt-8 font-semibold hover:bg-blue-500 bg-blue-600 text-white ' }>
                   <h2 className="text-xl lg:text-xl font-medium mb-1 text-gray-700 text-center">Click here for your excellent free file</h2>
              <span className="text-sm mb-4 text-gray-400">Pop me a message and let's connect.</span>
                    </div>
                    <div class="bg-indigo-900 text-center py-4 lg:px-4">
  <div class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
    <span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">File Name</span>
    <span class="font-semibold mr-2 text-left flex-auto">Click here for your excellent free file </span>
    <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
  </div>
</div>
                <div id="nav_content" className={this.state.toggle ? 'absolute right-0  md:block md:relative w-full md:w-auto ':
                   'absolute hidden right-0 md:block md:relative w-full md:w-auto ' }>
                  <nav
                    className="w-full bg-white md:bg-transparent rounded shadow-lg px-6 py-4 mt-4 text-center md:p-0 md:mt-0 md:shadow-none">
                    <ul className="md:flex items-center">
                    <div className="flex-grow justify-center bg-white px-8 lg:px-20 py-20 lg:py-48">
          <div className="flex justify-center">
            <div>
              <h2 className="text-xl lg:text-xl font-medium mb-1 text-gray-700">Super fantastic call to action</h2>
              <span className="text-sm mb-4 text-gray-400">Connect today!.</span>
          
              <form name="contact" data-netlify="true" netlify-honeypot="bot-field" method="POST" autocomplete="off" >
                <p className="hidden">
                  <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
                </p>
                <input type="hidden" name="form-name" value="contact"/>
                <div className="input-animated">
                  <input type="text" id="name" name="name" required pattern="\S+.*" placeholder="the placeholder" />
                  <label htmlFor="name" className="label-name"><span className="content-name">Name</span></label>
                </div>
                <div className="input-animated">
                  <input type="email" id="email" name="email" required placeholder="the placeholder" />
                  <label htmlFor="email" className="label-email"><span className="content-email">Email</span></label>
                </div>
                <div>
                </div>
                <div data-netlify-recaptcha="true"></div>
                <button onClick={this.clickHandler} type="submit" id="submit-button"
                  className="w-full font-semibold rounded-tl-3xl rounded-br-3xl uppercase text-center px-5 py-3 shadow-md my-4 lg:mb-0 bg-gray-900 text-yellow-50 hover:bg-gray-700 focus:ring-4 focus:ring-yellow-300">Send
                  Message</button>
                <span id="success"
                  className="hidden absolute mt-2 px-4 py-2 font-medium border rounded-sm border-green-500 bg-green-100 text-green-600">Thanks!
                  We'll be in touch soon.</span>
                <span id="error"
                  className="hidden absolute mt-2 px-4 py-2 font-medium border rounded-sm border-red-500 bg-red-100 text-red-600">Whoops...
                  Something went wrong.</span>
      
              </form>
            </div>
          </div>
        </div>
                    </ul>
                  </nav>
                  </div>
        
      </div>
      
      
  
    )
  }
}

export default Landing
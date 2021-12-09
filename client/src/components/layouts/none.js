import React from "react";




const Landing = () => {
    return (
   


<div className="w-full lg:flex bg-black">
<button id="nav_toggle" className="h-8 w-8 md:hidden">
            <svg className="h-full w-auto" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="white"
              viewBox="0 0 256 256">
              <rect width="256" height="256" fill="none"></rect>
              <line x1="40" y1="128" x2="216" y2="128" stroke="white" stroke-linecap="round" stroke-linejoin="round"
                stroke-width="16"></line>
              <line x1="40" y1="64" x2="216" y2="64" stroke="white" stroke-linecap="round" stroke-linejoin="round"
                stroke-width="16"></line>
              <line x1="40" y1="192" x2="216" y2="192" stroke="white" stroke-linecap="round" stroke-linejoin="round"
                stroke-width="16"></line>
            </svg>
          </button>

          <div id="nav_content" className={this.state.toggle ? ' hidden absolute right-0 hidden md:block md:relative w-full md:w-auto ':
             'absolute right-0 hidden md:block md:relative w-full md:w-auto ' }>
            <nav
              className="w-full bg-white md:bg-transparent rounded shadow-lg px-6 py-4 mt-4 text-center md:p-0 md:mt-0 md:shadow-none">
              <ul className="md:flex items-center">
              <div className="flex-grow justify-center bg-white px-8 lg:px-20 py-20 lg:py-48">
    <div className="flex justify-center">
      <div>
        <h2 className="text-xl lg:text-xl font-medium mb-1 text-gray-700">Looking for a developer?</h2>
        <span className="text-sm mb-4 text-gray-400">Pop me a message and let's connect.</span>
    
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
            <textarea name="question" placeholder="Your Question" id="question" cols="30" rows="5" minLength="10"
              maxLength="100" required></textarea>
          </div>
          <div data-netlify-recaptcha="true"></div>
          <button type="submit" id="submit-button"
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

export default Landing
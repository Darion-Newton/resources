import React from "react";


const Resource = () => {
    return (
        <div>
     

     <div className="flex items-center ml-3">
            <a href="/">
 <h1 className="logo">pixel.<span className="font-semibold ">ARRAY</span></h1>
 <p className="text-xs text-bold font-semibold uppercase text-center text-gray-900">Web - Digital Marketing - SEO</p>
            </a>
          </div>
          <div className="inline-block h-8 mr-3 lg:hidden">
            <button id="nav_toggle" class="h-full  w-full" onClick={this.clickHandler}>
            <div></div>
            <svg class="h-full w-auto" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#4B5563"
              viewBox="0 0 256 256">
              <rect width="256" height="256" fill="none"></rect>
              <line x1="40" y1="128" x2="216" y2="128" stroke="#4B5563" stroke-linecap="round" stroke-linejoin="round"
                stroke-width="16"></line>
              <line x1="40" y1="64" x2="216" y2="64" stroke="#4B5563" stroke-linecap="round" stroke-linejoin="round"
                stroke-width="16"></line>
              <line x1="40" y1="192" x2="216" y2="192" stroke="#4B5563" stroke-linecap="round" stroke-linejoin="round"
                stroke-width="16"></line>
            </svg>
          </button>
            </div>
          <div id="nav_content"
            className={this.state.toggle ? ' w-full hidden py-8 lg:flex lg:w-auto lg:py-0 lg:items-center rounded-br-full shadow-md lg:shadow-none bg-blue-5' :
             ' w-full  py-8 lg:flex lg:w-auto lg:py-0 lg:items-center rounded-br-full shadow-md lg:shadow-none bg-blue-5' }>
            <ul className="flex flex-col ml-auto text-md text-gray-700 font-semibold lg:flex-row">
              <li className="mx-6 w-mc hover:text-white mb-4 lg:mb-0 "><Link to="/report"> Free Website Report</Link></li>
              <li className="mx-6 w-mc hover:text-white mb-4 lg:mb-0 "><Link to="/contact"> Contact</Link> </li>
            </ul>
          </div>




          </div>
    



    )
}

export default Resource
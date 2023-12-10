import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <div>
      <section className="page_404  w-full">
	<div className="container flex items-center justify-center h-[50vh]">
		<div className="row">	
		<div className="col-sm-12 ">
		<div className="col-sm-10 col-sm-offset-1  text-center">
		<div className="four_zero_four_bg">
			<h1 className="text-center text-9xl ">404</h1>
		
		
		</div>
		
		<div className="contant_box_404">
		<h3 className="h2 text-2xl">
		Look like you're lost
		</h3>
		
		<p>the page you are looking for not avaible!</p>
		
		<NavLink to="/" className="link_404 text-slate-100">Go to Home</NavLink>
	</div>
		</div>
		</div>
		</div>
	</div>
</section>
    </div>
  )
}

export default Error

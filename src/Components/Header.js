import React from 'react';
import { Link } from "react-router-dom";

class Header extends React.Component {
	render(){
		return(
			<div className='px-8 py-8 shadow-md'>
				<div className='w-full flex items-center'>
					<div className='flex-1 flex items-center'>
						<Link to="/" className='w-full px-3'>
							<h1 className='text-2xl font-bold'>News App</h1>
						</Link>
					</div>
					
					<div className='flex-1 flex justify-end items-center'>
						<Link to="/category/business" className='px-3'>Business</Link>
						<Link to="/category/entertainment" className='px-3'>Entertainment</Link>
						<Link to="/category/health" className='px-3'>Health</Link>
						<Link to="/category/science" className='px-3'>Science</Link>
						<Link to="/category/sports" className='px-3'>Sports</Link>
						<Link to="/category/technology" className='px-3'>Technology</Link>
					</div>
				</div>
			</div>
		)
	}
}

export default Header;
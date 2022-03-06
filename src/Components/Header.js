import React from 'react';
import { Link } from "react-router-dom";
import SearchBar from './SearchBar'

class Header extends React.Component {
	render(){
		return(
			<div className='px-10 py-8 shadow-md'>
				<div className='w-full flex items-center'>
					<div className='flex-none items-center px-3 pr-3'>
						<Link
							to="/" 
							className='w-full'
						>
							<h1 className='text-3xl font-bold'>News App</h1>
						</Link>
					</div>

					<SearchBar />
					
					<div className='flex justify-end items-center'>
						<Link
							to="/category/business" 
							className='px-5 font-semibold hover:bg-red-200 rounded-xl'
						>
								Business
						</Link>
						<Link 
							to="/category/entertainment" 
							className='px-5 font-semibold hover:bg-pink-200 rounded-xl'
						>
							Entertainment
						</Link>
						<Link 
							to="/category/health" 
							className='px-5 font-semibold hover:bg-green-200 rounded-xl'
						>
							Health
						</Link>
						<Link 
							to="/category/science" 
							className='px-5 font-semibold hover:bg-purple-200 rounded-xl'
						>
							Science
						</Link>
						<Link 
							to="/category/sports" 
							className='px-5 font-semibold hover:bg-blue-200 rounded-xl'
						>
							Sports
						</Link>
						<Link 
							to="/category/technology" 
							className='px-5 font-semibold hover:bg-yellow-200 rounded-xl'
						>
							Technology
						</Link>
					</div>
				</div>
			</div>
		)
	}
}

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';

class Search extends React.Component{
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  handleSubmit(event){
    event.preventDefault();
  }

  render(){
    return(
      <div className='px-5 items-center xl:w-full xl:visible block'>
        <form className='flex w-full' onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text" 
            name='searchinput'
            value={this.state.value} 
            onChange={this.handleChange.bind(this)}
            placeholder='Zoek'
            className='border border-gray-200 rounded-lg w-full px-2 py-1'
          />

          <Link to={`/search/${this.state.value}`}>
            <button type='submit' className='pl-4'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </Link>
        </form>
      </div>
    )
  }
}

export default Search
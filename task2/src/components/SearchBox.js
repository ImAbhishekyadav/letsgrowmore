import React from 'react';

const SearchBox=({searchfeild, searchChange})=>{
    return(
            <div className='pa2'>
                <input style={{backgroundColor:"rgba(119,139,254,0.38)"}}
                className='search_box pa3 ba b--white'
                 type="search" 
                 placeholder='Enter Name'
                 onChange={searchChange}/>
            </div>
        );
}

export default SearchBox;

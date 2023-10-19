import React from 'react';

const SearchRes = (props) => {
    const imgSrc =  `https://source.unsplash.com/400x300?${props.name}`;
    return(
        <>
            <div style={{display:'flex',justifyContent:"center",padding:"2rem"}} >
                <img src={imgSrc}/>
            </div>
        </>
    )
}
export default SearchRes;


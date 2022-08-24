import React from 'react';
import '../counter.css';

function Counter({numberClick}) {
    return (
     <div className='counter'>
       {numberClick}
     </div>
    );
}


export default Counter;
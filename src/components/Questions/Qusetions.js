import React from 'react';
import './Questions.css'
const Qusetions = () => {
    return (
        <div className='questions'>
      
            <h1>1. How does react work ?</h1>
            <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>
            <h1>2. Difference between props and state</h1>
            <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components</p>
            <h1>3. Use of useEffect except data loading</h1>
            <p>The motivation behind the introduction of useEffect Hook is to eliminate the side-effects of using class-based components. For example, tasks like updating the DOM, fetching data from API end-points, setting up subscriptions or timers, etc can be lead to unwarranted side-effects.</p>
        
        </div>
    );
};

export default Qusetions;
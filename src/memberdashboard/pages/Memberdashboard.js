import React from 'react';

import NewsList from '../components/LatestNewsList';

const Dash = ()=>{
    const NEWS = [{ id:'1', header: "yada yada yada", body:"yada yada yada"},
                  { id:'2', header: "yo yo yo ", body:"yo yo yo"}]

return (
    <div>
        <h1>Membership Dashboard</h1>
        <NewsList items = {NEWS} />
    </div>
);
};

export default Dash;
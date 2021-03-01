import React from 'react';

import './RepoItem.css';

const RepoItem = (props)=>{
    return(<div className="repo-container">
            <div className = "info-container">
                <div>{props.repotitle}</div>
                <div>{props.repodescription}</div>
                <div>{`http://localhost:5000/${props.downloadlink}`}</div>
            </div>
        </div>
        )
};

export default RepoItem;
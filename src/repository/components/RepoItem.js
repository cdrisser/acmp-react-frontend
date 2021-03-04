import React from 'react';

import './RepoItem.css';

const RepoItem = (props)=>{
    console.log(props)
    return(<div className="repo-container-ind">
            <div className = "info-container">
                <div>{props.repotitle}</div>
                <div>{props.repodescription}</div>
                <div>{`http://localhost:5000/${props.file}`}</div>
            </div>
        </div>
        )
};

export default RepoItem;
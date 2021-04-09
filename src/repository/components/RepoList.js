import React from 'react';

import RepoItem from './RepoItem'

const RepoList = props =>{
    if(props.repo.length===0){
        return(
            <h2>There are no current items in this repository. </h2>
        )
    }
    else{
        return(
            <div>
                {props.repo.map((repoitem)=>(
                    <div className='repo-details' key={repoitem.id}>
                        <RepoItem
                            key={repoitem.id}
                            id={repoitem.id}
                            repotitle = {repoitem.repotitle}
                            repodescription = {repoitem.repodescription}
                            file={repoitem.file}
                            delete = {props.delete}
                        />
                        <hr className='horizline'></hr>
                    </div>
                    )
                )}
            </div>
        )
    }
}
export default RepoList;
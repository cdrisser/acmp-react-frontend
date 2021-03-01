import React from 'react';
import RepoItem from './RepoItem'
const RepoList = props =>{
    if(props.repo.length==0){
        return(
            <h2>There are no current items in this repository. </h2>
        )
    }
    else{
        return(
            <div>
                {props.repo.map((repoitem)=>{
                    <RepoItem
                        key={repoitem.id}
                        repotitle = {repoitem.title}
                        repodescription = {repoitem.description}
                        downloadlink={repoitem.downloadlink}
                    />
                }

                )}
            </div>
        )
    }
}
export default RepoList;
import React from 'react';
import RepoItem from './RepoItem'
const RepoList = props =>{
    console.log(props.repo);
    if(props.repo.length===0){
        return(
            <h2>There are no current items in this repository. </h2>
        )
    }
    else{
        return(
            <div>
                {props.repo.map((repoitem)=>(
                    <RepoItem
                        key={repoitem.id}
                        repotitle = {repoitem.repotitle}
                        repodescription = {repoitem.repodescription}
                        file={repoitem.file}
                    />
                )

                )}
            </div>
        )
    }
}
export default RepoList;
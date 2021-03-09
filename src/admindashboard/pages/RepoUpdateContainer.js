import React, {useState} from 'react';

import UpdateRepo from './UpdateRepo';
import Button from '../../shared/FormElements/Button'
import UpdateNews from './UpdateNews';
import { CSSTransition } from 'react-transition-group';
import './RepoUpdateContainer.css';

const RepoUpdateContainer = props=>{
const[currentUpdate, setCurrentUpdate] = useState('');
    const updateRepo = ()=>{
        setTimeout(()=>{
            setCurrentUpdate('updaterepo');
        },5)
        setCurrentUpdate('');
    }
    const updateNews = ()=>{
        setTimeout(()=>{
            setCurrentUpdate('updatenews');
        },5)
        setCurrentUpdate('');
    }
    
    const updateUsers = ()=>{
        setTimeout(()=>{
            setCurrentUpdate('updateusers');
        },50)
        setCurrentUpdate('');
    }
    const updateProfiles = ()=>{
        setTimeout(()=>{
            setCurrentUpdate('updateprofiles');
        },50)
        setCurrentUpdate('');
    }
    return(
        <React.Fragment>
               <div className='center'>
               <Button onClick={updateRepo}  size={currentUpdate==='updaterepo'&&'big'}>Update Repo</Button>
                <Button onClick={updateNews} size={currentUpdate==='updatenews'&&'big'}>Update News</Button>
                <Button onClick={updateUsers}size={currentUpdate==='updateusers'&&'big'}>UpdateUsers</Button>
                <Button onClick={updateProfiles}size={currentUpdate==='updateprofiles'&&'big'}>Update Profiles</Button>
               </div>
                    <CSSTransition
                        in={!!currentUpdate}
                        mountOnEnter
                        unmountOnExit
                        timeout={200}
                        classNames="repo"
                    >             
                    <div>
                {currentUpdate === 'updaterepo' &&(
                    <UpdateRepo />
                )}
                {currentUpdate === 'updatenews' &&(
                    <UpdateNews/>
                )}
                </div>
                </CSSTransition>
        </React.Fragment>
    )
}

export default RepoUpdateContainer;
import React from 'react';
import IndEvent from '../../events/components/IndEvent'
const EventList = props =>{
    
    if(props.events.length===0){
        return(
            <h2>There are no current events. </h2>
        )
    }
    else{
        return(
            <div className='center' >
                {props.events.map((eventitem)=>(
                    <IndEvent
                        key={eventitem.id}
                        id={eventitem.id}
                        address = {eventitem.address}
                        date={eventitem.date}
                        name = {eventitem.name}
                        type={eventitem.type}
                        description={eventitem.description}
                        cost={eventitem.cost}
                        register={props.register}
                        participants = {eventitem.participants}
                        delete={props.delete}
                    />
                )

                )}
            </div>
        )
    }
}
export default EventList;
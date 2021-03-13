import React from 'react';
import IndEvent from '../../events/components/IndEvent'
const EventList = props =>{
    console.log(props)
    if(props.events.length===0){
        return(
            <h2>There are no current events. </h2>
        )
    }
    else{
        return(
            <div>
                {props.events.map((eventitem)=>(
                    <IndEvent
                        key={eventitem.id}
                        id={eventitem.id}
                        address = {eventitem.address}
                        name = {eventitem.name}
                        type={eventitem.type}
                        description={eventitem.description}
                        cost={eventitem.cost}
                        register={props.register}
                    />
                )

                )}
            </div>
        )
    }
}
export default EventList;
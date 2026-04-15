import React, { createContext, useState } from 'react';

export const FriendTimelineContext = createContext();

 
const TimelineContext = ({children}) => {

    const [friendTimeline, setFriendTimeline] = useState([]);

    const data = {
       friendTimeline, setFriendTimeline,

       };

    return <FriendTimelineContext.Provider value={data}>{children}</FriendTimelineContext.Provider>
};

export default TimelineContext;
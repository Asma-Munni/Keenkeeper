import React, { createContext } from 'react';

const FriendTimelineContext = createContext();

 const data = {name: "munni"}
const TimelineContext = ({children}) => {
    return <FriendTimelineContext.Provider value={data}>{children}</FriendTimelineContext.Provider>
};

export default TimelineContext;
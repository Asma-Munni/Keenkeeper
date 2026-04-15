import React, { useEffect, useState } from 'react';

const UseApps = () => {

    const [friends, setFriends] = useState([]); 
  const [loading, setLoading] = useState(true); 
 
  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
       
      setTimeout(()=>{
          setFriends(data); 
          setLoading(false); 
      },300);
 
      })
      }, []); 

    return {friends, loading};
};

export default UseApps;
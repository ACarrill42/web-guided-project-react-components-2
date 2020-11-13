import React from 'react'
// 👉 1- FriendsList renders several Friend components, import Friend
import Friend from './Friend';

export default function FriendsList(props) {
  console.log("FriendsList props: ", props.nameArray)
  const {nameArray, changeStatus} = props;
  // 👉 2- What data does FriendsList need to do its job? Use destructuring
  return (
    <div className='list-friends container'>
      {nameArray.map((friend) => {
        return <Friend friendData = {friend} key={friend.id}/>
      })}
      {/* 👉 3- We need to loop over the data rendering a Friend as we go */}
      {/* Each friend is going to need a `key` prop and also some other prop with data */}
    </div>
  )
}

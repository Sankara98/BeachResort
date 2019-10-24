import React from 'react'
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import {RoomHighOrderConsumer} from '../Context'
import Loading from './Loading'

function RoomContainer ({context}) {
    const {loading, sortedRooms, rooms} = context;
    if(loading) {
        return  <Loading />
    }
    return ( 
        <>
            <RoomFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />
        </>
    )
}

export default RoomHighOrderConsumer(RoomContainer);
// export default function RoomContainer() {
//     return (
//         <RoomConsumer>
//             {
//                 (value) => {
//                     const {loading, sortedRooms, rooms} = value
//                     if(loading) {
//                         return  <Loading />
//                     }
//                     return ( 
//                         <div>
//                             hello from room container
//                             <RoomFilter rooms={rooms} />
//                             <RoomList rooms={sortedRooms} />
//                         </div>
//                     )
//                 }
//             }
//         </RoomConsumer>

//     )
// }

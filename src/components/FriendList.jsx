import Friend from "./Freind";

function FriendList({friends,onSelection}){
   

    return(
        <ul className="list-none flex flex-col gap- text-[1.8rem] mb-8 w-[40rem]">
            {friends.map((friend) => (
               <Friend friend={friend} key={friend.id} onSelection={onSelection} />

            ))}
        </ul>
    )
}

export default FriendList;
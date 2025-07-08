import Friend from "./Freind";

function FriendList(){
   

    return(
        <ul className="list-none flex flex-col gap-[3.4rem] text-[1.8rem] mb-8 w-[40rem]">
            {friends.map((friend) => (
               <Friend friend={friend} key={friend.id} />

            ))}
        </ul>
    )
}

export default FriendList;
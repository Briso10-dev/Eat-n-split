
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function FriendList(){
    const friends = initialFriends;

    return(
        <ul className="list-none flex flex-col gap-[0.4rem] text-[1.4rem] mb-8">
            {friends.map((friend) => (
                <li className="grid grid-cols-[4.8rem_1fr_auto] items-center gap-x-[1.6rem] p-[1.2rem] rounded-[7px] transition duration-500 hover:bg-lightest"> {friend.name} </li>

            ))}
        </ul>
    )
}

export default FriendList;
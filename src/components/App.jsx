import { useState } from "react";
import FriendList from "./FriendList";
import FormAddFriend from "./FormAddFriend";
import Button from "./Button";
import FormSplitBill from "./FormSplitBill";

function App() {

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

  const[friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  function handleAddFriend(friend){
    setFriends(friends => [...friends, friend]);
    setShowAddFriend(false);
  }

  return (
    <div className="min-h-[66vh] grid grid-cols-[34rem_44rem] gap-x-[4rem] items-start">
      <div className="flex flex-col gap-10 w-[45rem]">
        <FriendList friends={friends} />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <div className="mr-10 self-end">
          <Button onClick={handleShowAddFriend}>
            {showAddFriend ? "Close" : "Add friend"}
          </Button>
        </div>
      </div>

      <FormSplitBill />
    </div>
  )
}

export default App

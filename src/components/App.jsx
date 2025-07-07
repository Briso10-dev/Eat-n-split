import { useState } from "react";
import FriendList from "./FriendList";
import FormAddFriend from "./FormAddFriend";
import Button from "./Button";
import FormSplitBill from "./FormSplitBill";

function App() {

   const [showAddFriend, setShowAddFriend] = useState(false);
    

  return (
    <div className="min-h-[66vh] grid grid-cols-[34rem_44rem] gap-x-[4rem] items-start">
      <div className="flex flex-col gap-10 w-[45rem]">
        <FriendList/>
        <FormAddFriend />
        <div className="self-end"><Button>Add friend</Button></div>
      </div>

      <FormSplitBill />
    </div>
  )
}

export default App

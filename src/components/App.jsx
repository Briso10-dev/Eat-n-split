import FriendList from "./FriendList";
import FormAddFriend from "./FormAddFriend";
import Button from "./Button";

function App() {

  return (
    <div className="min-h-[66vh] grid grid-cols-[34rem_44rem] gap-x-[4rem] items-start">
      <div>
        <FriendList/>
        <FormAddFriend />
        <Button>Add friend</Button>
      </div>
    </div>
  )
}

export default App

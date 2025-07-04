import Button from "./Button";

function FormAddFriend(){
    return(
        <form className="">
            <label>Friend name</label>
            <input type="text" />

            <label htmlFor="">Image URL</label>
            <input type="text" />

        <Button>Add</Button>
        </form>
    )

}

export default FormAddFriend;
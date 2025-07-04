import Button from "./Button";

function FormAddFriend(){
    return(
        <form className="text-[2rem] grid items-center gap-[1.2rem] bg-[#fff4e6] rounded-[1rem] 
             grid-cols-[1fr_1.5fr] mb-[1.6rem] p-[2rem]">
            <label>Friend name</label>
            <input type="text" />

            <label htmlFor="">Image URL</label>
            <input type="text" />

        <Button>Add</Button>
        </form>
    )

}

export default FormAddFriend;
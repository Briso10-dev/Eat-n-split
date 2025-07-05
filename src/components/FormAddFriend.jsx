import Button from "./Button";

function FormAddFriend() {
    return (
        <form className="h-[15rem] text-[1.8rem] flex flex-col items-cente gap-[1.2rem] bg-[#fff4e6] rounded-[1rem] p-[2rem]">
            <div className="flex gap-10">
                <label className="self-start px-[1rem]">Friend name</label>
                <input
                    type="text"
                    className="w-[30rem] h-[3rem] text-[1.4rem] p-[1rem] border border-[#ffa94d] bg-gray-200 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffa94d]"
                />
            </div>
            <div className="flex gap-10">
                <label className="self-start">Image URL</label>
                <input
                    type="text"
                    className="w-[30rem] h-[3rem] text-[1.4rem] p-[1rem] border border-[#ffa94d] bg-gray-200 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffa94d]"
                />
            </div>
            <div className="self-center"><Button>Add</Button></div>
        </form>
    );
}

export default FormAddFriend;

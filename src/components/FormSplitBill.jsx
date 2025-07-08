import Button from "./Button";

function FormSplitBill({ selectedFriend }){
    return(
        <form className="bg-[#fff4e6] ml-[18rem] flex flex-col items-center justify-center gap-[4rem] text-[1.6rem] py-4 w-[52rem]">
            <h2 className="font-bold text-[2.8rem] text-center uppercase">Split a bill with {selectedFriend.name} </h2>
            <div className="flex justify-center items-center gap-[21rem]">
            <label className="self-start">💰 Bill value</label>
                <input
                    type="text"
                    className="w-[13rem] h-[3rem] text-[1.4rem] p-[1rem] border-s-white bg-white  outline-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffa94d]"
                />
            </div>
            <div className="flex justify-center items-center gap-[18rem]">
                <label className="self-start">🧍‍♂️ Your expense</label>
                <input
                    type="text"
                    className="self-end w-[13rem] h-[3rem] text-[1.4rem] p-[1rem] border-s-white bg-white  outline-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffa94d]"
                />
            </div>
            <div className="flex justify-center items-center gap-[15rem]">
                <label className="self-start">👬 {selectedFriend.name} expense</label>
                <input
                    type="text"
                    className="w-[13rem] h-[3rem] text-[1.4rem] p-[1rem] border-s-white bg-white outline-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffa94d]"
                    disabled
                />
            </div>
            <div className="flex gap-[10rem]">
                <label> 🤑 Who is paying the bill</label>
                <select className="bg-white w-[13rem] h-[3rem] rounded-md text-center">
                    <option value="user">You</option>
                    <option value="friend"> {selectedFriend.name} </option>
                </select>
            </div>

                 <div className="self-center"><Button>Add</Button></div>
        </form>
    )
}

export default FormSplitBill;
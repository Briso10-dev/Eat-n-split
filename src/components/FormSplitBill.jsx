import Button from "./Button";

function FormSplitBill({ selectedFriend }){
    return(
        <form className="bg-[#fff4e6] translate-x-[18rem] flex flex-col gap-[4rem] text-[1.6rem] px-6 py-4 w-[53rem]">
            <h2 className="font-bold text-[2.8rem] text-center  uppercase">Split a bill with {selectedFriend.name} </h2>
            <div className="flex items-center gap-[10rem]">
            <label className="self-start">💰 Bill value</label>
                <input
                    type="text"
                    className="w-[30rem] h-[3rem] text-[1.4rem] p-[1rem] border-s-white bg-white  outline-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffa94d]"
                />
            </div>
            <div className="flex  items-center gap-[7rem]">
                <label className="self-start">🧍‍♂️ Your expense</label>
                <input
                    type="text"
                    className="w-[30rem] h-[3rem] text-[1.4rem] p-[1rem] border-s-white bg-white  outline-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffa94d]"
                />
            </div>
            <div className="flex  items-center gap-[8rem]">
                <label className="self-start">👬 X's expense</label>
                <input
                    type="text"
                    className="w-[30rem] h-[3rem] text-[1.4rem] p-[1rem] border-s-white bg-white outline-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffa94d]"
                    disabled
                />
            </div>
            <div className="flex gap-[11rem]">
                <label>💰 Who is paying the bill</label>
                <select className="bg-white w-[18rem] text-center">
                    <option value="user">You</option>
                    <option value="friend">X</option>
                </select>
            </div>

                 <div className="self-center"><Button>Add</Button></div>
        </form>
    )
}

export default FormSplitBill;
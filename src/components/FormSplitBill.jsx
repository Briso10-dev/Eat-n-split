import { useState } from "react";
import Button from "./Button";

function FormSplitBill({ selectedFriend, onSplitBill }) {
    const [bill, setBill] = useState("")
    const [paidByUser, setPaidByUser] = useState('');
    const paidByFriend = bill ? bill - paidByUser : "";
    const [whoIsPaying, setWhoIsPaying] = useState("user");

    function handleSubmit(e){
        e.preventDefault();

        if(!bill || !paidByUser) return;
        onSplitBill(whoIsPaying === 'user' ? paidByFriend : - paidByUser);
    }

    return (
        <form   
            onSubmit={handleSubmit}
             className="bg-[#fff4e6] ml-[18rem] flex flex-col justify-center gap-[4rem] text-[1.6rem] py-4 w-[50rem]">
            <h2 className="font-bold text-[2.8rem] px-[5rem] uppercase">Split a bill with {selectedFriend.name} </h2>
            <div className="grid grid-cols-[20rem_1fr] items-center gap-[10rem]">
                <label className="self-start px-[4rem]">💰 Bill value</label>
                <input
                    type="text"
                    value={bill}
                    onChange={(e) =>setBill(Number(e.target.value))}
                    className="w-[13rem] h-[3rem] text-[1.4rem] text-center p-[1rem] border-s-white bg-white  outline-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffa94d]"
                />
            </div>
            <div className="grid grid-cols-[20rem_1fr] items-center gap-[10rem]">
                <label className="self-start px-[3.8rem]">🧍‍♂️ Your expense</label>
                <input
                    type="text"
                    value={paidByUser}
                    onChange={(e) => 
                        setPaidByUser(
                        Number(e.target.value) > bill ? paidByUser : 
                        Number(e.target.value)
                    )
                }
                    className="self-end w-[13rem] h-[3rem] text-[1.4rem] text-center p-[1rem] border-s-white bg-white  outline-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffa94d]"
                />
            </div>
            <div className="grid grid-cols-[20rem_1fr] items-center gap-[10rem]">
                <label className="self-start pl-[4rem]">👬 {selectedFriend.name} expense</label>
                <input
                    type="text"
                    value={paidByFriend}
                    className="w-[13rem] h-[3rem] text-[1.4rem] text-center p-[1rem] border-s-white bg-gray-50 outline-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffa94d]"
                    disabled
                />
            </div>
            <div className="grid grid-cols-[20rem_1fr] items-center gap-[10rem]">
                <label className="pl-[4rem] w-[25rem]"> 🤑 Who is paying the bill</label>
                <select 
                    value={whoIsPaying}
                    onChange={(e) => setWhoIsPaying(e.target.value)}
                    className="bg-white w-[13rem] h-[3rem] rounded-md text-center">
                    <option value="user">You</option>
                    <option value="friend"> {selectedFriend.name} </option>
                </select>
            </div>

            <div className="ml-[24rem] self-center"><Button>Split bill</Button></div>
        </form>
    )
}

export default FormSplitBill;
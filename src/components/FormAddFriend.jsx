import { useState } from "react";
import Button from "./Button";

function FormAddFriend({onAddFriend}) {

    const [name,setName] = useState("");
    const [image, setImage] = useState("https://i.pravatar.cc/48");

    function handleSubmit(e){
        e.preventDefault();

        if(!name || !image) return;
        
        const id = crypto.randomUUID();
        const newFriend = {
            id,
            name,
            image : `${image}?=${id}`, 
            balance: 0,
        }

        onAddFriend(newFriend);

        setName('');
        setImage("https://i.pravatar.cc/48");
    }
     
    return (
        <form className="w-[42rem] h-[15rem]  text-[1.8rem] flex flex-col items-cente gap-[1.2rem] bg-[#fff4e6] rounded-[1rem] p-[2rem]"
              onSubmit={handleSubmit}  
        >
            <div className="flex gap-[5rem]">
                <label className="self-start"> 👬 Friend name</label>
                <input
                    type="text"
                    className="w-[20rem] h-[3rem] text-[1.4rem] text-center p-[1rem] border-s-white bg-white  outline-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffa94d]"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="flex gap-[6rem]">
                <label className="self-start">🌄 Image URL</label>
                <input
                    type="text"
                    className="w-[20rem] h-[3rem] text-[1.4rem] text-center p-[1rem] border-s-white bg-white outline-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffa94d]"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
            </div>
            <div className="self-center"><Button>Add</Button></div>
        </form>
    );
}

export default FormAddFriend;

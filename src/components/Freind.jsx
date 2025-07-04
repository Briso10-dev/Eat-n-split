
function Friend({ friend }) {
    return (
        <li className="grid grid-cols-[4.8rem_1fr_auto] items-center gap-x-[2rem] p-[1.2rem] rounded-[1.5rem] transition duration-500 hover:bg-[#fff4e6] h-[7.5rem]">
            <img src={friend.image} alt={friend.name}
                className="rounded-full w-full row-span-1" />
            <h3 className="col-start-2 row-start-1"> {friend.name} </h3>
            {friend.balance < 0 && (
                <p className="col-start-2 row-start-2 text-[#e03131]">
                    You owe {friend.name} {Math.abs(friend.balance)} €
                </p>
            )}
            {friend.balance < 0 && (
                <p className="col-start-2 row-start-2 text-[#66a80f]">
                    {friend.name} owes you {Math.abs(friend.balance)} €
                </p>
            )}
            {friend.balance < 0 && <p className="col-start-2 row-start-2"> You and {friend.name} 
                are even</p>}

            <button className="bg-[#ffa94d] text-[#343a40] px-[1rem] py-[1.2rem] border-none rounded-lg font-bold cursor-pointer transition-colors duration-300 hover:bg-[#ff922b] col-start-3 row-span-2">Select</button>
        </li>
    )
}

export default Friend;
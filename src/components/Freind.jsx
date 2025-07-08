import Button from "./Button";

function Friend({ friend,onSelection }) {
    return (
        <li className="w-[46rem] grid grid-cols-[4.8rem_1fr_auto] items-center gap-x-[2rem] p-[1.2rem] rounded-[1.5rem] transition duration-500 hover:bg-[#fff4e6]">
            <img src={friend.image} alt={friend.name}
                className="rounded-full w-full row-span-2" />
            <h3 className="col-start-2 row-start-1"> {friend.name} </h3>
            {friend.balance < 0 && (
                <p className="col-start-2 row-start-2 text-[#e03131]">
                    You owe {friend.name} {Math.abs(friend.balance)} €
                </p>
            )}
            {friend.balance > 0 && (
                <p className="col-start-2 row-start-2 text-[#66a80f]">
                    {friend.name} owes you {Math.abs(friend.balance)} €
                </p>
            )}
            {friend.balance === 0 && 
                <p className="col-start-2 row-start-2 w-full"> You and {friend.name} are even</p>}

            <Button onClick={() => onSelection(friend)}>Select</Button>  {/* The children rop of this Button */}
           
        </li>
    )
}

export default Friend;
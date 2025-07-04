
function Friend({friend}){
    return(
        <li className="grid grid-cols-[4.8rem_1fr_auto] items-center gap-x-[1.6rem] p-[1.2rem] rounded-[1rem] transition duration-500 hover:bg-[#fff4e6]"> 
            <img src={friend.image} alt={friend.name} 
             className="rounded-full w-full row-span-1"/>
            <h3 className="col-start-2 row-start-1"> {friend.name} </h3>
         </li>
    )
}

export default Friend;
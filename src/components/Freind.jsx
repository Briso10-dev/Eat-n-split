
function Friend({friend}){
    return(
        <li className="grid grid-cols-[4.8rem_1fr_auto] items-center gap-x-[1.6rem] p-[1.2rem] rounded-[1rem] transition duration-500 hover:bg-[#fff4e6]"> {friend.name} </li>
    )
}

export default Friend;

function Button({children,onClick}){
    return (
        <button className="text-[1.6rem] text-center w-[10.2rem] bg-[#ffa94d] text-[#343a40] px-[1rem] py-2 border-none rounded-[1rem] font-bold cursor-pointer transition-colors duration-300 hover:bg-[#ff922b] col-start-3 row-span-2"
                onClick={onClick}
        > {children} 
        </button>
    )

}

export default Button;
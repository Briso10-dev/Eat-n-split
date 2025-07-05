import Button from "./Button";

function FormSplitBill(){
    return(
        <form className="grid grid-cols-[1fr_12rem] px-[3.2rem] py-[4rem]">
            <h2>SPlit a bill with X</h2>

            <label className="self-start">Bill value</label>
                <input
                    type="text"
                    className="w-[30rem] h-[3rem] text-[1.4rem] p-[1rem] border border-[#ffa94d] bg-gray-200 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffa94d]"
                />

                <label className="self-start">Your expense</label>
                <input
                    type="text"
                    className="w-[30rem] h-[3rem] text-[1.4rem] p-[1rem] border border-[#ffa94d] bg-gray-200 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffa94d]"
                />

                <label className="self-start">X's expense</label>
                <input
                    type="text"
                    className="w-[30rem] h-[3rem] text-[1.4rem] p-[1rem] border border-[#ffa94d] bg-gray-200 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffa94d]"
                />

                <Button>Split bill </Button>
        </form>
    )
}

export default FormSplitBill;
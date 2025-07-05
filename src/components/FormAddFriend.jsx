import Button from "./Button";

function FormAddFriend() {
  return (
    <form className="text-[1.8rem] flex flex-col items-center gap-[1.2rem] bg-[#fff4e6] rounded-[1rem] p-[2rem]">
      <label className="self-start">Friend name</label>
      <input
        type="text"
        className="w-full h-[3rem] text-[1.4rem] p-[1rem] border border-[#ffa94d] bg-gray-200 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffa94d]"
      />

      <label className="self-start">Image URL</label>
      <input
        type="text"
         className="w-full h-[3rem] text-[1.4rem] p-[1rem] border border-[#ffa94d] bg-gray-200 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffa94d]"
      />

      <Button>Add</Button>
    </form>
  );
}

export default FormAddFriend;

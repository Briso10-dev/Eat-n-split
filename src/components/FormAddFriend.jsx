import Button from "./Button";

function FormAddFriend() {
  return (
    <form className="text-[1.6rem] flex flex-col gap-[1.2rem] bg-[#fff4e6] rounded-[1rem] mb-[1.6rem] p-[2rem] items-center">
      <label className="self-start">Friend name</label>
      <input
        type="text"
        className="w-full text-[1.4rem] px-[1rem] py-[0.8rem] border border-[#ffa94d] rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffa94d]"
      />

      <label className="self-start">Image URL</label>
      <input
        type="text"
        className="w-full text-[1.4rem] px-[1rem] py-[0.8rem] border border-[#ffa94d] rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffa94d]"
      />

      <Button>Add</Button>
    </form>
  );
}

export default FormAddFriend;

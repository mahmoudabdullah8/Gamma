export default function Btn({text}:{text:string}) {
  return (
    <button
    className="w-full py-3 hover:bg-opacity-80 duration-300 font-semibold rounded-xl text-xl bg-[#01A4AE] text-white my-1"

  >
    {text}
  </button>
  )
}
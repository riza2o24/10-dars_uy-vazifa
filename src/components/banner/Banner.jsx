import { useEffect, useState } from "react"

function Banner() {
    const [user, setUser] = useState([])

    useEffect(() => {
        fetch("https://dummyjson.com/recipes")
        .then(rej => rej.json())
        .then(data => setUser(data.recipes))
        
    }, [])
  return (
    <div className="m-auto w-[2300px] mt-[40px] mb-[40px]">
      <div className=" grid grid-cols-4 gap-[40px]">{user.map(item => (
        <div className="flex  justify-between w-[550px] h-[250px] rounded-[16px] border-2 border-[#c9c9c9]" key={item.id}>
            <img className="w-[250px] h-[248px] rounded-l-[16px]" src={item.image} alt="image" />

            <div className="p-[25px] w-[100%]">
                <div className="flex items-center gap-[10px]">
                  <span className=" text-[#f00] font-[700]">{item.tags[1].toUpperCase()}</span>
                  <p>{item.rating}</p>
                </div>
                <h2 className="text-[20px] font-[600]">{item.name}</h2>
                <p className="font-[400] text-[12px]">{item.instructions.slice(0,2).map(hook => (
                  <p>{hook.slice(0,66)}</p>
                ))}</p>
                <button className="text-[8px] mt-[10px] font-[600] text-[#f00] px-[15px] py-[6px] border-2 border-[#f00]">Save</button>
            </div>
        </div>
      ))}</div>
    </div>
  )
}

export default Banner
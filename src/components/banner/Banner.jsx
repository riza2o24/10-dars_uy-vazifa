import { useEffect, useState } from "react"

function Banner() {
    const [user, setUser] = useState([])

    useEffect(() => {
        fetch("https://dummyjson.com/recipes")
        .then(rej => rej.json())
        .then(data => setUser(data.recipes))
    }, [])
  return (
    <div className="m-auto w-[2300px] mt-[40px]">
      <div className=" grid grid-cols-4 gap-[40px]">{user.map(item => (
        <div className="flex  justify-between w-[550px] h-[250px] rounded-[16px] border-2 border-[#c9c9c9]" key={item.id}>
            <img className="w-[250px] h-[248px] rounded-l-[16px]" src={item.image} alt="image" />

            <div className="p-[30px]">
                <span className="flex items-center gap-[5px]">{item.tags.map(t =>(
                  <p>{t}</p>
                ) )}</span>
                <h2>{item.name}</h2>
                <p className="font-[] text-[12px]">{item.instructions.slice(0,2).map(hook => (
                  <p>{hook}</p>
                ))}</p>
                <p></p>
            </div>
        </div>
      ))}</div>
    </div>
  )
}

export default Banner
import { useEffect, useState } from "react"

function Banner() {
    const [user, setUser] = useState([])

    useEffect(() => {
        fetch("https://dummyjson.com/recipes")
        .then(rej => rej.json())
        .then(data => setUser(data.recipes))
    }, [])
  return (
    <div className="m-auto w-[2800px] mt-[40px]">
      <div className=" grid grid-cols-4 gap-[40px]">{user.map(item => (
        <div className="flex items-center justify-between w-[670px] h-[300px] rounded-[16px] border-2 border-[#c9c9c9]" key={item.id}>
            <img className="w-[300px] rounded-l-[16px]" src={item.image} alt="image" />

            <div className="p-[30px]">
                <h2></h2>
                <p></p>
                <p></p>
            </div>
        </div>
      ))}</div>
    </div>
  )
}

export default Banner
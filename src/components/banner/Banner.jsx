import { useEffect, useState } from "react"

function Banner() {
    const [user, setUser] = useState([])

    useEffect(() => {
        fetch("https://dummyjson.com/recipes")
        .then(rej => rej.json())
        .then(data => setUser(data.recipes))
    }, [])
  return (
    <div className="m-auto w-[1980px] max-[1980px]">
      <div className=" grid grid-cols-4 gap-[40px]">{user.map(item => (
        <div className="flex items-center justify-between" key={item.id}>
            <div>

            </div>

            <img src={item.image} alt="image" />
        </div>
      ))}</div>
    </div>
  )
}

export default Banner
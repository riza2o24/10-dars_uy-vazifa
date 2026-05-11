import { useEffect, useState } from "react"

function Banner() {
    const [user, setUser] = useState([])

    useEffect(() => {
        fetch("")
        .then(rej => rej.json(""))
        .then(data => setUser(data))
    }, [])
  return (
    <div className="m-auto w-[1980px] max-[1980px]:">
      <div>{user.map(item => (
        <div className="flex items-center justify-between" key={item.id}>
            <div>

            </div>

            <img src={item.image} alt="" />
        </div>
      ))}</div>
    </div>
  )
}

export default Banner
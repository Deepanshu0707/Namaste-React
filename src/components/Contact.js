import { useContext } from "react"
import UserContext from "../utils/UserContext"


export default function Contact() {
  const {loginUser} = useContext(UserContext);
  
  return (
    <div className="text-center  mt-60 ">
        <h1 className="font-mono font-semibold text-red-400 text-4xl mb-5">You Can Contact us</h1>
        <h2 className="font-serif text-lg mb-3 text-black">By our instagram and Facebook</h2>
        <p className="font-serif text-lg text-black">Phone Number: 999-999-999</p>
        <p>{loginUser}</p>
    </div>
  )
}

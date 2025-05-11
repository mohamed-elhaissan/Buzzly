import { Link } from "react-router-dom"

const Documentation = () => {
  return (
    <div className="flex items-center justify-center flex-col h-screen text-white codeText">
        <p>Trust me, you don't need it.</p>
        <Link to={"/"} className="text-blue-500 hover:underline">
           Go back
        </Link>
         </div>
  )
}

export default Documentation
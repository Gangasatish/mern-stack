import { useParams } from "react-router-dom"

const User = () => {
    const {brand, product} = useParams();
  return (
    <>
      {/* <div className='text-5xl bg-black text-yellow-500 text-center'>Searching for {id}...</div> */}
        <div className='text-5xl bg-black text-yellow-500 text-center'>You are looking for {brand} {product}</div>
    </>
  )
}

export default User
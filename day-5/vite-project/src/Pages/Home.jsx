import { useOutletContext } from "react-router-dom"

const Home = () => {
  const {name, age, alias, organization} = useOutletContext();
  return (
    <>
    <h1 className='text-5xl text-yellow-600 bg-black text-center'>This is Home Page</h1>
    <div className="card">
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <div>Organization: {organization}</div>
      <div>Alias: {alias}</div>
    </div>
    </>
  )
}

export default Home
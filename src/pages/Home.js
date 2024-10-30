import { Link, useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()

  function navigateHandler() {
    navigate('/products')
  }

    return (
      <>
            <div>Home</div>
        <p>Go to <Link to="/products">Products</Link></p>

        <button onClick={navigateHandler}>Navigate</button>
      </>
    
  )
}

export default Home
import { useParams, Link } from "react-router-dom"

const ProductDetailPage = () => {
  const params = useParams()
  const productId = params.productId
  return (
    <>
      <div>ProductDetailPage</div>
      <p>{productId}</p>
      <p><Link to=".." relative="path">Back</Link></p>
    </>
    
  )
}

export default ProductDetailPage
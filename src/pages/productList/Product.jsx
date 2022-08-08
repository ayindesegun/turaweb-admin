import "./product.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import ProductDatatable from "../../components/datatable/ProductDatatable"

const Product = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <ProductDatatable />
      </div>
    </div>
  )
}

export default Product
import "./orders.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import OrdersDatatable from "../../components/datatable/OrdersDatatable"

const Orders = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <OrdersDatatable />
      </div>
    </div>
  )
}

export default Orders
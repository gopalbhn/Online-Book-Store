
import AdminBar from "./AdminBar.jsx"
import Cart from "./manageProduct.jsx"
import ManageProduct from "./manageProduct.jsx"

const AdminLayout= () =>{
    return(
    <div style={{
        minHeight:'100vh',
        width:'99%',
        padding:5,
    }}>
        <AdminBar />
        <ManageProduct />
    </div>
    )
}

export default AdminLayout

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
        <ViewProduct />
    </div>
    )
}
    const ViewProduct = ()=>{
        return (
            <div style={{
                minHeight:'90vh',
                width:'90%',
                border:'1px solid',
                marginTop:'10px',
                marginInline:'auto'
            }}>

            </div>
        )
    }
export default AdminLayout
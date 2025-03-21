import { NavLink } from "react-router-dom";

const adminRoutes = [
  { path: "/admin/products", name: "新增產品" },
  { path: "/admin/orders", name: "客戶訂單" },
];

export default function AdminOrdersPage() {

  return(
    <>
      <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container">
        <ul className="navbar-nav flex-row gap-5 fs-5">
          {adminRoutes.map ((route) =>( 
            <li key={route.path} className="nav-item">
            <NavLink className="nav-link" aria-current="page" to={route.path}>{route.name}</NavLink>
          </li>
          ))}
        </ul>
      </div>
      </nav>
      <h3>客戶訂單頁面</h3>
    </>
  )
}
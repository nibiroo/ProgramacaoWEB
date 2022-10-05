import React from "react";

const SideNav = ()=> {
    return (
        <div>
            {/* Main Sidebar Container */}
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo */}
            <a href="index3.html" className="brand-link">
                <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
                <span className="brand-text font-weight-light">AG SOCCER</span>
            </a>

            {/* Sidebar */}
            <div className="sidebar">
                {/* SidebarSearch Form */}
                <div className="form-inline">
                <div className="input-group" data-widget="sidebar-search">
                    <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                    <div className="input-group-append">
                    <button className="btn btn-sidebar">
                        <i className="fas fa-search fa-fw" />
                    </button>
                    </div>
                </div>
                </div>
                
                {/* Sidebar Menu - Football Championship*/}
                <nav className="mt-2">
                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    {/* Add icons to the links using the .nav-icon class
                    with font-awesome or any other icon font library */}
                    <li className="nav-header">FOOTBAL CHAMPIONSHIP</li>
                    <li className="nav-item">
                    <a href="#" className="nav-link">
                        <i className="nav-icon far fa-circle text-warning" />
                        <p>Brazilian Championship</p>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="#" className="nav-link">
                        <i className="nav-icon far fa-circle text-warning" />
                        <p>Brazil Cup</p>
                    </a>
                    </li>
                </ul>
                </nav>
                {/* /.sidebar-menu */}

                
                {/* Sidebar Menu - Contact */}
                <nav className="mt-2">
                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    {/* Add icons to the links using the .nav-icon class
                    with font-awesome or any other icon font library */}
                    <li className="nav-header">FOOTBAL CHAMPIONSHIP</li>
                    <li className="nav-item">
                    <a href="#" className="nav-link">
                        <i className="nav-icon far fa-circle text-warning" />
                        <p>Brazilian Championship</p>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="#" className="nav-link">
                        <i className="nav-icon far fa-circle text-warning" />
                        <p>Brazil Cup</p>
                    </a>
                    </li>
                </ul>
                </nav>
                {/* /.sidebar-menu */}
            </div>


            {/* /.sidebar */}
            </aside>
        </div>
    );
}

export default SideNav;
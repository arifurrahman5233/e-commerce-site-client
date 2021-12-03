import React from 'react';
import img from '../../../../images/logo.png';

const HeaderSearch = () => {
    return (
          <header className="bg-dark shadow-sm " >
                <div className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                <a className="navbar-brand d-none d-sm-block me-3  me-xl-4 flex-shrink-0" href="index.html"><img src={img} width="60" alt="eBazar"></img></a>
                  <a className="navbar-brand d-sm-none me-2" href="index.html"><img src={img} width="74" alt="img"></img></a>
                  
                    <div className="input-group d-lg-flex d-sm-flex d-xs-flex flex-nowrap mx-4"><i className="ci-search position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                      <input className="form-control md-12 sm-12 xs-12 d-sm-flex rounded-start w-100" type="text" placeholder="Search for products"></input>
                      <select className="form-select flex-shrink-0" style={{width: 200}}>
                        <option>Categories</option>
                        <option>Bakery</option>
                        <option>Fruits and Vegetables</option>
                        <option>Dairy and Eggs</option>
                        <option>Meat and Poultry</option>
                        <option>Fish and Seafood</option>
                        <option>Sauces and Spices</option>
                        <option>Canned Food and Oil</option>
                        <option>Alcoholic Beverages</option>
                        <option>Soft Drinks and Juice</option>
                        <option>Packets, Cereals</option>
                        <option>Frozen</option>
                        <option>Snacks , Sweets and Chips</option>
                        <option>Personal hygiene</option>
                        <option>Kitchenware</option>
                      </select>
                    </div>
                  </div>
                </div>
            </header>      
         
    
    );
};

export default HeaderSearch;
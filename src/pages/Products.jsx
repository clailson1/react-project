import { useNavigate } from "react-router-dom";

import { ListBox } from 'primereact/listbox';
import { useState } from "react";
        

const Products = () => {
    const navigate = useNavigate();
    const [selectedPage, setSelectedPage] = useState(null);

    const pages = [
        { product: 'Strawberry', value: '/product/1/Strawberry' },
        { product: 'Banana', value: '/product/2/Banana' },
        { product: 'Apple', value: '/product/3/Apple' },
        { product: 'Grape', value: '/product/4/Grape' },
        { product: 'Orange', value: '/product/5/Orange' },
    ];

    const handleNavigation = (e) => {
        setSelectedPage(e.value);
        navigate(e.value); // redireciona para a rota
    };

    return (  
        <div className="m-5">      
            <h2 className="flex justify-content-center">List of Products</h2>
            <div className="card mt-5">  
                <ListBox 
                    value={selectedPage} 
                    options={pages} 
                    onChange={handleNavigation} 
                    optionLabel="product" 
                    className="w-full md:w-14rem" 
                />
            </div>
        </div>
    );
}
 
export default Products;
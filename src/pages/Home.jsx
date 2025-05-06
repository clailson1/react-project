import { useNavigate } from "react-router-dom";
import { ListBox } from 'primereact/listbox';
import { Divider } from 'primereact/divider';
import { Card } from 'primereact/card';
import { useState } from "react";

const Home = () => {
    const navigate = useNavigate();
    const [selectedPage, setSelectedPage] = useState(null);

    const pages = [
        { label: 'List of Products', value: '/products' },
        { label: 'Contact', value: '/contact' },
        { label: 'About', value: '/about' }
    ];

    const handleNavigation = (e) => {
        setSelectedPage(e.value);
        navigate(e.value); // redireciona para a rota
    };

    return ( 
        <div>
            <div className="!bg-red-500 text-white p-4">TESTE TAILWIND</div>

            <h2 className="!text-yellow-300 !bg-blue-500 flex justify-content-center m-5">Website Home</h2>
            <div className="card flex justify-content-center gap-2 px-5">  
                <ListBox 
                    value={selectedPage} 
                    options={pages} 
                    onChange={handleNavigation} 
                    optionLabel="label" 
                    className="w-full md:w-14rem" 
                />

                <Divider layout="vertical" />

                <Card title="Website Home Content">
                    <p className="py-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sunt corrupti temporibus culpa commodi nihil quam atque. Consectetur itaque natus esse tenetur, quae nulla molestiae debitis corporis id, ipsa quos.
                    </p>
                    <p className="py-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sunt corrupti temporibus culpa commodi nihil quam atque. Consectetur itaque natus esse tenetur, quae nulla molestiae debitis corporis id, ipsa quos.
                    </p>
                    <p className="py-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sunt corrupti temporibus culpa commodi nihil quam atque. Consectetur itaque natus esse tenetur, quae nulla molestiae debitis corporis id, ipsa quos.
                    </p>
                </Card>
            </div>
        </div> 
    );
}
 
export default Home;

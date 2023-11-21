import { Link } from '@inertiajs/react';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMoneyBill, faMapMarkerAlt, faUtensils, faStore, faPlus, faMinus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function MenuCard({ menus }) {
    console.log(menus);

    return menus.map((data, i) => {
        const [quantity, setQuantity] = useState(0);

        const handleIncrementQuantity = () => {
            setQuantity((prevQuantity) => prevQuantity + 1);
        };

        // const handleDecrementQuantity = () => {
        //     if (quantity > 1) {
        //         setQuantity((prevQuantity) => prevQuantity - 1);
        //     }
        // };

        const handleDecrementQuantity = () => {
            if (quantity > 0) {
                setQuantity((prevQuantity) => prevQuantity - 1);
            } else {
                setQuantity(0);
            }
        };

        const handleAddToCart = () => {
            // Implement logic to add item to cart
            console.log('Adding item to cart:', { menu_id: data.menu_id, quantity: quantity });
        };

        return (
            <div key={i}>
                <div className="card w-full card-compact lg:w-96 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg" style={{ backgroundColor: '#f0f0f0', height: '100%' }}>
                    <div className="card-body">
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faUtensils} className="mr-2" />
                            <h2 className="card-title">
                                {data.namamakanan}
                            </h2>
                        </div>
                    </div>
                    <figure>
                        <img
                            className="card-image"
                            src={data.gambar}
                            alt={data.gambar}
                            style={{
                                height: '200px',
                                width: '100%',
                            }}
                        />
                    </figure>
                    <div className="card-body">
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faMoneyBill} className="mr-2" />
                            <h2 className="card-title">
                                {data.harga}
                            </h2>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faUtensils} className="mr-2" />
                            <h2 className="card-title">
                                {data.desc}
                            </h2>
                        </div>
                    </div>
                    <div className="card-actions flex justify-between">
                        <Link
                            href={route('detail.menu', { menu_id: data.menu_id })}
                            method="get"
                            className="btn btn-primary btn-sm"
                        >
                            Details
                        </Link>
                        <div className="flex items-center">
                            <button className="btn btn-sm btn-outline" onClick={handleDecrementQuantity}>
                                <FontAwesomeIcon icon={faMinus} />
                            </button>
                            <input value={quantity} className="form-control w-10 text-center" />
                            <button className="btn btn-sm btn-outline" onClick={handleIncrementQuantity}>
                                <FontAwesomeIcon icon={faPlus} />
                            </button>

                            <button className="btn btn-sm btn-success ml-2" onClick={handleAddToCart}>
                                <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    });
}

export default MenuCard;

import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from "@inertiajs/react";
import b from "/resources/images/pngwing.com.png";
import c from "/resources/images/makan.png";
import d from "/resources/images/daging icon.png";
import video from "/resources/images/Indonesia.mp4";


const Hero = ({ carosel, city }) => {
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleVideoLoaded = () => {
        setVideoLoaded(true);
    };
//console.log("inicity", city.kota)
    const handleFilter = (event) => {
        const searchWord = event.target.value.toLowerCase();
        setWordEntered(searchWord);
    
        if (searchWord === "") {
            setFilteredData([]);
        } else {
            const newFilter = city.kota.filter((value) => {
                return value.namakota.toLowerCase().includes(searchWord);
            });
            setFilteredData(newFilter);
        }
    };
    


    return (
        <>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero min-h-screen">
                    <video
                        autoPlay
                        loop
                        muted
                        className={`w-full h-full object-cover ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
                        onLoadedData={handleVideoLoaded}
                    >
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="hero-overlay bg-opacity-70"></div>
                    <div className="hero-content text-center text-white">
                        <div className="max-w">
                            <h1 className="mb-5 text-5xl font-thin">Assalamualaikum,</h1>
                            <h1 className="mb-5 text-5xl font-heavy">
                                Bingung berwisata? Silahkan Langsung Cari!
                            </h1>
                            <div className="flex items-center justify-center space-x-2">
                                <button className="btn btn-secondary btn-lg">
                                    <img src={b} alt="Wisata Menarik" />
                                    <Link href={route("searchtempat")} as="button">
                                        Wisata Menarik
                                    </Link>
                                </button>
                                <button className="btn btn-secondary btn-lg">
                                    <img src={c} alt="Makanan Khas" />
                                    <Link href={route("searchmakanan")} as="button">
                                        Makanan Khas
                                    </Link>
                                </button>
                                <button className="btn btn-secondary btn-lg">
                                    <img src={d} alt="Jenis Daging" />
                                    <Link to="/" as="button">
                                        Jenis Daging
                                    </Link>
                                </button>
                            </div>
                            {/* Elastic Search Bar */}
                            <div className="mt-4">
                                <input
                                    type="text"
                                    placeholder="Cari tempat atau makanan..."
                                    className="w-full p-2 border border-gray-300 rounded-md text-black"
                                    value={wordEntered}
                                    onChange={handleFilter}
                                />
                                {filteredData.length !== 0 && (
                                    <div className="dataResult">
                                        {filteredData.slice(0, 15).map((value, index) => {
                                            return (
                                                <Link
                                                    href={route('daftarmakanan.kota', { namakota: value.namakota })}
                                                    method="get"
                                                    key={index}
                                                >
                                                    <div className="list border-bottom" key={index}>
                                                        <div className="d-flex flex-column ml-3">
                                                            <span>{value.namakota}</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            );
                                        })}
                                    </div>
                                )}
                                <button className="mt-2 bg-primary text-white py-2 px-4 rounded-md">
                                    Search
                                </button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero min-h-screen bg-primary">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <Carousel>
                        {carosel.map((carol, index) => (
                            <div key={index} className="w-full h-64">
                                <img
                                    src={carol.gambar}
                                    alt={`Slide ${index + 1}`}
                                    className="object-cover w-full h-full rounded-lg shadow-2xl"
                                />
                            </div>
                        ))}
                    </Carousel>
                    <div>
                        <h1 className="text-5xl font-bold text-white">
                            Silahkan pilih tempat Wisata dan Makanan yang ingin dikunjungi!
                        </h1>
                        <p className="py-6 text-3xl text-white">
                            Sistem Rekomendasi Tempat Wisata dan Makanan
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;

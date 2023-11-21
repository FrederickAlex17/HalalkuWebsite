import React from 'react';
import classes from "./RestoNavbar.module.css";

const RestoranNavbar = (resto) => {
    console.log("awawe",resto.resto)
        
        return (
            <div >
                <section className={classes.summary}>
                    <h2>Selamat datang di {resto.resto.namarestoran}</h2>
                    <p>
                        Pilih hidangan kesukaan Anda dari berbagai pilihan hidangan yang
                        tersedia.
                    </p>
                    <p>
                        Semua hidangan kami dimasak dengan bahan-bahan berkualitas tinggi, tepat
                        waktu, dan tentu saja, CINTA!
                    </p>
                </section>
            </div>);
}

export default RestoranNavbar;

import { useState } from "react";

const From = () => {
    const[kategori, setKategori]= useState('')
    const[harga, setHarga]= useState('')
    const[size, setSize]= useState('')

    const simpan=()=>{
        setImage('')
        setHarga('')
        setStock('')
    }
    return ( 
        <div className="container border p-3 m-3" style={{backgroundColor:""}}>
            
            <h2>Input Data Barang</h2>
            <label htmlFor="kategori" style={{margin:"4"}}>
                {kategori}
                <input type="text" className="form-control" placeholder="KATEGORI" id="KATEGORI" value={kategori} 
                onChange={(e)=>setKategori(e.target.value)}
                ></input>
            </label>
            <label htmlFor="harga">
                {harga}
                <input type="text" className="form-control" placeholder="HARGA" id="HARGA" value={harga}
                onChange={(e)=>setHarga(e.target.value)}
                ></input>
            </label>
            <label htmlFor="size">
                {size}
                <input type="text" className="form-control" placeholder="SIZE" value={size}
                onChange={(e)=>setSize(e.target.value)}
                ></input>
            </label>
            <div className="d-flex flex-row mt-3">
                <button className="btn btn-primary" onClick={simpan}>FILTER</button>
            </div>
        </div>
     );
}
 
export default From;
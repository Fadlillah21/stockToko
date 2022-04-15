import { useState } from 'react'
import './App.css'
import Nav from './componen/Nav'
import Card from './componen/Card'
import Form from './componen/Form'
import Footer from './componen/footer'


const dataBarang =[
  {
    image:"https://i.pinimg.com/736x/0d/57/41/0d5741f5d6b7640e14aa705109519947.jpg",
    harga: "Rp.50.000-,",
    stock:"100"
  },
  {
    image:"https://i.pinimg.com/236x/88/8e/a8/888ea84738a878f70e7934253137110d.jpg",
    harga: "Rp.175.000-,",
    stock:"150"
  },
  {
    image:"https://kamini.id/wp-content/uploads/2019/05/Vans-Era-Core-Sneakers.jpg",
    harga: "Rp.499.000",
    stock:"130"
  },
  {
    image:"https://www.ncrsport.com/berita/wp-content/uploads/2021/03/57699_500_A-300x300.jpg",
    harga: "Rp.459.000",
    stock:"120"
  },
]
function App() {
  const [indeks] = useState(0)



  return (
    <div className=' '>

      <Nav />
      <div className='container'>
        <Form/>
      </div>
      <div className="container">
        <div className="row">
          {dataBarang.map((agt, indeks) => (
            <div className="col-lg-3 col-md-4 col-sm-6">
              <Card image={agt.image} harga={agt.harga} stock={agt.stock}/>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App
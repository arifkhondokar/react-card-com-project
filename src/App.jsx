import { useState } from 'react'
import Card from './profileCard/Card'
import aImg from '/images/siam talukder.jpg'
import bImg from '/images/khaled saifullah.jpg'
import cImg from '/images/modabbir masum.jpg'
import dImg from '/images/sunil das.jpg'
import eImg from '/images/arif khondokar.jpg'



// const cardInfo = [
//   {

//   }

// ]





function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <section className="main">
          <Card img={aImg} profileName="Siam Talukder" designation="Senior Developer & Trainer" following="125" followers="22k" posts="200" />
      </section>

      <section className="main">
          <Card img={bImg} profileName="Khaled Saifullah" designation="MERN Stack Developer & Programmer" following="1000" followers="5k" posts="500" />

          <Card img={cImg} profileName="Modabbir Masum" designation="MERN Stack Developer & Designer" following="678" followers="7k" posts="570" />

          <Card img={dImg} profileName="Sunil Das" designation="MERN Stack & PHP Developer" following="178" followers="4k" posts="230" />

          <Card img={eImg} profileName="Arif Khondokar" designation="MERN Stack Developer" following="100" followers="3.4k" posts="120" />
      </section>

{/* ------------------------------------------------------------------------- */}

      <section className="main">
          {[0,1,2,3,4,5,6].map((item, index)=>(
             <Card key={index} img={eImg} profileName="Md Arif Khondokar" designation="MERN Stack Developer" following="1000" followers="5k" posts="500" />
          ))}
      </section>
    </>
  )
}

export default App

import React,{useEffect, useState} from "react"
import {getDocs} from "firebase/firestore"
import {userCollectionRef} from "../../firebase"
import "../../Styles/Home/index.css"

const Home = ()=>{

  const [conteudo, setConteudo] = useState([])

  useEffect(()=>{
    const getUsers = async () => {
        const data = await getDocs(userCollectionRef);
        setConteudo((data.docs.map((doc) => ({...doc.data(), id: doc.id}))));
    }
    getUsers();
  })

  return(
    <>
      <main className="container">
        <h1 className="title">Conteúdo</h1>
        <div className="line"></div>
      </main>

      <section className="container cards">
          {conteudo.map((card)=>{
            return(
              <>
              <div key={card.id} className="card">
                <h2 className="name-poema">{card.titulo}</h2>
                <p className="name-autor">{card.nome}</p>
                <p className="poema">{card.poema}</p>
              </div>
              </>
            )
          })}
        </section>
    </>
)}

export default Home
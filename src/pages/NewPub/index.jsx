import { addDoc } from "firebase/firestore"
import React, {useState} from "react"
import { userCollectionRef } from "../../firebase"
import "../../Styles/NewPub/index.css"


const NewPub = ()=>{

    const [titulo, setTitulo] = useState("")
    const [nome, setNome] = useState("")
    const [poema, setPoema] = useState("")

    async function enviarPoema(e){
        e.preventDefault()
        // console.log(`Título: ${titulo}\n Nome: ${nome}\n Poema: ${poema}`)
        //window.history.back()

        // FIREBASE
        const poemas = await addDoc(userCollectionRef, {titulo, nome, poema})
        console.log(poemas)
    }

    return(
        <>  <div className="hd-newPub">
                <h1>Escrever novo</h1>
                <div className="line"></div>
            </div>
            
            <form onSubmit={enviarPoema}>
                <label htmlFor="titulo">Título do poema</label>
                <input id="titulo" type="text" required={true} value={titulo} onChange={(e)=>{setTitulo(e.target.value)}}/>

                <label htmlFor="nome">Seu nome</label>
                <input id="nome" type="text" required={true} value={nome} onChange={(e)=>{setNome(e.target.value)}}/>

                <label htmlFor="poema">Poema</label>
                <textarea id="poema" name="poema" required={true} cols="30" rows="10" onChange={(e)=>{setPoema(e.target.value)}}></textarea>

                <button className="btn-form" type="submit">Enviar</button>
            </form>

        </>
    )

}

export default NewPub

import React from 'react'
import MyCard from '../Card/Card'

const aboutusinfo = [{
    title: "Fundador",
    subtitle: "Jorge Alejandro Skamelka",
    details: "Arquitecto - recibido de la UNT - decide innovar en tecnologia y facilitarle la vida a la gente que posee poco espacio y ma la naturaleza. voy a poner mas largo el texto mucho mas largo para ver hasta donde se aocmoda la tarjeta dentro de la pagina y asi poder despues subir esta info de una tabla de mongodb. sera mucho o estara bien tanto texto? Ale vos que opinas de este verso qu estoy haciendo? Marce y Tomas a ustedes les gusta?. Por otro lado me pregunto como puedo escribirlo con puntos aparte porque se hizo una linea muy yyyyyyy larga en el visual studio code.",
    info_url:'../../images/cubo2_a.jpg'
},
{
    title: "Valores",
    subtitle: "Facil - Rapido - Liviano",
    details: "este texto me lo tiene que pasar mi hermano pero debe hablr de que lo motivo a embarcarse en este proyecto",
    info_url:'../../images/cubo2_a.jpg'
},
{
    title: "Objetivos",
    subtitle: "Sembrar naturaleza en el cemento",
    details: "y aqui pensemos en como llevar la naturaleza a una gran ciudad de cemento e imaginemos bla bla bla...",
    info_url:'../../images/cubo2_a.jpg'
}]

const AboutUs = () => {
   // console.log(aboutusinfo)
    return (
        <div>
          {aboutusinfo.map( (item,index) => {return (<MyCard info = {aboutusinfo[index]} />)} )}
        </div>
         )
}

export default AboutUs
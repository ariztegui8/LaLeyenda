import React, { useState } from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';




function Contacto() {

  const [formulario, setformulario] = useState({
    nombre: '',
    apellido:'',
    email: '',
    telefono: '',
    texto: ''
  });

  const {nombre, apellido, email, telefono, texto} = formulario;

  const handleFormulario = e =>{
    setformulario({
      ...formulario,
      [e.target.name] : e.target.value
    })
  }

  const [error, setError] = useState(false);


  const handleSubmit = e =>{
    e.preventDefault();

    if(nombre.trim() === '' || apellido.trim() === '' || email.trim() === '', telefono.trim() === '' || texto.trim === ''){
      setError(true);
      return;
    }

    setError(false);


    emailjs.sendForm('ariztegui8', 'template_koki', e.target, 'user_CV8DxN4qnvLpzH5NheGoh')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });


    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Mensaje Enviado',
      showConfirmButton: false,
      timer: 2000
    })

    setformulario({
      nombre: '',
      apellido:'',
      email: '',
      telefono: '',
      texto: ''
    })

  }


  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <form
            className="form-group form-container"
            onSubmit={handleSubmit}
          >
            

            <h1 className="title-contacto">Dejanos tu mensaje</h1>
            <div className="form-ariz">
              <label className="label-contacto">Nombre</label>
              <input 
                type="text"
                className="form-control form-input"
                placeholder="Nombre"
                name="nombre"
                value={nombre}
                onChange={handleFormulario}
                />
              </div>

              <div className="form-ariz">
              <label className="label-contacto">Apellido</label>
                <input 
                  type="text"
                  className="form-control form-input"
                  placeholder="Apellido"
                  name="apellido"
                  value={apellido}
                  onChange={handleFormulario}
                />
              </div>

              <div className="form-ariz">
              <label className="label-contacto">Email</label>
                <input 
                  type="email"
                  className="form-control form-input"
                  placeholder="Ej.nombre@gmail.com"
                  name="email"
                  value={email}
                  onChange={handleFormulario}
                />
              </div>

              <div className="form-ariz">
              <label className="label-contacto">Celular/Whatsapp</label>
                <input 
                  type="number"
                  className="form-control form-input"
                  placeholder="Ej.(54) 011264523"
                  name="telefono"
                  value={telefono}
                  onChange={handleFormulario}
                />
              </div>

              <div className="form-ariz">
              <label className="label-contacto">Mensaje</label>
                <textarea
                  type="text"
                  className="form-control form-input"
                  placeholder="Deja tu mensaje aquí"
                  name="texto"
                  value={texto}
                  onChange={handleFormulario}
                ></textarea>
              </div>

              {error ? <p className="alert alert-danger p-2">Todos los campos son obligatorios</p> : null}

              <button
                className="btn btn-secondary btn-contacto"
                type="submit"
              >Enviar Mensaje</button>
          </form>
        </div>
        <div className="col-sm-4">
  
            <div className="lista">
              <div className="redes">
                <div className="redes-icon">
                  <a href="https://www.facebook.com/jorge.r.ariztegui" target="_blank"><FaFacebook /></a>
                </div>

                <div className="redes-icon">
                <a href="https://www.instagram.com/jorgeraulariztegui/" target="_blank"><FaInstagram /></a>
                </div>

                <div className="redes-icon">
                <a href="https://www.linkedin.com/in/jorge-ariztegui8/" target="_blank"><FaLinkedin /></a>
                  
                </div>
              </div>
              <ul class="ul-edit">
                <li class=" li-edit">{<FaEnvelope className="icon-fa-fa"/>}jorgeariztegui8 @gmail.com</li>
                <li class=" li-edit">{<FaWhatsapp className="icon-fa-fa"/>}+54 9 2494533092</li>
                <li class=" li-edit">{<FaRegClock className="icon-fa-fa"/>}Lun - Dom  09:00 - 21:00 </li>
                <li class=" li-edit">{<FaMapMarkerAlt className="icon-fa-fa"/>}Tandil, Buenos Aires, Argentina</li>
              </ul>
            </div>
        </div>

      </div>
    </div>
  );
}

export default Contacto;

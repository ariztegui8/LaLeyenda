import React from 'react';
import Swal from 'sweetalert2'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.jpg'
import img6 from '../assets/6.jpg'
import img7 from '../assets/7.jpg'
import img8 from '../assets/8.jpg'
import img9 from '../assets/9.jpg'
import img10 from '../assets/10.jpg'
import img11 from '../assets/11.jpg'
import img12 from '../assets/12.jpg'
import img13 from '../assets/13.jpg'
import img14 from '../assets/14.jpg'
import img15 from '../assets/15.jpg'
import img16 from '../assets/16.jpg'
import img17 from '../assets/17.jpg'
import img18 from '../assets/18.jpg'
import img19 from '../assets/19.jpg'
import img20 from '../assets/20.jpg'
import img21 from '../assets/21.jpg'
import img22 from '../assets/22.jpg'
import img23 from '../assets/23.jpg'
import img24 from '../assets/24.jpg'
import img25 from '../assets/25.jpg'
import img26 from '../assets/26.jpg'
import img27 from '../assets/27.jpg'
import img28 from '../assets/28.jpg'
import img29 from '../assets/29.jpg'
import img30 from '../assets/30.jpg'
import img31 from '../assets/31.jpg'
import img32 from '../assets/32.jpg'
import img33 from '../assets/33.jpg'
import img34 from '../assets/34.jpg'
import img35 from '../assets/35.jpg'
import img36 from '../assets/36.jpg'
import img37 from '../assets/37.jpg'
import img38 from '../assets/38.jpg'
import img39 from '../assets/39.jpg'
import img40 from '../assets/40.jpg'



function Galeria() {


  let imagenes = [
    {
      id: 1,
      imgSrc: img1
    },
    {
      id: 2,
      imgSrc: img2
    },
    {
      id: 3,
      imgSrc: img3
    },
    {
      id: 4,
      imgSrc: img4
    },
    {
      id: 5,
      imgSrc: img5
    },
    {
      id: 6,
      imgSrc: img6
    },
    {
      id: 7,
      imgSrc: img7
    },
    {
      id: 8,
      imgSrc: img8
    },
    {
      id: 9,
      imgSrc: img9
    },
    {
      id: 10,
      imgSrc: img10
    },
    {
      id: 11,
      imgSrc: img11
    },
    {
      id: 12,
      imgSrc: img12
    },
    {
      id: 13,
      imgSrc: img13
    },
    {
      id: 14,
      imgSrc: img14
    },
    {
      id: 15,
      imgSrc: img15
    },
    {
      id: 16,
      imgSrc: img16
    },
    {
      id: 17,
      imgSrc: img17
    },
    {
      id: 18,
      imgSrc: img18
    },
    {
      id: 19,
      imgSrc: img19
    },
    {
      id: 20,
      imgSrc: img20
    },
    {
      id: 21,
      imgSrc: img21
    },
    {
      id: 22,
      imgSrc: img22
    },
    {
      id: 23,
      imgSrc: img23
    },
    {
      id: 24,
      imgSrc: img24
    },
    {
      id: 25,
      imgSrc: img25
    },
    {
      id: 26,
      imgSrc: img26
    },
    {
      id: 27,
      imgSrc: img27
    },
    {
      id: 28,
      imgSrc: img28
    },
    {
      id: 29,
      imgSrc: img29
    },
    {
      id: 30,
      imgSrc: img30
    },
    {
      id: 31,
      imgSrc: img31
    },
    {
      id: 32,
      imgSrc: img32
    },
    {
      id: 33,
      imgSrc: img33
    },
    {
      id: 34,
      imgSrc: img34
    },
    {
      id: 35,
      imgSrc: img35
    },
    {
      id: 36,
      imgSrc: img36
    },
    {
      id: 37,
      imgSrc: img37
    },
    {
      id: 38,
      imgSrc: img38
    },
    {
      id: 39,
      imgSrc: img39
    },
    {
      id: 40,
      imgSrc: img40
    },

  ]


  return (
    <>
      <h1 id="galeria" className="text-center title-galeria">Galeria de imágenes</h1>
      <div className="container">
        <div className="row"> 
          <div className="col-sm-12 galeria">
            {imagenes.map((img, id) => (
              <div className="container-img" key={id}>
                <img className="img-ariz" src={img.imgSrc} />
                <button
                  className="btn btn-secondary btn-img-ariz"
                  onClick={()=>{
                    Swal.fire({
                      imageUrl: `${img.imgSrc}`,
                      imageAlt: 'Ariztegui Jorge',
                      width: 800
                    })
                  }}
                 >Ver Imagen</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    
      
    </>
  );
}

export default Galeria;

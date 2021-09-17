import React from 'react';
import '../App.css';
import ReactPlayer from 'react-player'

function Home() {
  return (
    <>  
     <h1 className="text-center title-galeria">Videos del Campeón</h1>
    <div className="container">
      <div className="row">
        <div className="col-sm-12 animate__animated animate__fadeInLeftBig">
          <div className="container-video">
            <ReactPlayer 
              url= 'https://www.youtube.com/watch?v=bbDrK_JO7m8'
              playing
              controls
              light
              className="video-ariz"
            />
            <div className="parrafos">
              <h2>Ariztegui y el Zorro primera parte</h2>
              <p>Un poco de la historia cuando monto el Zorro.</p>
            </div>
          </div>

            <div className="container-video">
              <ReactPlayer 
                url= 'https://www.youtube.com/watch?v=JbU-Imz8330'
                playing
                controls
                light
                className="video-ariz"
              />
              <div className="parrafos">
                <h2>Ariztegui y el Zorro segunda parte</h2>
                <p>Un poco de la historia cuando monto el Zorro.</p>
              </div>
            </div>

            <div className="container-video">
              <ReactPlayer 
                url= 'https://www.youtube.com/watch?v=Yss9zNslsCI'
                playing
                controls
                light
                className="video-ariz"
              />
              <div className="parrafos">
                <h2>Leyenda de Jineteadas</h2>
                <p>Verso de Nahuel Pellejero.</p>
              </div>
            </div>

            <div className="container-video">
              <ReactPlayer 
                url= 'https://www.youtube.com/watch?v=GvpC1DRO5Nw&t=3s'
                playing
                controls
                light
                className="video-ariz"
              />
              <div className="parrafos">
                <h2>Ariztegui en Jesús María</h2>
                <p>Jineteada con bastos en el campeonato de Jesús María 2015.</p>
              </div>
            </div>

            <div className="container-video">
              <ReactPlayer 
                url= ' https://www.youtube.com/watch?v=e0Z6YhgbDfw'
                playing
                controls
                light
                className="video-ariz"
              />
              <div className="parrafos">
                <h2>Ariztegui vs el Cotorro</h2>
                <p>Jineteada en Arroyo Venado. Ariztegui en clina vs el Cotorro.</p>
              </div>
            </div>

            <div className="container-video">
              <ReactPlayer 
                url= 'https://www.youtube.com/watch?v=3AbNO7yB-Lg'
                playing
                controls
                light
                className="video-ariz"
               />
               <div className="parrafos">
                <h2>Ariztegui vs El Barrilete</h2>
                <p>Jineteada con bastos. Ariztegui en el Barrilete de Gripo.</p>
              </div>
            </div>
       
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;

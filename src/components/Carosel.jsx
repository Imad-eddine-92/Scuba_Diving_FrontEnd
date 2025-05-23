import Carousel from 'react-bootstrap/Carousel';

function Carosel() {
  return (
    
    
    <Carousel data-bs-theme="dark">  
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://internationalscuba.com/wp-content/uploads/2023/03/e75c5e_2c6f3122e58942e084abb686da35a3e1_mv2.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Rencontre avec la vie marine</h5>
          <p>Un face-à-face inoubliable avec un poisson curieux. Chaque plongée réserve des surprises inattendues.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.tacdn.com/media/attractions-splice-spp-674x446/12/49/0d/e6.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 style={{ color: 'white' }}>Descente dans le bleu</h5>
          <p style={{ color: 'white' }}>Le moment magique où l’on quitte la surface… Une transition paisible vers un monde silencieux et mystérieux.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.scubadiving.com/sites/default/files/styles/655_1x_/public/trevor/Annie-Crawley-Mask-Equalizing-6527_edit.jpg?itok=GQtX0Q5g"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 style={{ color: 'white' }}>Remontée vers la lumière</h5>
          <p style={{ color: 'white' }}>La fin de la plongée, baignée de lumière. Un dernier regard vers les profondeurs avant de rejoindre la surface.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.vogue.com/photos/65390ccce7e9af80e4cfc019/master/w_2560%2Cc_limit/CLU05263.jpg "
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5 style={{ color: 'white' }}> Exploration d’un récif corallien</h5>
          <p  style={{ color: 'white' }}>
          Des couleurs éclatantes et une biodiversité incroyable. Le récif est un écosystème vibrant de vie.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default Carosel;
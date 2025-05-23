import Carousel from 'react-bootstrap/Carousel';

function CaroselDecapalme() {
  return (
    
    
    <Carousel data-bs-theme="dark">  
      <Carousel.Item>
        <img
          
          className="d-block w-100"
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/f7/76/6c/decapalm.jpg?w=1100&h=-1&s=1"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 style={{ color: 'white' }}>Rencontre avec la vie marine</h5>
          <p style={{ color: 'white' }}>Un face-à-face inoubliable avec un poisson curieux. Chaque plongée réserve des surprises inattendues.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          
          className="d-block w-100"
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/0d/03/92/decapalm.jpg?w=1100&h=-1&s=1"
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
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/9a/be/70/20190220-112518-largejpg.jpg?w=1000&h=-1&s=1"
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
          src="https://scontent.fqfd1-1.fna.fbcdn.net/v/t1.6435-9/119427537_1568841059964926_1753322556838919563_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeED-C9Jq1oWW2ZnllXlU41FffAhW3_kP3598CFbf-Q_foHVipd8-Jm3ZM4pT975uM59jq-T4TsaBlL8d7N3vw9o&_nc_ohc=nOeNgKHp7egQ7kNvwG6Rf8Z&_nc_oc=AdlXnVWHSTS_GRvR_Cdg4HTZiOZzBAfbcAMdtDqtnG-Yq8oAEPsCscBk-81OCL9WYgI&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fqfd1-1.fna&_nc_gid=tLF3tIzFfRMrQoSebUbbgQ&oh=00_AfKl6yQtgDq_upYJHKh5QNjUhPZFYmvpi7uT8kAHuYZyzQ&oe=6844955D"
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

export default CaroselDecapalme;
import { Container, Row, Col, Button } from 'react-bootstrap'
import CaroselDecapalme from '../components/DECAPALME/CaroselDecapalme'
import MapViewDecapalme from '../components/DECAPALME/MapViewDecapalme'
 
const Clubs = () => {
  return (
   
    <div style={{background:'white'}} className=" background: linear-gradient(135deg, #e0f7fa, #ffffff);
  min-height: 100vh;
  padding-top: 60px;
  padding-bottom: 60px;">
     <CaroselDecapalme/>
      <Container className="py-5">
        <Row className="justify-content-center mb-4">
          <img
            src="data:image/jpeg;base64,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"
            alt="Logo Decapalme"
            style={{ maxWidth: '150px' }}
          />
        </Row>

        <Row className="justify-content-center text-center mb-4">
          <Col md={8}>
            <h2 className="mb-3">À propos</h2>
            <p className="lead">
              Amoureux de la mer ou juste envie de changer de cadre, venez à DECAPALME découvrir
              les merveilles du monde sous-marin. Le club se trouve à 25km d'Alger, à 20 minutes de
              l'aéroport, dans le petit village de Surcouf.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center  " >
          <Col md="auto">
          <div style={{ width: '300px', marginBlock: '20%', display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <Button
              href="https://decapalm.canalblog.com/"
              target="_blank"
              rel="noopener noreferrer"
              variant="success"

              
            >
              Aller vers DECAPALME canalblog
            </Button>
            <Button
              href="https://www.facebook.com/decapalm"
              target="_blank"
              rel="noopener noreferrer"
              variant="success"
            >
              Aller vers Page Facebook
            </Button>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center text-center">
          <Col md={8}>
            <h4 className="mb-3">Comment nous joindre ?</h4>
            <p>
              Adresse : Cité Déca plage N°07 Ain Taya Alger, Algérie<br />
              Tél : +213 021 86 59 52 | +213 558 557 474 | +213 771 673 394<br />
              Email : decapalme@yahoo.fr
            </p>
          </Col>
        </Row>
      </Container>

      <MapViewDecapalme/>
    </div>
  )
}

export default Clubs

import React from 'react'
import { Card, Button } from 'react-bootstrap'
import Modal from 'react-modal'

const Index = ({ pokemon }) => {
  const arr = []
  const statsArr = []
  const { sprites, name, moves, weight, stats } = pokemon
  stats.forEach((el) => {
    const status = {
      name: el.stat.name,
      base_stat: el.base_stat
    }
    statsArr.push(status)
  })

  moves.forEach((el) => arr.push(el.move.name))
  let joinedMoves = arr.join().split(',', 10)
  const [modalIsOpen, setIsOpen] = React.useState(false)
  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      maxWidth: '550px',

      transform: 'translate(-50%, -50%)'
    }
  }
  return (
    <Card>
      <Card.Img variant="primary" src={sprites.front_shiny} />

      <Card.Body>
        <Card.Title>{name.toUpperCase()}</Card.Title>

        <Card.Title>Moves</Card.Title>
        <Card.Text>{joinedMoves}</Card.Text>

        <Button variant="primary" onClick={openModal}>
          See Detail
        </Button>
      </Card.Body>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={customStyles}>
        <h2>{name.toUpperCase()}</h2>
        <img src={sprites.front_shiny} alt={name} width="300px" />
        <div style={{ fontWeight: 'bold', fontSize: '26px' }}>Moves</div>
        <p>{arr.join()}</p>
        <p style={{ fontWeight: 'bold' }}>weight: {weight}</p>
        {statsArr.map((el) => {
          return (
            <>
              <div>
                <span
                  style={{
                    fontWeight: 'bold'
                  }}>
                  {el.name}
                </span>
                :{'   '}
                <span
                  style={{
                    fontWeight: 'bold'
                  }}>
                  {el.base_stat}
                </span>
              </div>
            </>
          )
        })}
      </Modal>
    </Card>
  )
}

export default Index

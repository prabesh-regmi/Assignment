
import React from 'react';
import '../Home.css';
import * as AiIcons from 'react-icons/ai';


const cardData = {
    src: "../../img/card.jpg"
  }
export default function LoyaltyCard(){

    const [card, setCard] = React.useState([cardData]);

    function addclickHandler() {
      setCard([...card, cardData]);
  
    }
    function removeclickHandler(index) {
      let data = [...card];
      data.splice(index, 1);
      setCard(data);
    }
    return (
        <>
        <div className='loyalty-type'>
              <div className='loyalty-head'>
                <p>Loyalty Card</p>
                <button className='button' onClick={addclickHandler}>Add New</button>              </div>

              {card.map((item, index) => {
                return (
                  <div key={index} className='loyalty-box'>
                    <img src={require('../../img/card.jpg')} alt='Img cannot load' />
                    <AiIcons.AiFillDelete style={{ fontSize: '30px', cursor: 'pointer' }} onClick={() => removeclickHandler(index)} />

                  </div>
                )

              })}
            </div>
        </>
    )
}
import React, { Component } from 'react';
import Card from './Card';

class CardSet extends Component {
  constructor() {
    super();
    this.state = {
      chosenCards: [],
    };
  }

  saveCourse = (index) => {
    console.log(index);
    const copyOfCards = [...this.state.chosenCards];
    copyOfCards.push(this.props.cards[index]);
    this.setState({
      chosenCards: copyOfCards,
    });
  };

  render() {
    console.log(this.state.chosenCards);
    const savedCards = this.state.chosenCards.map((card, i) => {
      return <Card key={i} card={card} />;
    });
    const cardList = this.props.cards.map((card, i) => {
      return (
        <div className='col s2' key={i}>
          <Card card={card} />
          <button
            onClick={() => {
              this.saveCourse(i);
            }}
            className='btn waves-light waves-effect'
          >
            save
          </button>
        </div>
      );
    });
    return (
      <div>
        {cardList}
        {savedCards}
      </div>
    );
  }
}

export default CardSet;

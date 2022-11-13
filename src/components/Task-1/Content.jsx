import React from 'react';

export default class Content extends React.Component {
  constructor(props) {
    super(props)
    this.setColor = this.setColor.bind(this);
    }
  
  getColor() {
    let x = Math.floor(Math.random() * 255);
    let y = Math.floor(Math.random() * 255);
    let z = Math.floor(Math.random() * 255);
    return "rgb(" + x + ", " + y + ", " + z + ")";
  }

  setColor(event) {
    event.target.style.background = this.getColor();
    event.target.style.color = this.getColor();
  }
  
  render() {
    return (
      <div>
        <p>Хоббі:</p>
        <ul>
          <li style={{ cursor: 'pointer' }} onClick={this.setColor}>Заняття спортом</li>
          <li style={{ cursor: 'pointer' }} onClick={this.setColor}>Програмування</li>
          <li>Перегляд фільмів</li>
          <li>Читання книг</li>
          <li>Комп'ютерні ігри</li>
        </ul>
        <p>Улюблені фільми:</p>
        <ol>
          <li>Втеча із Шоушенка</li>
          <li>Зелена миля</li>
          <li>Початок</li>
          <li>Великий куш</li>
          <li>Відступники</li>
        </ol>
        <p>
          Київ — столиця та найбільше місто України, одне   знайбільших і
          найстаріших міст Європи. Розташований у середній  течіїДніпра, у
          північній Наддніпрянщині. Політичний, соціально-економічний,
          транспортний, освітньо-науковий, історичний, культурнийта   духовний
          центр України. У системіадміністративно-територіального   устрою України
          Київ має спеціальний статус, визначений Конституцією, іне   входить до
          складу жодної області, хоча і є адміністративнимцентром   Київської
          області. Місце розташування центральних органів   владиУкраїни, іноземних
          місій, штаб-квартир більшості підприємств і   громадськихоб'єднань, що
          працюють в Україні.
        </p>
        <a href="https://kyivcity.gov.ua" target="_blank" rel="noreferrer">
          <img
          src="https://klike.net/uploads/posts/2020-03/1583228455_1.jpg"
          alt="Фото м. Київ"
          height="400px"
          width="600px" />
        </a>   
        <hr />
      </div>
    )
  }
}

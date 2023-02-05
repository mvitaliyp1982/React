import React, { Component } from 'react';
import './MusicGroupDisplay.css';

const profile = {
  h1: 'Displaying some MusicGroup!',
  date: {
    d1: 'Дата народження',
    d2: '21 вересня 1986',
  },
  performer: {
    p1: 'Виконавець',
    p2: 'Ліндсі Стерлінг',
  },
  activity: {
    activity1: 'Роки активності',
    activity2: '2011 — теперішній час',
  },
  about: {
    a0: 'About',
    a1: "Ліндсі Стерлінг (Lindsey Stirling, нар. 21 вересня 1986) — американська скрипалька, танцівниця, перформанс-художниця та композиторка. Виступає із грою на скрипці в танцювальних перформансах — як на концертах, так і в відеокліпах, які можна переглянути на її YouTube-каналі, який виконавиця започаткувала 2007 року. 2010 року Стерлінг стала чверть-фіналісткою п'ятого сезону шоу America's Got Talent («Америка має талант»), де її називали «хіп-хоп скрипалькою» (англ. Hip-hop Violinist).",
    a2: 'З 2010 року Стерлінг випустила два альбоми, названі відповідно — Lindsey Stirling та Shatter Me',
    a3: '18 травня, 2011	Відеокліп:«Spontaneous Me»	Перегляди на YouTube:18,709,804',
    a4: '18 вересня, 2012	Відеокліп:«Elements (оригінальна версія)»	Перегляди на YouTube:50,345,245',
    a5: '23 лютого, 2012	Відеокліп:«Crystallize»	Перегляди на YouTube:107,851,455',
    a6: '9 січня, 2012	Відеокліп:«Shadows»	Перегляди на YouTube:44,680,867',
  },
  src: {
    src1: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Lindsey_Stirling.jpg',
    src2: 'https://lastfm.freetls.fastly.net/i/u/770x0/cb85495b0bfd40ebc0ba63618ad5b551.jpg#cb85495b0bfd40ebc0ba63618ad5b551',
    src3: 'https://lastfm.freetls.fastly.net/i/u/770x0/f5212d1e36ac4dac817c133be39d9c73.jpg#f5212d1e36ac4dac817c133be39d9c73',
    src4: 'обкладинки альбомів',
  },
  awards: {
    aw1: 'Нагороди та номінації',
    aw2: '2014	Категорія:Best Crossover Act	Твір:Lindsey Stirling	Результат:Перемога',
    aw3: '2014	Категорія:Best Musical Artist	Твір:Lindsey Stirling	Результат:Перемога',
    aw4: '2013	Категорія:Response of the Year	Твір:"Radioactive" (із Pentatonix)	Результат:Перемога',
  }
}

class MusicGroupDisplay extends Component {
  render() {
    return (
      <>
      <hr></hr>
      <h1>{profile.h1}</h1>
      <div className='block'>
        <div className='table'>
        <table>
        <caption>{profile.performer.p2}<p></p></caption>
          <tbody>
            <tr><td>{profile.performer.p1}</td><td>{profile.performer.p2}</td></tr>
            <tr><td>{profile.date.d1}</td><td>{profile.date.d2}</td></tr>
            <tr><td>{profile.activity.activity1}</td><td>{profile.activity.activity2}</td></tr>
            <tr><td>{profile.about.a0}</td><td>
              <p>{profile.about.a1}</p><p>{profile.about.a2}</p>
              <p>{profile.about.a3}</p><p>{profile.about.a4}</p>
              <p>{profile.about.a5}</p><p>{profile.about.a6}</p>
            </td></tr>
            <tr><td>{profile.src.src4}</td><td>
              <img width="390" height="270" src={profile.src.src2} alt='img'></img>
              <img width="390" height="270" src={profile.src.src3} alt='img'></img>
            </td></tr>
            <tr><td>{profile.awards.aw1}</td><td>
              <p>{profile.awards.aw2}</p><p>{profile.awards.aw3}</p>
              <p>{profile.awards.aw4}</p>
            </td></tr>
          </tbody>
        </table>
        </div>
        <div className='imgM'>
          <img src={profile.src.src1} alt='img'></img>
        </div>
      </div>
      </>
    );
  }
}
  
export default MusicGroupDisplay;
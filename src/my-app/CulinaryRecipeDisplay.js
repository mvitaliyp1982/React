import React, { Component } from 'react';
import './CulinaryRecipeDisplay.css';

const profile = {
  h1: 'Displaying some CulinaryRecipe!',
  dish: 'Борщ',
  src: {
    src1: 'https://images.unian.net/photos/2020_04/1588081977-7108.jpg',
    src2: 'https://klopotenko.com/wp-content/uploads/2021/04/Borsh-v-rzhanom-hlebe_statia.jpg',
    src3: 'https://klopotenko.com/wp-content/uploads/2021/04/Postnyi-borsh-polesia_statia.jpg',
  },
  about: {
    a0: 'About',
    a1: 'Борщ – це культурне надбання України, наша гордість та кулінарний символ нашої країни. Бути байдужим до цього густого наваристого супу просто неможливо.',
    a2: 'Рецептів борщу існує безліч і ледь не кожна господиня має свій власний. Хтось любить борщ із квасолею, хтось готує без капусти, а хтось варить його з грибами. Доволі часто рецепти борщу в сім’ях дбайливо передаються з покоління в покоління, а деякі навіть тримаються у суворій таємниці',
  },
  recipe: {
    r0: 'Рецепт',
    r1: 'Вода – 1,5-2 л.',
    r2: 'свинина або яловичина на кістці – 400 г',
    r3: 'картопля – 4 шт. (середні)',
    r4: 'буряк – 2 шт. (невеликі)',
    r5: 'морква – 1 шт.',
    r6: 'цибуля – 3 шт. (середні)',
    r7: 'капуста білокачанна свіжа – 300 г',
    r8: 'томатна паста – 2 ст. л.',
    r9: 'соняшникова олія – 4-5 ст. л.',
    r10: 'лимонна кислота – дрібка',
    r11: 'сіль, лавровий лист, зелень – за смаком.',
    r12: 'Спершу варимо бульйон. У каструлю наливаємо 1,5-2 літра води. Додаємо м’ясо й ставимо на середній вогонь. Перед закипанням знімаємо піну. Щойно бульйон закипить, накриваємо кришкою і варимо на повільному вогні годину-півтори.',
    r13: 'Тим часом готуємо засмажку. Чистимо буряк, моркву та цибулю. Буряк натираємо на крупній тертці, а моркву – на середній. Цибулю нарізаємо кубиками.',
    r14: 'На середньому вогні в сковороді розігріваємо олію, висипаємо туди цибулю та моркву, смажимо 5 хвилин. Потім додаємо буряк (його можна посипати лимонною кислотою або збризнути соком свіжого лимона – так борщ буде по-справжньому червоним). Смажимо овочі ще 5 хвилин, додаємо томатну пасту, перемішуємо й смажимо все ще 5-7 хвилин.',
    r15: 'А тепер варимо сам борщ. З бульйону виймаємо м’ясо і, поки воно холоне, кидаємо в бульйон нашатковану капусту. Через 5-10 хвилин додаємо нарізану соломкою картоплю. Відокремлюємо м’ясо від кістки й нарізаємо кубиками. Повертаємо м’ясо в борщ, солимо його і додаємо засмажку. Перемішуємо борщ, кладемо лавровий лист і дрібно посічену зелень, накриваємо кришкою та варимо все ще 5-7 хвилин.',
    r16: 'Подаємо борщ зі сметаною і зеленню.',
  },
}

class CulinaryRecipeDisplay extends Component {
    render() {
      return (
        <>
        <hr></hr>
        <h1>{profile.h1}</h1>
        <div className='block'>
          <div className='table'>
            <table>
            <caption>{profile.dish}<p></p></caption>
              <tbody>
                <tr><td>{profile.about.a0}</td><td>
                  <p>{profile.about.a1}</p>
                  <p>{profile.about.a2}</p>
                </td></tr>
                <tr><td>{profile.recipe.r0}</td><td>
                  <p>{profile.recipe.r1}</p><p>{profile.recipe.r2}</p><p>{profile.recipe.r3}</p>
                  <p>{profile.recipe.r4}</p><p>{profile.recipe.r5}</p><p>{profile.recipe.r6}</p>
                  <p>{profile.recipe.r7}</p><p>{profile.recipe.r8}</p><p>{profile.recipe.r9}</p>
                  <p>{profile.recipe.r10}</p><p>{profile.recipe.r11}</p><p>{profile.recipe.r12}</p>
                  <p>{profile.recipe.r13}</p><p>{profile.recipe.r14}</p><p>{profile.recipe.r15}</p>
                  <p>{profile.recipe.r16}</p>
                </td></tr>
              </tbody>
            </table>
          </div>
          <div className='imgR'>
            <img src={profile.src.src1} alt='img'></img>
            <img src={profile.src.src2} alt='img'></img>
            <img src={profile.src.src3} alt='img'></img>
          </div>
        </div>
        </>
      );
    }
  }

export default CulinaryRecipeDisplay;
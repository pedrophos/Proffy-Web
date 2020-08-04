import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return(
    <article className="teacher-item">
    <header>
      <img 
        src="https://avatars1.githubusercontent.com/u/25045150?s=460&u=3339f7342fc7487e816a7307bbfd7e5ef9fc8a88&v=4" 
        alt="Pedro Henrique" />
        <div>
          <strong>Pedro Henrique</strong>
          <span>Física</span>
        </div>
    </header>

    <p>
      Descrição da materia informada pelo professor
      <br /><br />
      continuação da descrição da materia
    </p>

    <footer>
      <p>
        Preço por hora/aula
        <strong>R$ 50,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="Whatsapp" />
        Entrar em contato
      </button>
    </footer>
  </article>
  );
}

export default TeacherItem;
import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/61281655?s=460&u=adcd857d35c8443db370e5529ac5f17d8d9a4874&v=4" alt="Rafael Martins"/>
        <div>
          <strong>Rafael Martins</strong>
          <span>CSS</span>
        </div>
      </header>

      <p>
        Seu objetivo é capturar todos os Pokémon existentes e listá-los em usa PokéAgenda. 
        <br/> 
        <br/> 
        Além disso, precisa batalhar pelas suas insígnias nos ginásios oficializados pela Liga Pokémon.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$15,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;
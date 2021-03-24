import React from 'react'

export default function home() {
  return <div>

    <form id="form-geral"
      name="contact v1"
      method="post"
      data-netlify="true"
      onSubmit="submit"
      action="/success/"
      data-netlify-honeypot="bot-field"
    >

      <input type="hidden" name="form-name" value="contact v1"

      />

      <div hidden>
        <input name="bot-field" />

      </div>

      <div>
        <label> Nome <br />
          <input type="text" name="first-name" autoComplete="off"/>
        </label>
      </div>


      <div>
        <label> Sobrenome <br />
          <input type="text" name="last-name" autoComplete="off" />
        </label>
      </div>

      <div>
        <label> Telefone  <br />
          <input type="text" name="last-name" autoComplete="off" />
        </label>
      </div>

      <div>
        <label htmlFor="email">Email</label> <br />
        <input id="email" type="email" name="email" autoComplete="off" />
      </div>



      <div>
        <label> Comentário <br />
          <textarea name="comments"></textarea>

        </label>


      </div>

      <button type="submit">Enviar Informações</button>




    </form>

  </div>



}



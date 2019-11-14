import React from 'react';
import MailChimp from 'react-mailchimp-form';

const MailChimpForm = () => {

    const url = "https://gmail.us20.list-manage.com/subscribe/post?u=8df4e9d7ef914ee5d2b3eae3c&amp;id=97553bb9a6";
    const fields = [
        {
          name: 'EMAIL',
          placeholder: 'Digite seu e-mail',
          type: 'email',
          required: true
        }
      ];

      const messages = {
        sending: "Enviando...",
        success: "Obrigada por se inscrever!",
        error: "Oops! Um erro inesperado aconteceu.",
        empty: "Você precisa preencher com um e-mail válido.",
        duplicate: "Esse e-mail já está cadastrado.",
        button: "Assinar"
      };

    return (
        <div>
            <MailChimp action={url} fields={fields} messages = {messages} className='mailchimp-form'/>
        </div>
    )
};

export default MailChimpForm;

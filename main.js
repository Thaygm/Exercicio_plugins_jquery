$('#telefone').mask('(00) 00000-0000')

$('#CPF').mask('000.000.000-00')

$('#CEP').mask('00000-0000')

$('form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true,
        },
        CPF: {
            required: true,
        },
        endereco: {
            required: true,
        },
        CEP: {
            required: true,
        },
        mensagem: {
            required: true,
        }
    },
    messages: {
        nome: 'Insira seu nome!',
        email: 'Insira seu email!',
        CPF: 'Insira seu CPF!',
        telefone: 'Insira seu telefone!',
        CEP: 'Insira seu CEP!',
        endereco: 'Insira seu endereço!'
    },
    submitHandler: function (form) {
        console.log(form)
    },
    invalidHandler: function (evento, validador) {
        let camposIncorretos = validador.numberOfInvalids();
        if (camposIncorretos) {
            alert(`Existem ${camposIncorretos} campos incorretos!`)
        }
    }
})
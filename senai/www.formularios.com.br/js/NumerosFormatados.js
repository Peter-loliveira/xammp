var numeroFormatado = Intl.NumberFormat('pt-br',{
    style: 'currency',
    currency: 'BRL'
}).format(12563.6545)
console.log(numeroFormatado)
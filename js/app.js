let btn = document.getElementById('btn')
let table = document.getElementById('resultado')

let arrAluno = []

function cadastrar() {

    let aluno = {
        nome: document.getElementById('nome').value,
        sobrenome: document.getElementById('sobrenome').value,
        media1: document.getElementById('media1').value,
        media2: document.getElementById('media2').value,
        media3: document.getElementById('media3').value,
        media4: document.getElementById('media4').value,

        mediafinal: MediaFinal(document.getElementById('media1').value, document.getElementById('media2').value,   document.getElementById('media3').value, document.getElementById('media4').value),

        menção: Menção(MediaFinal(document.getElementById('media1').value, document.getElementById('media2').value, document.getElementById('media3').value, document.getElementById('media4').value)),
    }

    arrAluno.push(aluno)

    console.log(arrAluno)


    imprimir()
}

function imprimir() {


    table.innerHTML =''
    for (let i = 0; i < arrAluno.length; i++) {
        table.innerHTML += `
        <tr>
            <td>${arrAluno[i].nome} </td>
            <td> ${arrAluno[i].sobrenome}</td>
            <td>${arrAluno[i].media1} </td>
            <td> ${arrAluno[i].media2}</td>
            <td> ${arrAluno[i].media3}</td>
            <td> ${arrAluno[i].media4}</td>
            <td> ${arrAluno[i].mediafinal}</td>
            <td> ${arrAluno[i].menção}</td>
        </tr>

        `
    }




}

function MediaFinal(media1, media2, media3, media4) {
return ((parseFloat(media1)) + (parseFloat(media2)) + (parseFloat(media3)) + (parseFloat(media4))) /4


}

function Menção(mediafinal) {

    if (mediafinal <= 3.0) {
        return 'Reprovado'
    } else if (mediafinal <= 5.0) {
        return 'Recuperação'
    } else if (mediafinal >= 6.0) {
        return 'Aprovado'
    } else {
        return 'Média Indefinida'
    }
}


btn.addEventListener('click', cadastrar)


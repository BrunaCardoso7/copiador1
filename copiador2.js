//transformar em variável os id html
const primeira_caixa = document.querySelector("#caixa1")
const segunda_caixa = document.querySelector("#caixa2")
const btn_clicou = document.querySelector("#btn_transferir")
const btn_desclicou = document.querySelector("#btn_copy")
//Array para os elementos que contem classe curso
const cursos = [...document.querySelectorAll(".curso")]
//mapeou o array cursos
cursos.map((el)=>{
    //adicionou evento click em todo os elementos do array mapeados
    el.addEventListener("click", (evt)=>{
        //fez a leitura e adicionou a class selecionado no elementos mapeados
        const el = evt.target
        //toggle ação de marcar e desmacar com click
        el.classList.toggle("selecionado")
    })
})

//adicinou a ação de click co botão
btn_transferir.addEventListener("click", ()=>{
    //criamos arrays por curso selecionados e não selecionados
    const curso_selecionado = [...document.querySelectorAll(".selecionado")]
    const cursoNaoSelecionados = [...document.querySelectorAll(".curso:not(.selecionado)")]
    //fizemos o mapeamento de ambos dos arrays e adicionamos a função de append child de adicionar alogo em outro
    curso_selecionado.map((el)=>{
        segunda_caixa.appendChild(el)
    })
    cursoNaoSelecionados.map((el)=>{
        primeira_caixa.appendChild(el)
    })
})

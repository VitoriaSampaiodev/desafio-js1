console.log("Ano novo está chegando!!");

let nomeCantora = "Mariah Carey"
let idadeCantora = 54;

let anoAtual = 2023;
let anoNascimentoCantora = anoAtual - idadeCantora;
console.log("Ano de nascimento da Mariah Carey:", anoNascimentoCantora);

let quartaFeira = false;
console.log("É quarta-feira?", quartaFeira);
console.log("Tipo de dado da variável quartaFeira é:", typeof quartaFeira);


let suaIdade = 24;
if (suaIdade >= 18){
    console.log("Você é maior de idade, poderá curtir o show do Roberto Carlos com participação especial de Mariah Carey");
} else {
    console.log("Sinto muito, mas assistirá da TV Globo.");
}

let mesAniversario = "Novembro";
if (mesAniversario === "Agosto" || mesAniversario === "Dezembro" || mesAniversario === "Junho") {
    console.log ("Uma ou mais opções estão corretas. O mês escolhido foi o mês", mesAniversario);
} else {
    console.log("Algo de errado não está certo. O mês digitado foi o mês de", mesAniversario);

}


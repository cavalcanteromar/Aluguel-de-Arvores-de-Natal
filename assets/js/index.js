var btn = document.getElementById("seleciona");
// plano semanal
var planWeekly = [{
        id: "basico",
        p2: "por semana",
        h1: "9,99",
        h3: "Básico"
    },
    {
        id: "super",
        p2: "por semana",
        h1: "14,99",
        h3: "Super"
    },
    {
        id: "mega",
        p2: "por semana",
        h1: "29,99",
        h3: "Mega"
    },
];
// plano mensal
var planMonthly = [{
        id: "basico",
        p2: "por mês",
        h1: "29,99",
        h3: "Básico"
    },
    {
        id: "super",
        p2: "por mês",
        h1: "59,99",
        h3: "Super"
    },
    {
        id: "mega",
        p2: "por mês",
        h1: "99,99",
        h3: "Mega"
    },
]


// função que cria o card dos planos
function createElements(t1, t2, t3, id) {
    // criando as tags
    let plan = document.getElementById("plan");
    let a = document.createElement("a");
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let img = document.createElement("img");
    let h1 = document.createElement("h1");
    let h3 = document.createElement("h3");

    // inserindo as classes e img
    div1.className = "card";
    img.src = "assets/img/arvores/tree.png";
    p1.id = "text_plano";
    p2.id = "type_plano";
    a.className = "list-card";
    // a.href = "#";
    a.setAttribute("id", id);
    h1.id = "valor_plano"
    h3.id = "plano_atual"



    // inserindo o conteudo das tags
    p1.innerText = "Plano";
    p2.innerText = t3;
    h1.innerHTML = t2;
    h3.innerHTML = t1;

    // inserindo as tags dentro das outras
    div2.appendChild(img);

    div3.appendChild(p1);
    div3.appendChild(p2);
    div3.appendChild(h1);
    div3.appendChild(h3);

    div1.appendChild(div2);
    div1.appendChild(div3);
    a.appendChild(div1);
    plan.appendChild(a);

    return plan;
}

// função que insere os dados dos cards
function plansWeekly() {
    createElements(
        planWeekly[0].p2,
        planWeekly[0].h1,
        planWeekly[0].h3,
        planWeekly[0].id,
    );
    createElements(
        planWeekly[1].p2,
        planWeekly[1].h1,
        planWeekly[1].h3,
        planWeekly[1].id,
    );
    createElements(
        planWeekly[2].p2,
        planWeekly[2].h1,
        planWeekly[2].h3,
        planWeekly[2].id,
    );
}

function plansMonthly() {
    createElements(
        planMonthly[0].p2,
        planMonthly[0].h1,
        planMonthly[0].h3,
        planWeekly[0].id,
    );
    createElements(
        planMonthly[1].p2,
        planMonthly[1].h1,
        planMonthly[1].h3,
        planWeekly[1].id,
    );
    createElements(
        planMonthly[2].p2,
        planMonthly[2].h1,
        planMonthly[2].h3,
        planWeekly[2].id,
    );
}

plansWeekly();

// Função de troca de Semana para Mês
btn.addEventListener('click', () => {
    var forWeek = document.getElementById("forweek");
    var forMonth = document.getElementById("forMonth");


    var plan = document.getElementById("plan");
    var a = document.getElementsByClassName("list-card");

    if (btn.checked) {
        forWeek.style.fontWeight = 'normal';
        forMonth.style.fontWeight = 'bold';
        while (plan.firstChild) {
            plan.removeChild(plan.firstChild);
        }
        plansMonthly();
        selecionaCard();
    } else {
        forWeek.style.fontWeight = 'bold';
        forMonth.style.fontWeight = 'normal';
        while (plan.firstChild) {
            plan.removeChild(plan.firstChild);
        }
        plansWeekly();
        selecionaCard();
    }

})

// função que seleciona o card de acordo com o preço
function selecionaCard() {
    var basico = document.getElementById("basico");
    var s = document.getElementById("super");
    var mega = document.getElementById("mega");
    var plan = document.getElementById("plan");
    var telacheia = document.getElementById("telacheia");
    var close_qtd = document.getElementById("close_qtd");


    basico.addEventListener("click", () => {
        telacheia.classList.add("telacheia");
        telacheia.classList.remove("hide");
        telacheia.classList.add("show");
        var tipo = basico.id;
        var valor = "9,99";
        valores(tipo, valor);
    })
    s.addEventListener("click", () => {
        telacheia.classList.add("telacheia");
        telacheia.classList.remove("hide");
        telacheia.classList.add("show");
        var tipo = s.id;
        var valor = "14,99"
        valores(tipo, valor);

    })
    mega.addEventListener("click", () => {
        telacheia.classList.add("telacheia");
        telacheia.classList.remove("hide");
        telacheia.classList.add("show");
        var tipo = mega.id;
        var valor = "29,99";
        valores(tipo, valor);
    })

    close_qtd.addEventListener("click", () => {
        telacheia.classList.add("hide");
        telacheia.classList.remove("show");
    })
}

selecionaCard();

// Função que fecha a aba de quantidade
var telacheia = document.getElementById("telacheia");
close_qtd.addEventListener("click", () => {
    telacheia.className = "hide";
});


function mostraValorTotal() {
    var btn_confirmar = document.getElementById("btn_confirma_semanas");
    var telacheia = document.getElementById("telacheia");
    var total_da_compra = document.getElementById("total_da_compra");
    btn_confirmar.addEventListener("click", () => {
        total_da_compra.style.display = "flex";
        telacheia.className = "hide";


    });
}

mostraValorTotal();




function valores(tipo, valor) {

    var tipo = tipo;
    var valor = valor;
    console.log(tipo);
    console.log(valor);


    // dados do total
    var plano = document.getElementById("plano_x");
    var val = document.getElementById("valor_x");
    var valorTotal = document.getElementById("total_valor");

    // quantidade selecionada
    var number = document.getElementById("number").value;


    if (tipo == "basico") {

        var convertido = valor.replace(",", ".");
        var total = number * convertido;
        var string = "" + total;
        var reconvertido = string.replace(".", ",");

        var btn_confirma = document.getElementById("btn_confirma_semanas");
        btn_confirma.addEventListener("click", () => {
            plano.innerHTML = tipo;
            val.innerHTML = valor;
            valorTotal.innerHTML = reconvertido;

        });

    }


    if (tipo == "super") {

        var convertido = valor.replace(",", ".");
        var total = number * convertido;
        var string = "" + total;
        var reconvertido = string.replace(".", ",");

        var btn_confirma = document.getElementById("btn_confirma_semanas");
        btn_confirma.addEventListener("click", () => {
            plano.innerHTML = tipo;
            valor.innerHTML = valor;
            valorTotal.innerHTML = reconvertido;

        });
    }


    if (tipo == "mega") {

        var convertido = valor.replace(",", ".");
        var total = number * convertido;
        var string = "" + total;
        var reconvertido = string.replace(".", ",");

        var btn_confirma = document.getElementById("btn_confirma_semanas");
        btn_confirma.addEventListener("click", () => {
            plano.innerHTML = tipo;
            valor.innerHTML = valor;
            valorTotal.innerHTML = reconvertido;

        });
    }




}

// fecha tela de cancelamento
function cancelar() {
    document.getElementById("cancelar").addEventListener("click", () => {
        document.getElementById("total_da_compra").style.display = "none";
    });
}

cancelar();


// abre tela de agradecimento
document.getElementById("confirmar").addEventListener("click", () => {
    document.getElementById("agradecemos").style.display = "flex";
    document.getElementById("total_da_compra").style.display = "none";
});

// fecha tela de agradecimento
document.getElementById("fechar").addEventListener("click", () => {
    document.getElementById("agradecemos").style.display = "none";
});
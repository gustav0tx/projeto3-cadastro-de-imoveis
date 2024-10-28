let propety = []
let hub = ``
do {
    switch(parseInt(hub)) {
        case 1:
            let home = {
                ower: prompt('Nome do dono'),
                rooms: parseInt(prompt('quantidade de quartos')),
                bathrooms: parseInt(prompt('quantidade de banheiros')),
                garage: prompt('Ha garagem')
            }
            let conf = confirm("deseja salvar este imovel")
            if (conf == true) {
                propety.push(home)
            }
            break
        case 2:
            alert(`dono:${home.ower}\nquartos:${home.rooms}\nbanheiro${home.bathrooms}\ngaragem${home.garage}`)  
    }
    hub = prompt(`QUANTIDADE DE IMOVEIS:\n${propety.length}\nOPÇÕES:\n1:Salvar imovel\n2:Listar imoveis\n3:Sair`)
} while (hub != 3)
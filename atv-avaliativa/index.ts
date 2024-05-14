class Menu {
    private meuArray: ItemMenu[];

    constructor() {
        let op1 = new ItemMenu("1", "atacar");

        this.meuArray.push(op1);

        let op2 = new ItemMenu("2", "Ataque especial");

        this.meuArray.push(op2);

        let op3 = new ItemMenu("3", "Tomar poção de Cura de HP");

        this.meuArray.push(op3);

        let op4 = new ItemMenu("4", "tomar poção que restaura MP")

        this.meuArray.push(op4);

        let op5 = new ItemMenu("5", "Defender")

        this.meuArray.push(op5);
    }

    getimprimirMenu() {

        var entrada = require('prompt-sync')();

        let opcaoSelecionada = entrada("1,2,3,4,5")
        return opcaoSelecionada;
    }

}

class ItemMenu {
    private opcao: string
    private textoDaOpcao: string

    constructor(o: string, t: string) {
        this.opcao = o;
        this.textoDaOpcao = t;
    }
}

class Coliseu {
    boos: Monstro




}

class Monstro {
    HP: number
    forcadeataque: number
    forcadedefesa: number

    receberDano(danoSofrido) {
        let HPtotal = this.HP
        let Danoreduzido = danoSofrido * 0.5
        if (HPtotal <= 0.25) {
            this.forcadeataque += this.forcadeataque * 0.1
            this.forcadedefesa += this.forcadedefesa * 0.3
            this.HP -= Danoreduzido
        }
        else {
            this.HP -= danoSofrido
            var danoArmadura = danoSofrido - this.forcadedefesa
            if (this.HP <= 0) {
                console.log("monstro derrotado")
            }

        }
    }
}

class Equipamento {
    private nomedoesquipamento: string;
    private aumentoAtaque: number;
    private aumentoDefesa: number;

    constructor(espada: string, aumentoAtaque: number, aumentoDefesa: number) {
        this.nomedoesquipamento = espada;
        this.aumentoAtaque = aumentoAtaque;
        this.aumentoDefesa = aumentoDefesa;
    }

    exibirInformacoes(): void {
        console.log("espada:", this.nomedoesquipamento);
        console.log("Aumento de Ataque:", this.aumentoAtaque);
        console.log("Aumento de Defesa:", this.aumentoDefesa);
    }

// Getter e Setter para nomedoesquipamento
getNomedoesquipamento(): string {
    return this.nomedoesquipamento;
}

setNomedoesquipamento(value: string) {
    this.nomedoesquipamento = value;
}

// Getter e Setter para aumentoAtaque
getAumentoAtaque(): number {
    return this.aumentoAtaque;
}

setAumentoAtaque(value: number) {
    this.aumentoAtaque = value;
}

// Getter e Setter para aumentoDefesa
getAumentoDefesa(): number {
    return this.aumentoDefesa;
}

setAumentoDefesa(value: number) {
    this.aumentoDefesa = value;
}
}

const equipamento = new Equipamento("Espada Mágica", 10, 5);
equipamento.exibirInformacoes();




class Lutador {
    HP: number;
    MP: number;
    ataque: number;
    defesa: number;
    equipamentoCabeca: Equipamento;
    equipamentoCorpo: Equipamento;
    equipamentoMao: Equipamento;

    exibirinfolutador() {
        console.log("HP:" + this.HP + "\n mp:" + this.MP + "ataquelutador:" + this.ataquelutador + this.ataqueespecial())

    }

    ataquelutador() {
        return this.ataque + this.equipamentoCabeca.getAumentoAtaque() + this.equipamentoCorpo.getAumentoAtaque() + this.equipamentoMao.getAumentoAtaque()
    }
    defesadolutador() {
        return this.defesa + this.equipamentoCabeca.getAumentoAtaque()+ this.equipamentoCorpo.getAumentoDefesa()+ this.equipamentoMao.getAumentoDefesa()
    }

    tomarpocaoHP() {
        this.HP * 0, 25
    }

    tomarpocapMP() {
        this.MP * 0, 25
    }

    ataqueespecial() {

        if (this.MP < this.MP * 0, 2) {
            return 0;
        }

        this.MP -= this.MP * 0, 2
        return this.ataquelutador() * 1, 5;

    }

    receberdano(danoSofrido) {
        if (this.defesa > danoSofrido) {
            return 0;
        }
        this.HP = this.HP - (danoSofrido - this.defesa)
    }
}

class Jogo {
    menu: Menu
    lutador: Lutador
    coliseu: Coliseu

    constructor(menu: Menu, lutador: Lutador, coliseu: Coliseu) {
        this.menu = menu
        this.lutador = lutador
        this.coliseu = coliseu

    }
    jogar() {

        while (this.lutador.HP > 0 && this.coliseu.boos.HP > 0  ) {
            let op = this.menu.getimprimirMenu();

            switch (op) {
                case "1":
                    this.coliseu.boos.receberDano(lutador.ataquelutador())
                    break;
                case "2":
                    this.coliseu.boos.receberDano(lutador.ataqueespecial())
                    break;
                case "3":
                    console.log("Opção 3 selecionada");
                    break;
                case "4":
                    console.log("Opção inválida");
                    break;
                case "5":
                    break;
            }

            if (this.coliseu.boos.HP <= 0) {
                console.log("Parabéns! Você venceu a luta do Coliseu.")
            } else {
                this.lutador.receberdano(coliseu.boos.forcadeataque)


                if (this.lutador.HP <= 0) {
                    console.log("Voce foi destroçado pelo monstro")

                }
            }
        }



    }
}


let lutador = new Lutador()
let coliseu = new Coliseu()
let menu = new Menu

let jogo = new Jogo(menu, lutador, coliseu)
jogo.jogar()

class hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    attack() {
        let attack;

        if(this.type === "mago") {
            attack = "magia";
        } else if(this.type === "guerreiro") {
            attack = "espada";
        } else if(this.type === "monge") {
            attack = "artes marciais";
        } else if(this.type === "ninja") {
            attack = "shuriken";
        }

        console.log(`O ${this.type} atacou usando ${attack}`)

    }
}

const heroi1 = new hero("Markkur", 26, "ninja");

const heroi2 = new hero("Celebrum", 400, "guerreiro");

const heroi3 = new hero("Artzin", 100, "mago");

const heroi4 = new hero("Angles", 27, "monge");


heroi1.attack();
heroi2.attack();
heroi3.attack();
heroi4.attack();
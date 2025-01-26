class Guerrier {
    constructor(name, health, attack, precision){
        this.attack=attack;
        this.precision=precision;
        this.name=name;
        this.health=health;
    }

    doPrecision(){
        if(this.precision>Math.random()){
            return true
        } else {
            return false
        }
    }

    doAssault(){

        if(this.doPrecision()===true){
            console.log(this.name,"fais",this.attack,"de dégâts")
            return this.attack
        } else {
            console.log("L'attaque de",this.name,"échoue")
            return 0
            }
        }
    

    doHurt(degats){
        this.health-=degats
        if(this.health<=0){
            console.log(this.name,"prends",degats,"de dégâts. Il a maintenant 0 PV")
            console.log(" ");
            console.log("-----------------------------------");
            console.log(" ");
            console.log(this.name,"a été terrassé !")
        } else if (degats>0){
            console.log(this.name,"prends",degats,"de dégâts. Il a maintenant",this.health,"PV")
        }
        }
}

function combat(joueur_1, joueur_2) {
    console.log("");
    console.log("");
    console.log("");
    
    console.log("     &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&     ");
    console.log("   &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&   ");
    console.log(" &&&&&&                           &&&&&& ");
    console.log("&&&&&   Q U E   L E   C O M B A T   &&&&&");
    console.log("&&&&&        C O M M E N C E        &&&&&");
    console.log(" &&&&&&                           &&&&&& ");
    console.log("   &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&   ");
    console.log("     &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&     ");

    console.log("");
    console.log("");
    console.log("");

    tour=1
    
    while (joueur_1.health > 0 && joueur_2.health > 0) {
        console.log("");
        console.log("            T O U R  ",tour,"           ");
        console.log("");
        joueur_2.doHurt(joueur_1.doAssault());
        if (joueur_2.health <= 0) {
            // Si le joueur 2 est mort, on sort de la boucle
            vainqueur=joueur_1
            break;
        }

        console.log("");
        joueur_1.doHurt(joueur_2.doAssault());
        if (joueur_1.health <= 0) {
            // Si le joueur 1 est mort, on sort de la boucle
            vainqueur=joueur_2
            break;
        }
        tour++
    }
    console.log("Il restes",vainqueur.health,"PV à",vainqueur.name)
    console.log("Combat terminé ! Cela a pris",tour,"tours.");
}





let joueur_1 = new Guerrier("Gabinks",50,4,0.7);
let joueur_2 = new Guerrier("Ambre",30,6,0.8);



combat(joueur_1,joueur_2)
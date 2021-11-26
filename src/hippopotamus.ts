// Créer une class Hippopotamus qui hérite de la classe Animal
// modifier la méthode eat pour que l'hippopotame prenne 20 de poids si l'aliment qu'il mange est un légume
// si l'aliment qu'il mange est de la viande, il pousse (renvoie) un cri de dégout : "beurk" et son poids n'augmente pas
// l'hippopotame perd 20 de poids lorsqu'il dort
// ajouter une méthode swim() qui ne renvoie rien mais baisse le poids de 50.

import Animal from './animal.class';
import Food from './food/food';
import MyCalculator from './calculator';

export default class Hippopotamus extends Animal{
  swim() {
    this.weight = MyCalculator.subtract( this.weight , 50)
  }
  hippoEat(food){
    if(food === "meat"){
      return 'beurk'
    }
    else(){
    this.eat(food);
    }

  }
  // CODER ICI
}

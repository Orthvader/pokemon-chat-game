const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    CHARMOVESELECTION: Symbol("charmoveselection"),
    BULBMOVESELECTION: Symbol("bulbmoveselection"),
    SQUIMOVESELECTION: Symbol("squimoveselection"),
    ENDGAME: Symbol("endgame"),

    BITE: Symbol("bite"),
    FLAMETHROWER: Symbol("flamethrower"),
    EMBER: Symbol("ember"),
    SCRATCH: Symbol("scratch"),
    GRASSKNOT: Symbol("grass knot"),
    VINEWHIP: Symbol("vine whip"),
    RAZORLEAF: Symbol("razor leaf"),
    SURF: Symbol("surf"),
    STOMP: Symbol("stomp"),
    BUBBLE: Symbol("bubble"),
    HEADBUTT: Symbol("headbutt"),
    TACKLE: Symbol("tackle")
    

});

export default class Game{
    constructor(){
        
        this.stateCur = GameState.WELCOMING;
        
    }
    
    makeAMove(sInput)
    {

        let sReply = "";

        switch(this.stateCur){
            case GameState.WELCOMING:
                sReply = "You dare challenge I, Professor Oak, to a fight? Bring it on! Who will you throw out? Charmander, Bulbasaur, or Squirtle?";

                if(sInput.toLowerCase().match("charmander")){
                    sReply = "Professor Oak has brought out, Rhyhorn! Type Battle to start the Fight!";
                    this.stateCur = GameState.CHARMOVESELECTION;
                }
                else if(sInput.toLowerCase().match("bulbasaur")){
                    sReply = "Professor Oak has brought out, Rhyhorn! Type Battle to start the Fight!";
                    this.stateCur = GameState.BULBMOVESELECTION;
                }
                else if(sInput.toLowerCase().match("squirtle")){
                    sReply = "Professor Oak has brought out, Rhyhorn! Type Battle to start the Fight!";
                    this.stateCur = GameState.SQUIMOVESELECTION;
                }
                break;

            case GameState.CHARMOVESELECTION:
                sReply = " Which move will you use? Bite, Flamethrower, Ember, Scratch?";
                if(sInput.toLowerCase().match("bite")){
                    sReply = " You chose Bite, type Bite again to accept";
                    this.stateCur = GameState.BITE;
                }
                else if (sInput.toLowerCase().match("flamethrower")){
                    sReply = " You chose Flamethrower, type Flamethrower again to accept";
                    this.stateCur = GameState.FLAMETHROWER;
                }
                else if (sInput.toLowerCase().match("ember")){
                    sReply = " You chose Ember, type Ember again to accept";
                    this.stateCur = GameState.EMBER;
                }
                else if (sInput.toLowerCase().match("scratch")){
                    sReply = " You chose Scratch, type Scratch again to accept";
                    this.stateCur = GameState.SCRATCH;
                }
            break;

            case GameState.BULBMOVESELECTION:
                sReply = " Which move will you use? Grass Knot, Vine Whip, Razor Leaf , Headbutt";
                if(sInput.toLowerCase().match("grass knot")){
                    sReply = " You chose Grass Knot, type v again to accept";
                    this.stateCur = GameState.GRASSKNOT;
                }
                else if (sInput.toLowerCase().match("vine whip")){
                    sReply = " You chose Vine Whip, type Vine Whip again to accept";
                    this.stateCur = GameState.VINEWHIP;
                }
                else if (sInput.toLowerCase().match("razor leaf")){
                    sReply = " You chose Razor Leaf, type Razor Leaf again to accept";
                    this.stateCur = GameState.RAZORLEAF;
                }
                else if (sInput.toLowerCase().match("headbutt")){
                    sReply = " You chose Headbutt, type Headbutt again to accept";
                    this.stateCur = GameState.HEADBUTT;
                }
            break;

            case GameState.SQUIMOVESELECTION:
                sReply = "Which move will you use? Tackle, Bubble, Surf, Stomp?";
                if(sInput.toLowerCase().match("tackle")){
                    sReply = " You chose Tackle, type Tackle again to accept";
                    this.stateCur = GameState.TACKLE;
                }
                else if (sInput.toLowerCase().match("bubble")){
                    sReply = " You chose Bubble, type Bubble again to accept";
                    this.stateCur = GameState.BUBBLE;
                }
                else if (sInput.toLowerCase().match("surf")){
                    sReply = " You chose Surf, type Surf again to accept";
                    this.stateCur = GameState.SURF;
                }
                else if (sInput.toLowerCase().match("stomp")){
                    sReply = " You chose Stomp, type Stomp again to accept";
                    this.stateCur = GameState.STOMP;
                }
            break;

            //CHARMANDERS ATTACKS
            case GameState.BITE:
                        sReply = "Bite Hits! Rhyhorn uses Mud-Slap, Type Battle to attack again.";   
                          this.stateCur = GameState.CHARMOVESELECTION;
            break;

            case GameState.FLAMETHROWER:
                    sReply = "Flamethrower Hits! Rhyhorn Fainted, Congratulations You Won! Would you like to rematch? Yes or No";  
                    this.stateCur = GameState.ENDGAME;
            break;

            case GameState.EMBER:
                    sReply = "Ember Hits! Rhyhorn uses Mud-Slap, Type Battle to attack again.";   
                    this.stateCur = GameState.CHARMOVESELECTION;
            break;

            case GameState.SCRATCH:
                    sReply = "Scratch Hits! Rhyhorn uses Mud-Slap, Type Battle to attack again.";
                    this.stateCur = GameState.CHARMOVESELECTION;                  
            break;

            //BULBASAURS ATTACKS
            case GameState.GRASSKNOT:
                        sReply = "Grass Knot Hits! Rhyhorn uses Mud-Slap, Type Battle to attack again.";   
                          this.stateCur = GameState.BULBMOVESELECTION;
            break;

            case GameState.VINEWHIP:
                    sReply = "Vine Whip Hits! Rhyhorn Fainted, Congratulations You Won! Would you like to rematch? Yes or No";  
                    this.stateCur = GameState.ENDGAME;
            break;

            case GameState.RAZORLEAF:
                    sReply = "Razor Leaf Hits! Rhyhorn uses Mud-Slap, Type Battle to attack again.";   
                    this.stateCur = GameState.BULBMOVESELECTION;
            break;

            case GameState.HEADBUTT:
                    sReply = "Headbutt Hits! Rhyhorn uses Mud-Slap, Type Battle to attack again.";
                    this.stateCur = GameState.BULBMOVESELECTION;           
            break;


            //SQUIRTLE ATTACKS
            case GameState.TACKLE:
                        sReply = "Tackle Hits! Rhyhorn uses Mud-Slap, Type Battle to attack again.";   
                          this.stateCur = GameState.SQUIMOVESELECTION;
            break;

            case GameState.BUBBLE:
                    sReply = "Bubble Hits! Rhyhorn Fainted, Congratulations You Won! Would you like to rematch? Yes or No";  
                    this.stateCur = GameState.ENDGAME;
            break;

            case GameState.SURF:
                    sReply = "Surf Hits! Rhyhorn uses Mud-Slap, Type Battle to attack again.";   
                    this.stateCur = GameState.SQUIMOVESELECTION;
            break;

            case GameState.STOMP:
                    sReply = "Stomp Hits! Rhyhorn uses Mud-Slap, Type Battle to attack again.";
                    this.stateCur = GameState.SQUIMOVESELECTION;                  
            break;

            case GameState.ENDGAME:
                   if (sInput.toLowerCase().match("no")){
                    sReply = "Until we meet again";
                   }
                   else if (sInput.toLowerCase().match("yes")){
                    this.stateCur = GameState.WELCOMING;
                   }
            break;
        }
        return([sReply]);
    }
}
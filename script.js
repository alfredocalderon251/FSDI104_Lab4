class Character{
    constructor(name,energy,hitpoints,id){
        this.name=name;
        this.energy=energy;
        this.hitpoints=hitpoints;
        this.id=id;

    }

    display=function(){
        document.getElementById(this.id).innerHTML=`Name: ${this.name} <br> Energy: ${this.energy} <br> HitPoints: ${this.hitpoints}`;
    }

    attack=function(opponent){
        if(this.energy>0)
        {
            let newEnergy=opponent.energy-this.hitpoints;
            opponent.energy=newEnergy;
            if(opponent.energy<=0)
            {
                opponent.energy=0;
                document.getElementById(this.id).innerHTML="<strong>You WIN, CONGRATULATIONS!!</strong>"

                document.getElementById(opponent.id).innerHTML="<strong>YOU LOST , SORRY :(</strong>";
                
            }
            else
            {
                opponent.display();
            }
            
        }
        

    }
}

//objects
const c1=new Character("Mario",100,10,"c1");
const c2=new Character("Bowser",100,20,"c2");
c1.display();
c2.display();

function NewGame()
{
    c1.energy=100;
    c2.energy=100;
c1.display();
c2.display();
};

//const c3=new ("Luigi",100,10);
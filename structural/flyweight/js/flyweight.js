class Jersey{
    jersey;
    constructor(jersey){
        this.jersey = jersey;
    }
    getJersey(){
        return this.jersey;
    }
}


class SoccerPlayer{
    name;
    number;
    jersey;
    constructor(name, number, jersey){
        this.name = name;
        this.number = number;
        this.jersey = jersey;
    }
}

const jersey = new Jersey('Atlas jersey').getJersey();

const player1 = new SoccerPlayer('Joe', 12, jersey);
const player2 = new SoccerPlayer('Joel', 1, jersey);
const player3 = new SoccerPlayer('Jade', 2, jersey);
const player4 = new SoccerPlayer('Jomle', 22, jersey);
const player5 = new SoccerPlayer('Jiole', 11, jersey);

console.log(player1);
console.log(player2);
console.log(player3);
console.log(player4);
console.log(player5);
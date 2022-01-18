class Bullet {
    //start init from dog
    constructor(gameWidth, gameHeight, player){
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.rightView = player.rightView;
        this.x = player.x;
        this.y = player.y;
        this.color = "red";
        this.active = true;
        
        this.width = 20;
        this.radiant = 10;
        this.height = 20;
        this.speed = 0;
        this.maxSpeed =  30; 

        this.image = new Image();
        if(this.rightView){
            this.image.src = "bullet_right.png";
            this.sy = 210;
        }
        else{
            this.image.src = "bullet_left.png"
            this.sy = 121;
        }
        this.spriteWidth = 48;
        this.spriteHeight = 14;
        this.frameX = 0;
        this.maxFrame = 4;
        this.sx = 12;
    }

    update(){
        if(this.rightView){
            this.x += this.maxSpeed;
        }
        else {
            this.x -= this.maxSpeed;
        }

        if(this.x >= this.gameWidth || this.x <= 0){
            this.active = false;
        }
    }

    draw(context){
        if(this.frameX < this.maxFrame) {
            this.sx += 90;
            this.frameX ++;
        }
        else{
            this.frameX = 0;
            this.sx = 12;
        }
        console.log(this.sx)
        context.drawImage(this.image, this.sx, this.sy, this.spriteWidth, this.spriteHeight,this.x, this.y, this.spriteWidth*2, this.spriteHeight*2)
    }
}


export default Bullet
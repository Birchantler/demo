class Character {
    constructor (width,height,health) {
        this.width = width,
        this.height = height,
        this.health = health
    }
}

class Left extends Character {
    constructor(X, Y, width, height, health) {
      super(width, height, health);
      this.X = X;
      this.Y = Y;
    }
    
    snowballLeft() {
      setInterval(() => {
        const snowballLeft = PIXI.Sprite.from('/img/snowball.png');
        snowballLeft.width = 20;
        snowballLeft.height = 20;
        snowballLeft.x = this.X + 30;
        snowballLeft.y = this.Y + 10;
        app.stage.addChild(snowballLeft);
        let speedX = Math.round(Math.random() * (1)) + 0.5;
        let speedY = Math.round(Math.random() * (1.5)) - 0.5;
        setInterval(() => {
          snowballLeft.x += speedX;
          snowballLeft.y += speedY;
        },10)
      }, 1000);

      
      
    }
}

class Right extends Character {
    constructor (X,Y,width,height,health) {
        super(width,height,health)
        this.X = X
        this.Y = Y
    }
    snowballRight() {
      setInterval(() => {
         const snowballRight = PIXI.Sprite.from('/img/snowball.png');
        snowballRight.width = 20;
        snowballRight.height = 20;
        snowballRight.x = this.X - 20;
        snowballRight.y = this.Y + 10;
        app.stage.addChild(snowballRight);
        let speedX = Math.round(Math.random() * (1)) + 0.5;
        let speedY = Math.round(Math.random() * (1.5)) - 0.5;
        setInterval(() => {
          snowballRight.x -= speedX;
          snowballRight.y += speedY;
        },10)
      }, 1000);

      
      
    }
}

let left;
function triggerLeft(e) {
    if(e.keyCode == 37) {
        let left1 = new Left( Math.round(Math.random() * (512)),
         Math.round(Math.random() * (956)),
         30,
         60,
         5
         );
          left = PIXI.Sprite.from('/img/left.png');
          left.width = left1.width;
          left.height = left1.height;
          left.health = left1.health;
          left.x = left1.X;
          left.y = left1.Y;
          left1.snowballLeft();
          app.stage.addChild(left);
    }
}

let right;
function triggerRight(e) {
    if(e.keyCode == 39) {
        let right1 = new Right( Math.round(Math.random() * (512)) + 512,
         Math.round(Math.random() * (956)),
         30,
         60,
         5
         );
          right = PIXI.Sprite.from('/img/right.png');
          right.width = right1.width;
          right.height = right1.height;
          right.health = right1.health;
          right.x = right1.X;
          right.y = right1.Y;
          right1.snowballRight();
          app.stage.addChild(right);
    }
}

function detectCollision(a, b) {
    return (a.x < b.x + b.width &&
           a.x + a.width > b.x &&
           a.y < b.y + b.height &&
           a.y + a.height > b.y
    );
}
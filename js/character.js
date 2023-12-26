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
        snowballLeft.x = this.X - 30;
        snowballLeft.y = this.Y;
        app.stage.addChild(snowballLeft);
      }, 1000);
    }

    snowballTouch() {
      if(detectCollision(snowballRight, left)) {
        this.health = this.health - 1
      }
    }
  }

class Right extends Character {
    constructor (X,Y,width,height,health) {
        super(width,height,health)
        this.X = X
        this.Y = Y
    }
    snowballRight() {
       setInterval(function() {
        const snowballRight = new PIXI.Sprite.from('/img/snowball.png');
        snowballRight.x = X + 30;
        snowballRight.y = Y;
        app.stage.addChild(snowballRight);
       },1000)
    }
}

let left;
function triggerLeft(e) {
    if(e.keyCode == 37) {
        let left1 = new Left( Math.round(Math.random() * (512)),
         Math.round(Math.random() * (1024)) + 1024,
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
          app.stage.addChild(left);
    }
}

function detectCollision(a, b) {
    return (a.x < b.x + b.width &&
           a.x + a.width > b.x &&
           a.y < b.y + b.height &&
           a.y + a.height > b.y
    );
}
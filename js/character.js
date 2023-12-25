class Character {
    constructor (width,height,health) {
        this.width = width,
        this.height = height,
        this.health = health
    }
}

class Left extends Character {
    constructor (X,Y,width,height,health) {
        super(width,height,health)
        this.X = X
        this.Y = Y
    }
    generateLeft() {
        const left = PIXI.Sprite.from('/img/left.png');
        left.width = width
        left.height = height,
        left.health = health,
        left.x = X,
        left.y = Y
    }
    
    snowballLeft() {
       setInterval(function() {
        const snowballLeft = PIXI.Sprite.from('/img/snowball.png');
        snowballLeft.x = X - 30;
        snowballLeft.y = Y;
        app.stage.addChild(snowballLeft);
       },1000)
    }
}

class Right extends Character {
    constructor (X,Y,width,height,health) {
        super(width,height,health)
        this.X = X
        this.Y = Y
    }
    snowballLeft() {
       setInterval(function() {
        const snowballRight = PIXI.Sprite.from('/img/snowball.png');
        snowballRight.x = X + 30;
        snowballRight.y = Y;
        app.stage.addChild(snowballRight);
       },1000)
    }
}

function generateLeftTrigger(e) {
    if(e.keyCode == 37) {
        let left = new Left( Math.round(Math.random() * (512)), Math.round(Math.random() * (1024)) + 1024,30,60,5)
    }
}

function detectCollision(a, b) {
    return a.x < b.x + b.width &&
           a.x + a.width > b.x &&
           a.y < b.y + b.height &&
           a.y + a.height > b.y;
}
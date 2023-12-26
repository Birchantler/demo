const app = new PIXI.Application({
    width: 1024,
    height: 1024,
    background: '#1099bb',
    
});

const background = PIXI.Sprite.from('/img/background.png');
background.x = 0;
background.y = 0;
app.stage.addChild(background);

window.onload = function() {
    document.body.appendChild(app.view);
    document.addEventListener("keydown", triggerLeft)
};


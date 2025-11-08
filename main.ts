input.onButtonPressed(Button.A, function () {
    sprite.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    sprite.change(LedSpriteProperty.X, 1)
})
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 3)
let _this = game.createSprite(2, 0)
game.setLife(3)
game.setScore(0)
basic.forever(function () {
    if (_this.get(LedSpriteProperty.Y) == 4) {
        _this.delete()
        _this = game.createSprite(sprite.get(LedSpriteProperty.X), 0)
        game.addScore(1)
    }
    if (sprite.isTouching(_this)) {
        game.gameOver()
    }
})
basic.forever(function () {
    _this.change(LedSpriteProperty.Y, 1)
    basic.pause(500)
})
basic.forever(function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Birthday), music.PlaybackMode.UntilDone)
})

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Yoda.vy = -100
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    music.zapped.play()
    scene.cameraShake(4, 500)
    otherSprite.destroy()
    info.changeScoreBy(-1)
})
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    music.baDing.play()
    sprite.destroy()
    info.changeScoreBy(1)
})
let projectile: Sprite = null
let Yoda: Sprite = null
game.splash("Laser Dodge")
tiles.setTilemap(tilemap`level1`)
Yoda = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 . . . 
    7 7 7 7 7 f f 7 f f 7 7 7 7 7 7 
    3 3 3 7 7 f 1 7 1 f 7 7 3 3 3 3 
    . . 3 7 7 7 7 7 7 7 7 7 3 . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 . . . 
    . . . . e e 7 7 7 7 e e . . . . 
    . . . c c e e 7 7 e e c c . . . 
    . . c c c c c c c c c c c c . . 
    c c c 7 . e c e e e e 7 c c c c 
    . . 7 7 . e c c e e e 7 7 . . . 
    . . . . . e e c c e e . . . . . 
    . . . . . e e e c e e . . . . . 
    . . . . . e e e c e e . . . . . 
    . . . . e e e e c c c e . . . . 
    `, SpriteKind.Player)
let Trooper = sprites.create(img`
    . . . . . . . . f f f . . . . . 
    . . . . . f f f f f f f f f . . 
    . . . . f 1 1 1 1 1 1 1 1 1 f . 
    . . . f f 1 1 1 1 1 1 1 1 1 f . 
    . . . f 1 f f f f f f f f f f . 
    . . . f f f 1 f 1 1 f 1 1 f f . 
    . . . f 1 1 1 f 1 1 f f 1 f . . 
    . . . f f f f f 1 1 1 1 1 f . . 
    . . . . . . f f 1 1 1 1 1 f . . 
    . . . f f f f 1 f 1 1 1 1 f . . 
    . . f f 2 2 f 1 1 1 1 1 1 f . . 
    . . f f f f f 1 1 1 1 f f f . . 
    . . . . . . f 1 1 1 f f . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . f . . . f . . . . . 
    . . . . f f f . . . f f . . . . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(Yoda, tiles.getTileLocation(1, 5))
tiles.placeOnTile(Trooper, tiles.getTileLocation(9, 5))
Yoda.ay = 150
info.startCountdown(60)
game.onUpdateInterval(750, function () {
    projectile = sprites.createProjectileFromSprite(img`
        2 2 2 2 2 
        2 2 2 2 2 
        `, Trooper, -100, randint(0, -10))
})

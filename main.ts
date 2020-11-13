namespace SpriteKind {
    export const chest = SpriteKind.create()
    export const book = SpriteKind.create()
    export const key = SpriteKind.create()
    export const goal = SpriteKind.create()
    export const toach = SpriteKind.create()
    export const pic = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (stageNo > 0) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . f f 4 4 f f . . . . . 
            . . . . f 5 4 5 5 4 5 f . . . . 
            . . . f e 3 3 3 3 3 3 e f . . . 
            . . f b 3 3 3 3 3 3 3 3 b f . . 
            . . f 3 3 3 3 3 3 3 3 3 3 f . . 
            . f 3 3 3 3 3 3 3 3 3 3 3 3 f . 
            . f b 3 3 3 3 3 3 3 3 3 3 b f . 
            . f b b 3 3 3 3 3 3 3 3 b b f . 
            . f b b b b b b b b b b b b f . 
            f c b b b b b b b b b b b b c f 
            f b b b b b b b b b b b b b b f 
            . f c c b b b b b b b b c c f . 
            . . e 4 c f f f f f f c 4 e . . 
            . . e f b d b d b d b b f e . . 
            . . . f f 1 d 1 d 1 d f f . . . 
            . . . . . f f b b f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f 4 4 f f . . . . . 
            . . . . f 5 4 5 5 4 5 f . . . . 
            . . . f e 3 3 3 3 3 3 e f . . . 
            . . f b 3 3 3 3 3 3 3 3 b f . . 
            . . f 3 3 3 3 3 3 3 3 3 3 f . . 
            . f b 3 3 3 3 3 3 3 3 3 3 b f . 
            . f b b 3 3 3 3 3 3 3 3 b b f . 
            . f b b b b b b b b b b b b f . 
            f c b b b b b b b b b b b b f . 
            f b b b b b b b b b b b b c f . 
            f f b b b b b b b b b b c f . . 
            . f c c c f f f f f f f e c . . 
            . . . f b b d b d d e 4 4 e . . 
            . . . f f 1 1 d 1 d e e f . . . 
            . . . . . f b b f f f . . . . . 
            `,img`
            . . . . . f f 4 4 f f . . . . . 
            . . . . f 5 4 5 5 4 5 f . . . . 
            . . . f e 3 3 3 3 3 3 e f . . . 
            . . f b 3 3 3 3 3 3 3 3 b f . . 
            . . f 3 3 3 3 3 3 3 3 3 3 f . . 
            . f 3 3 3 3 3 3 3 3 3 3 3 3 f . 
            . f b 3 3 3 3 3 3 3 3 3 3 b f . 
            . f b b 3 3 3 3 3 3 3 3 b b f . 
            . f b b b b b b b b b b b b f . 
            f c b b b b b b b b b b b b c f 
            f b b b b b b b b b b b b b b f 
            . f c c b b b b b b b b c c f . 
            . . e 4 c f f f f f f c 4 e . . 
            . . e f b d b d b d b b f e . . 
            . . . f f 1 d 1 d 1 d f f . . . 
            . . . . . f f b b f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f 4 4 f f . . . . . 
            . . . . f 5 4 5 5 4 5 f . . . . 
            . . . f e 3 3 3 3 3 3 e f . . . 
            . . f b 3 3 3 3 3 3 3 3 b f . . 
            . . f 3 3 3 3 3 3 3 3 3 3 f . . 
            . f b 3 3 3 3 3 3 3 3 3 3 b f . 
            . f b b 3 3 3 3 3 3 3 3 b b f . 
            . f b b b b b b b b b b b b f . 
            . f b b b b b b b b b b b b c f 
            . f c b b b b b b b b b b b b f 
            . . f c b b b b b b b b b b f f 
            . . c e f f f f f f f c c c f . 
            . . e 4 4 e d d b d b b f . . . 
            . . . f e e d 1 d 1 1 f f . . . 
            . . . . . f f f b b f . . . . . 
            `],
        200,
        true
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile4, function (sprite, location) {
    if (stageNo > 0) {
        effects.confetti.startScreenEffect(2000)
        game.over(true)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (stageNo == 2) {
        if (mySprite.tileKindAt(TileDirection.Bottom, myTiles.tile2)) {
            if (countKey < 1) {
                game.showLongText("鍵がかかっている", DialogLayout.Top)
            } else {
                countKey += -1
                game.showLongText("鍵を使った", DialogLayout.Top)
                tiles.setTileAt(RockList[releaseRockIndex], sprites.dungeon.stairNorth)
                tiles.setWallAt(RockList[releaseRockIndex], false)
                releaseRockIndex += 1
            }
        } else if (mySprite.overlapsWith(toach1)) {
            if (toach1State == 1) {
                toach1.setImage(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . f f . . . . . . . 
                    . . . . . . . f f . . . . . . . 
                    . . . . . . . f f . . . . . . . 
                    . . . . f f f f f f f f . . . . 
                    . . . . f d d d d d d f . . . . 
                    . . . . f d d d d d d f . . . . 
                    . . . . f d d d d d d f . . . . 
                    . . . . f d d d d d d f . . . . 
                    . . . . f d d d d d d f . . . . 
                    . . . . f d d d d d d f . . . . 
                    . . . . f f d d d d f f . . . . 
                    . . . . . f d d d d f . . . . . 
                    . . . . . f f f f f f . . . . . 
                    `)
                toach1State = 0
                mySprite.say("ロウソクを消した", 1000)
            } else {
                toach1.setImage(img`
                    . . . . . . 2 2 2 . . . . . . . 
                    . . . . . 2 2 2 2 2 2 . . . . . 
                    . . . . . 2 4 4 4 4 2 2 . . . . 
                    . . . . 2 2 4 f f 4 2 2 . . . . 
                    . . . . 2 2 4 f f 4 2 . . . . . 
                    . . . . . 2 4 f f 4 2 . . . . . 
                    . . . . f f f f f f f f . . . . 
                    . . . . f d d d d d d f . . . . 
                    . . . . f d d d d d d f . . . . 
                    . . . . f d d d d d d f . . . . 
                    . . . . f d d d d d d f . . . . 
                    . . . . f d d d d d d f . . . . 
                    . . . . f d d d d d d f . . . . 
                    . . . . f f d d d d f f . . . . 
                    . . . . . f d d d d f . . . . . 
                    . . . . . f f f f f f . . . . . 
                    `)
                toach1State = 1
                mySprite.say("ロウソクを着けた", 1000)
            }
            checkToach()
        } else if (mySprite.overlapsWith(toach2)) {
            if (toachState2 == 1) {
                toach2.setImage(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . f f . . . . . . . 
                    . . . . . . . f f . . . . . . . 
                    . . . . . . . f f . . . . . . . 
                    . . . . f f f f f f f f . . . . 
                    . . . . f d d d d d d f . . . . 
                    . . . . f d d d d d d f . . . . 
                    . . . . f d d d d d d f . . . . 
                    . . . . f d d d d d d f . . . . 
                    . . . . f d d d d d d f . . . . 
                    . . . . f d d d d d d f . . . . 
                    . . . . f f d d d d f f . . . . 
                    . . . . . f d d d d f . . . . . 
                    . . . . . f f f f f f . . . . . 
                    `)
                toachState2 = 0
                mySprite.say("ロウソクを消した", 1000)
            } else {
                toach2.setImage(img`
                    . . . . . . 2 2 2 . . . . . . . 
                    . . . . . 2 2 2 2 2 2 . . . . . 
                    . . . . . 2 4 4 4 4 2 2 . . . . 
                    . . . . 2 2 4 f f 4 2 2 . . . . 
                    . . . . 2 2 4 f f 4 2 . . . . . 
                    . . . . . 2 4 f f 4 2 . . . . . 
                    . . . . f f f f f f f f . . . . 
                    . . . . f d d d d d d f . . . . 
                    . . . . f d d d d d d f . . . . 
                    . . . . f d d d d d d f . . . . 
                    . . . . f d d d d d d f . . . . 
                    . . . . f d d d d d d f . . . . 
                    . . . . f d d d d d d f . . . . 
                    . . . . f f d d d d f f . . . . 
                    . . . . . f d d d d f . . . . . 
                    . . . . . f f f f f f . . . . . 
                    `)
                toachState2 = 1
                mySprite.say("ロウソクを着けた", 1000)
            }
            checkToach()
        } else if (mySprite.overlapsWith(toach3)) {
            if (toachState3 == 1) {
                toach3.setImage(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . f f . . . . . . . 
                    . . . . . . . f f . . . . . . . 
                    . . . . . . . f f . . . . . . . 
                    . . . . f f f f f f f f . . . . 
                    . . . . f d d d d d d f . . . . 
                    . . . . f d d d d d d f . . . . 
                    . . . . f d d d d d d f . . . . 
                    . . . . f d d d d d d f . . . . 
                    . . . . f d d d d d d f . . . . 
                    . . . . f d d d d d d f . . . . 
                    . . . . f f d d d d f f . . . . 
                    . . . . . f d d d d f . . . . . 
                    . . . . . f f f f f f . . . . . 
                    `)
                toachState3 = 0
                mySprite.say("ロウソクを消した", 1000)
            } else {
                toach3.setImage(img`
                    . . . . . . 2 2 2 . . . . . . . 
                    . . . . . 2 2 2 2 2 2 . . . . . 
                    . . . . . 2 4 4 4 4 2 2 . . . . 
                    . . . . 2 2 4 f f 4 2 2 . . . . 
                    . . . . 2 2 4 f f 4 2 . . . . . 
                    . . . . . 2 4 f f 4 2 . . . . . 
                    . . . . f f f f f f f f . . . . 
                    . . . . f d d d d d d f . . . . 
                    . . . . f d d d d d d f . . . . 
                    . . . . f d d d d d d f . . . . 
                    . . . . f d d d d d d f . . . . 
                    . . . . f d d d d d d f . . . . 
                    . . . . f d d d d d d f . . . . 
                    . . . . f f d d d d f f . . . . 
                    . . . . . f d d d d f . . . . . 
                    . . . . . f f f f f f . . . . . 
                    `)
                toachState3 = 1
                mySprite.say("ロウソクを着けた", 1000)
            }
            checkToach()
        } else if (mySprite.overlapsWith(dog3)) {
            game.showLongText("この壁、あやしいぞ", DialogLayout.Top)
        } else if (mySprite.overlapsWith(person1)) {
            game.splash("iwanがいる")
            game.showLongText("Timは末っ子だ", DialogLayout.Top)
        } else if (mySprite.overlapsWith(person2)) {
            game.splash("johnがいる")
            game.showLongText("iwan兄さんは優しいよ", DialogLayout.Top)
            game.showLongText("弟のTimは乱暴者だ", DialogLayout.Top)
        } else if (mySprite.overlapsWith(person3)) {
            game.splash("timがいる")
            game.showLongText("johnは僕の弟だよ", DialogLayout.Top)
        } else if (mySprite.overlapsWith(passDoor)) {
            game.showLongText("３人中、うそつきは１人", DialogLayout.Top)
            password = game.askForString("Input Liar Name", 5)
            if (password == "tim" || password == "Tim") {
                music.baDing.play()
                passDoor.destroy(effects.disintegrate, 500)
                tiles.setWallAt(RockList[releaseRockIndex], false)
                releaseRockIndex += 1
            } else {
                music.powerDown.play()
                game.showLongText("残念。間違いです。", DialogLayout.Top)
            }
        } else if (mySprite.overlapsWith(pc1)) {
            game.showLongText("イラストをかいどくせよ", DialogLayout.Top)
            secretCode = game.askForNumber("Input 3 Numbers", 3)
            if (secretCode == 285) {
                music.baDing.play()
                game.showLongText("はしごを伸ばします", DialogLayout.Top)
                tiles.setTileAt(RockList[releaseRockIndex], sprites.dungeon.stairNorth)
                tiles.setWallAt(RockList[releaseRockIndex], false)
                releaseRockIndex += 1
            } else {
                music.powerDown.play()
                game.showLongText("ブブー、エラー", DialogLayout.Top)
            }
        } else if (mySprite.overlapsWith(Irasuto1)) {
            game.showLongText("絵の下に文字がある", DialogLayout.Top)
            game.showLongText("２んじん ８ ５ミ", DialogLayout.Top)
        } else {
        	
        }
    } else if (stageNo == 1) {
        if (mySprite.overlapsWith(chestBox)) {
            secretCode = game.askForNumber("", 4)
            if (secretCode == 4649) {
                chestBox.destroy(effects.spray, 500)
                music.baDing.play()
                game.showLongText("鍵が入っていた", DialogLayout.Top)
                key1 = sprites.create(img`
                    . . . . 5 5 5 5 5 5 5 . . . . . 
                    . . . . 5 5 5 5 5 5 5 . . . . . 
                    . . . . 5 5 . . . 5 5 . . . . . 
                    . . . . 5 5 . . . 5 5 . . . . . 
                    . . . . 5 5 5 5 5 5 5 . . . . . 
                    . . . . 5 5 5 5 5 5 5 . . . . . 
                    . . . . . . . 5 . . . . . . . . 
                    . . . . . . . 5 5 5 5 5 . . . . 
                    . . . . . . . 5 . . . . . . . . 
                    . . . . . . . 5 . . . . . . . . 
                    . . . . . . . 5 5 5 5 5 . . . . 
                    . . . . . . . 5 . . . . . . . . 
                    . . . . . . . 5 . . . . . . . . 
                    . . . . . . . 5 5 5 5 5 . . . . 
                    . . . . . . . 5 . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.key)
                key1.setPosition(mySprite.x, mySprite.y - 20)
                key1.follow(mySprite, 600)
            } else {
                music.powerDown.play()
                game.showLongText("開かない", DialogLayout.Top)
            }
        } else if (mySprite.overlapsWith(Book1)) {
            game.showLongText("「夜露死苦」と書いてある", DialogLayout.Top)
            game.showLongText("よろしく...4649?", DialogLayout.Top)
        } else if (mySprite.overlapsWith(Book2)) {
            game.showLongText("おばけには念仏を！", DialogLayout.Top)
            if (nenzutuFlag == 0) {
                game.showLongText("念仏を覚えた！", DialogLayout.Top)
                nenzutuFlag = 1
            }
        } else if (mySprite.tileKindAt(TileDirection.Bottom, myTiles.tile2)) {
            if (countKey < 1) {
                game.showLongText("鍵がかかっている", DialogLayout.Top)
            } else {
                countKey += -1
                game.showLongText("鍵を使った", DialogLayout.Top)
                tiles.setTileAt(RockList[releaseRockIndex], sprites.dungeon.stairNorth)
                tiles.setWallAt(RockList[releaseRockIndex], false)
                releaseRockIndex += 1
            }
        } else if (mySprite.overlapsWith(dog1)) {
            if (nenzutuFlag == 1) {
                dog1.destroy(effects.fire, 500)
                tiles.setWallAt(RockList[releaseRockIndex], false)
                releaseRockIndex += 1
                game.showLongText("おばけに念仏を唱えた！", DialogLayout.Top)
            } else {
                dog1.say("ここはとおさんぞ", 500)
            }
        } else if (mySprite.overlapsWith(dog2)) {
            game.showLongText("あいことばを言うがよい", DialogLayout.Top)
            password = game.askForString("Enter password", 6)
            if (password == "unko") {
                game.showLongText("ゆるさん！しね！", DialogLayout.Top)
                game.over(false)
            } else if (password == "eye") {
                game.showLongText("通ってよし！", DialogLayout.Top)
                dog2.destroy(effects.hearts, 500)
                tiles.setWallAt(RockList[releaseRockIndex], false)
                releaseRockIndex += 1
            } else {
                game.showLongText("ちがうぞ！あやしいな", DialogLayout.Top)
                wrongTimes += 1
                if (wrongTimes > 2) {
                    game.showLongText("おまえは曲者だな！死ね！", DialogLayout.Top)
                    game.over(false)
                }
            }
        } else if (mySprite.overlapsWith(book3)) {
            game.showLongText("けむし", DialogLayout.Top)
            game.showLongText("keykke", DialogLayout.Top)
        }
    } else if (stageNo == 0) {
        img`
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            `.fill(0)
        stageNo = 1
        startStage1()
    } else {
    	
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (stageNo > 0) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . f 4 4 f f f f . . . . . . 
            . . f 4 5 5 4 5 f b f f . . . . 
            . . f 5 5 5 5 4 e 3 3 b f . . . 
            . . f e 4 4 4 e 3 3 3 3 b f . . 
            . . f 3 3 3 3 3 3 3 3 3 3 f . . 
            . f 3 3 e e 3 b e 3 3 3 3 f . . 
            . f 3 3 e e e f f 3 3 3 3 f . . 
            . f 3 e e e f b f b b b b f . . 
            . . f e 4 4 f 1 e b b b b f . . 
            . . . f 4 4 4 4 f b b b b f f . 
            . . . f e e e f f f b b b b f . 
            . . . f d d d e 4 4 f b b f . . 
            . . . f d d d e 4 4 e f f . . . 
            . . f b d b d b e e b f . . . . 
            . . f f 1 d 1 d 1 d f f . . . . 
            . . . . f f b b f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . f 4 4 f f f f . . . . . . 
            . . f 4 5 5 4 5 f b f f . . . . 
            . . f 5 5 5 5 4 e 3 3 b f . . . 
            . . f e 4 4 4 e 3 3 3 3 b f . . 
            . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
            . f 3 3 e e 3 b e 3 3 3 3 f . . 
            . f 3 3 e e e f f 3 3 3 3 f . . 
            . . f e e e f b f b b b b f f . 
            . . . e 4 4 f 1 e b b b b b f . 
            . . . f 4 4 4 4 f b b b b b f . 
            . . . f d d d e 4 4 b b b f . . 
            . . . f d d d e 4 4 f f f . . . 
            . . f d d d b b e e b b f . . . 
            . . f b d 1 d 1 d d b f . . . . 
            . . . f f f b b f f f . . . . . 
            `],
        100,
        true
        )
    }
})
function checkToach () {
    if (toach1State == 1 && (toachState2 == 0 && toachState3 == 0)) {
        dog3.destroy(effects.spray, 200)
        tiles.setWallAt(RockList[releaseRockIndex], false)
        tiles.setTileAt(RockList[releaseRockIndex], myTiles.tile3)
        releaseRockIndex += 1
    }
}
function startStage2 () {
    tiles.loadMap(tiles.createMap(tiles.createTilemap(hex`1000100006020202020202020202020a0a0a0a0606020202020202020202020a0202020606020202020202020202020902020206050404010404040404040404040404030602020802020202020202020202020606020208020202020202020b0c0c0c0c0602020802020202020202020202020605040404040404040404010404040403060202020a020202020208020202020604080404030202020202080202020206060202020202020202020802020202060608020202020202020208020202020605040404040404040404040404040103020202020202020202020202020208060702020202020202020202020202080605040404040404040404040404040403`, img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 . . . . . . . . . . . . . . 2 
        2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 
        2 . . . . . . . . . . . . . . 2 
        2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 
        2 . . . 2 2 2 2 2 2 . 2 2 2 2 2 
        2 . 2 2 2 2 2 2 2 2 . 2 2 2 2 2 
        2 . 2 2 2 2 2 2 2 2 . 2 2 2 2 2 
        2 . . . . . . . . . . . . . . 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
        . . . . . . . . . . . . . . . 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `, [myTiles.transparency16,myTiles.tile2,myTiles.tile3,sprites.builtin.oceanSand7,sprites.builtin.oceanSand6,sprites.builtin.oceanSand5,sprites.builtin.coral5,myTiles.tile4,sprites.dungeon.stairNorth,myTiles.tile5,sprites.dungeon.floorLight0,sprites.builtin.oceanSand1,sprites.builtin.oceanSand2], TileScale.Sixteen)))
    countKey = 0
    toach1 = sprites.create(img`
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . 2 2 4 4 2 . . . . . . 
        . . . . . 2 2 4 4 2 2 . . . . . 
        . . . . . 2 4 f f 4 2 . . . . . 
        . . . . . 2 4 f f 4 2 . . . . . 
        . . . . . 2 4 f f 4 2 . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f d d d d d d f . . . . 
        . . . . f d d d d d d f . . . . 
        . . . . f d d d d d d f . . . . 
        . . . . f d d d d d d f . . . . 
        . . . . f d d d d d d f . . . . 
        . . . . f d d d d d d f . . . . 
        . . . . f f d d d d f f . . . . 
        . . . . . f d d d d f . . . . . 
        . . . . . f f f f f f . . . . . 
        `, SpriteKind.toach)
    tiles.placeOnTile(toach1, tiles.getTileLocation(4, 2))
    toach2 = sprites.create(img`
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . 2 2 4 4 2 . . . . . . 
        . . . . . 2 2 4 4 2 2 . . . . . 
        . . . . . 2 4 f f 4 2 . . . . . 
        . . . . . 2 4 f f 4 2 . . . . . 
        . . . . . 2 4 f f 4 2 . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f d d d d d d f . . . . 
        . . . . f d d d d d d f . . . . 
        . . . . f d d d d d d f . . . . 
        . . . . f d d d d d d f . . . . 
        . . . . f d d d d d d f . . . . 
        . . . . f d d d d d d f . . . . 
        . . . . f f d d d d f f . . . . 
        . . . . . f d d d d f . . . . . 
        . . . . . f f f f f f . . . . . 
        `, SpriteKind.toach)
    tiles.placeOnTile(toach2, tiles.getTileLocation(5, 2))
    toach3 = sprites.create(img`
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . 2 2 4 4 2 . . . . . . 
        . . . . . 2 2 4 4 2 2 . . . . . 
        . . . . . 2 4 f f 4 2 . . . . . 
        . . . . . 2 4 f f 4 2 . . . . . 
        . . . . . 2 4 f f 4 2 . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f d d d d d d f . . . . 
        . . . . f d d d d d d f . . . . 
        . . . . f d d d d d d f . . . . 
        . . . . f d d d d d d f . . . . 
        . . . . f d d d d d d f . . . . 
        . . . . f d d d d d d f . . . . 
        . . . . f f d d d d f f . . . . 
        . . . . . f d d d d f . . . . . 
        . . . . . f f f f f f . . . . . 
        `, SpriteKind.toach)
    tiles.placeOnTile(toach3, tiles.getTileLocation(6, 2))
    dog3 = sprites.create(img`
        e e e . . . . e e e . . . . 
        c d d c . . c d d c . . . . 
        c b d d f f d d b c . . . . 
        c 3 b d d b d b 3 c . . . . 
        f b 3 d d d d 3 b f . . . . 
        e d d d d d d d d e . . . . 
        e d f d d d d f d e . b f b 
        f d d f d d f d d f . f d f 
        f b d d b b d d 2 f . f d f 
        . f 2 2 2 2 2 2 b b f f d f 
        . f b d d d d d d b b d b f 
        . f d d d d d b d d f f f . 
        . f d f f f d f f d f . . . 
        . f f . . f f . . f f . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(dog3, tiles.getTileLocation(10, 2))
    key1 = sprites.create(img`
        . . . 5 5 5 5 5 5 5 5 . . . . . 
        . . . 5 5 . . . . 5 5 . . . . . 
        . . . 5 5 . . . . 5 5 . . . . . 
        . . . 5 5 . . . . 5 5 . . . . . 
        . . . 5 5 . . . . 5 5 . . . . . 
        . . . 5 5 5 5 5 5 5 5 . . . . . 
        . . . 5 5 5 5 5 5 5 5 . . . . . 
        . . . . 5 5 5 5 5 5 . . . . . . 
        . . . . . . 5 5 . . . . . . . . 
        . . . . . . 5 5 . . . . . . . . 
        . . . . . . 5 5 5 5 5 5 . . . . 
        . . . . . . 5 5 . . . . . . . . 
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . . 5 5 . . . . . . . . 
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . . 5 5 . . . . . . . . 
        `, SpriteKind.key)
    tiles.placeOnTile(key1, tiles.getTileLocation(14, 2))
    key2 = sprites.create(img`
        . . . 5 5 5 5 5 5 5 5 . . . . . 
        . . . 5 5 . . . . 5 5 . . . . . 
        . . . 5 5 . . . . 5 5 . . . . . 
        . . . 5 5 . . . . 5 5 . . . . . 
        . . . 5 5 . . . . 5 5 . . . . . 
        . . . 5 5 5 5 5 5 5 5 . . . . . 
        . . . 5 5 5 5 5 5 5 5 . . . . . 
        . . . . 5 5 5 5 5 5 . . . . . . 
        . . . . . . 5 5 . . . . . . . . 
        . . . . . . 5 5 . . . . . . . . 
        . . . . . . 5 5 5 5 5 5 . . . . 
        . . . . . . 5 5 . . . . . . . . 
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . . 5 5 . . . . . . . . 
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . . 5 5 . . . . . . . . 
        `, SpriteKind.key)
    tiles.placeOnTile(key2, tiles.getTileLocation(14, 6))
    key3 = sprites.create(img`
        . . . 5 5 5 5 5 5 5 5 . . . . . 
        . . . 5 5 . . . . 5 5 . . . . . 
        . . . 5 5 . . . . 5 5 . . . . . 
        . . . 5 5 . . . . 5 5 . . . . . 
        . . . 5 5 . . . . 5 5 . . . . . 
        . . . 5 5 5 5 5 5 5 5 . . . . . 
        . . . 5 5 5 5 5 5 5 5 . . . . . 
        . . . . 5 5 5 5 5 5 . . . . . . 
        . . . . . . 5 5 . . . . . . . . 
        . . . . . . 5 5 . . . . . . . . 
        . . . . . . 5 5 5 5 5 5 . . . . 
        . . . . . . 5 5 . . . . . . . . 
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . . 5 5 . . . . . . . . 
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . . 5 5 . . . . . . . . 
        `, SpriteKind.key)
    tiles.placeOnTile(key3, tiles.getTileLocation(3, 8))
    person1 = sprites.create(img`
        . . . 5 5 5 5 5 . . . . 
        . . 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 4 4 4 4 5 5 5 5 5 
        5 5 e 4 4 4 4 4 4 5 5 5 
        5 4 4 f f 4 4 f f 4 5 5 
        5 e 4 d d d d d d 4 e 5 
        . f e d d b b d d e f . 
        . f f e 4 4 4 4 e f f . 
        e 4 f b 1 1 1 1 b f 4 e 
        4 d f 1 1 1 1 1 1 f d 4 
        4 4 f 6 6 6 6 6 6 f 4 4 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(person1, tiles.getTileLocation(1, 6))
    person2 = sprites.create(img`
        . . . 6 6 6 6 6 . . . . 
        . . 6 6 6 6 6 6 6 6 . . 
        . 6 6 6 6 6 6 6 6 6 6 . 
        6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 4 4 4 4 6 6 6 6 6 
        6 6 e 4 4 4 4 4 4 6 6 6 
        6 4 4 f f 4 4 f f 4 6 6 
        6 e 4 d d d d d d 4 e 6 
        . f e d d b b d d e f . 
        . f f e 4 4 4 4 e f f . 
        e 4 f b 1 1 1 1 b f 4 e 
        4 d f 1 1 1 1 1 1 f d 4 
        4 4 f 6 6 6 6 6 6 f 4 4 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(person2, tiles.getTileLocation(4, 6))
    person3 = sprites.create(img`
        . . . 3 3 3 3 3 . . . . 
        . . 3 3 3 3 3 3 3 3 . . 
        . 3 3 3 3 3 3 3 3 3 3 . 
        3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 4 4 4 4 3 3 3 3 3 
        3 3 e 4 4 4 4 4 4 3 3 3 
        3 4 4 f f 4 4 f f 4 3 3 
        3 e 4 d d d d d d 4 e 3 
        . f e d d b b d d e f . 
        . f f e 4 4 4 4 e f f . 
        e 4 f b 1 1 1 1 b f 4 e 
        4 d f 1 1 1 1 1 1 f d 4 
        4 4 f 6 6 6 6 6 6 f 4 4 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(person3, tiles.getTileLocation(6, 6))
    passDoor = sprites.create(img`
        f f f f f f f f f f f f f f f f 
        f d d d d d d d d d d d d d d f 
        f d d d d d d d d d d d d d d f 
        f d d d d d d d d d d d d d d f 
        f d f f f f f f f f f f f f d f 
        f d f f f f f f f f f f f f d f 
        f d f f f f f f f f f f f f d f 
        f d f f f f f f f f f f f f d f 
        f d d d d d d d d d d d d d d f 
        f d 6 d 6 d 6 d 6 d 6 d 6 6 d f 
        f d d d d d d d d d d d d d d f 
        f d 6 d 6 d 6 d 6 d 6 d 6 6 d f 
        f d d d d d d d d d d d 6 6 d f 
        f d 6 d 6 d 6 d 6 d 6 d 6 6 d f 
        f d d d d d d d d d d d d d d f 
        f d d d d d d d d d d d d d d f 
        `, SpriteKind.Player)
    tiles.placeOnTile(passDoor, tiles.getTileLocation(11, 6))
    Irasuto1 = sprites.create(img`
        ffffffffffffffffffffffffffffffffffffffff
        f1171111111111111111111111111111111111ff
        f71771771111111111111111111111fff11111ff
        f77171711111111111111111111ffffffff111ff
        f1717171111111111111111111ff999999fff1ff
        f1717771111111df1df111111ff999999999f1ff
        f1177111111111dd1dd111111f99999999999fff
        f11444111111111eee1111111fffffffffffffff
        f144444111ddd1eeeee11dd11f99f9f9f9f9ffff
        f14444411dddddeeeee1dddd1ff9f9f9f9f9ffff
        f14444f11ddddd55555ddddd11f9f9f9f9f9f1ff
        f144ff4111ddd1fffffdddd111f9f9f9f9f9f1ff
        f144444111111d555551111111f9f9f9f9f9f1ff
        f11444f1111dddfffffddd1111f9f9f9f9f9f1ff
        f114ff1111dddd55555dddd111f9f9f9f9f9f1ff
        f114441111ddd1155511ddd111f9f9f9f9f9f1ff
        f1144411111111115111111111f9f9f9f9f9f1ff
        f1114111111111111111111111fffffffffff1ff
        f1111111111111111111111111111111111111ff
        ffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffff1111fffffffffffffffff
        ff11fffffffffffffff1ff1ffffff1111ff11fff
        f1111f1f111ff1fffff1ff1ffffff1ffffff11ff
        f1f11111f1ff11fffff1111ffffff11ffff11fff
        ff111f11f11f11fffff1ff1fffffff11ffffffff
        f111ffffff1f11111ff1ff1fffffffff1ff111ff
        f11111ffffff1ff11ff1111ffffff1111ffff1ff
        ffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff
        `, SpriteKind.pic)
    tiles.placeOnTile(Irasuto1, tiles.getTileLocation(7, 10))
    pc1 = sprites.create(img`
        . . . b b b b b b b b b . . . . 
        . . b 1 d d d d d d d 1 b . . . 
        . b 1 1 1 1 1 1 1 1 1 1 1 b . . 
        . b d b c c c c c c c b d b . . 
        . b d c 6 6 6 6 6 6 6 c d b . . 
        . b d c 6 d 6 6 6 6 6 c d b . . 
        . b d c 6 6 6 6 6 6 6 c d b . . 
        . b d c 6 6 6 6 6 6 6 c d b . . 
        . b d c 6 6 6 6 6 6 6 c d b . . 
        . b d c c c c c c c c c d b . . 
        . c b b b b b b b b b b b c . . 
        c b c c c c c c c c c c c b c . 
        c 1 d d d d d d d d d d d 1 c . 
        c 1 d 1 1 d 1 1 d 1 1 d 1 1 c . 
        c b b b b b b b b b b b b b c . 
        c c c c c c c c c c c c c c c . 
        `, SpriteKind.Player)
    tiles.placeOnTile(pc1, tiles.getTileLocation(4, 11))
    mySprite = sprites.create(img`
        . . . . . . f f f f 4 4 f . . . 
        . . . . f f b f 5 4 5 5 4 f . . 
        . . . f b 3 3 e 4 5 5 5 5 f . . 
        . . f b 3 3 3 3 e 4 4 4 e f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . . f 3 3 3 3 e b 3 e e 3 3 f . 
        . . f 3 3 3 3 f f e e e 3 3 f . 
        . . f b b b b f b f e e e 3 f . 
        . . f b b b b e 1 f 4 4 e f . . 
        . f f b b b b f 4 4 4 4 f . . . 
        . f b b b b f f f e e e f . . . 
        . . f b b f 4 4 e d d d f . . . 
        . . . f f e 4 4 e d d d f . . . 
        . . . . f b e e b d b d b f . . 
        . . . . f f d 1 d 1 d 1 f f . . 
        . . . . . . f f b b f f . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 2))
    controller.moveSprite(mySprite)
    scene.cameraFollowSprite(mySprite)
    toach1State = 1
    toachState2 = 1
    toachState3 = 1
    RockList = [
    tiles.getTileLocation(11, 2),
    tiles.getTileLocation(3, 3),
    tiles.getTileLocation(12, 6),
    tiles.getTileLocation(10, 7),
    tiles.getTileLocation(1, 10),
    tiles.getTileLocation(14, 12)
    ]
    for (let value of RockList) {
        tiles.setWallAt(value, true)
    }
    releaseRockIndex = 0
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (stageNo > 0) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . f f f f 4 4 f . . . 
            . . . . f f b f 5 4 5 5 4 f . . 
            . . . f b 3 3 e 4 5 5 5 5 f . . 
            . . f b 3 3 3 3 e 4 4 4 e f . . 
            . . f 3 3 3 3 3 3 3 3 3 3 f . . 
            . . f 3 3 3 3 e b 3 e e 3 3 f . 
            . . f 3 3 3 3 f f e e e 3 3 f . 
            . . f b b b b f b f e e e 3 f . 
            . . f b b b b e 1 f 4 4 e f . . 
            . f f b b b b f 4 4 4 4 f . . . 
            . f b b b b f f f e e e f . . . 
            . . f b b f 4 4 e d d d f . . . 
            . . . f f e 4 4 e d d d f . . . 
            . . . . f b e e b d b d b f . . 
            . . . . f f d 1 d 1 d 1 f f . . 
            . . . . . . f f b b f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f 4 4 f . . . 
            . . . . f f b f 5 4 5 5 4 f . . 
            . . . f b 3 3 e 4 5 5 5 5 f . . 
            . . f b 3 3 3 3 e 4 4 4 e f . . 
            . . f 3 3 3 3 3 3 3 3 3 3 3 f . 
            . . f 3 3 3 3 e b 3 e e 3 3 f . 
            . . f 3 3 3 3 f f e e e 3 3 f . 
            . f f b b b b f b f e e e f . . 
            . f b b b b b e 1 f 4 4 e . . . 
            . f b b b b b f 4 4 4 4 f . . . 
            . . f b b b 4 4 e d d d f . . . 
            . . . f f f 4 4 e d d d f . . . 
            . . . f b b e e b b d d d f . . 
            . . . . f b d d 1 d 1 d b f . . 
            . . . . . f f f b b f f f . . . 
            `],
        100,
        true
        )
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (stageNo > 0) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . f f . . . . . . . 
            . . . . . f f 4 4 f f . . . . . 
            . . . . f 5 4 5 5 4 5 f . . . . 
            . . . f e 4 5 5 5 5 4 e f . . . 
            . . f b 3 e 4 4 4 4 e 3 b f . . 
            . f e 3 3 3 3 3 3 3 3 3 3 e f . 
            . f 3 3 e b 3 e e 3 b e 3 3 f . 
            . f b 3 f f e e e e f f 3 b f . 
            f f b b f b f e e f b f b b f f 
            f b b b e 1 f 4 4 f 1 e b b b f 
            . f b b e e 4 4 4 4 4 f b b f . 
            . . f 4 4 4 e d d d b f e f . . 
            . . f e 4 4 e d d d d c 4 e . . 
            . . . f e e d d b d b b f e . . 
            . . . f f 1 d 1 d 1 1 f f . . . 
            . . . . . f f f b b f . . . . . 
            `,img`
            . . . . . . . f f . . . . . . . 
            . . . . . f f 4 4 f f . . . . . 
            . . . . f 5 4 5 5 4 5 f . . . . 
            . . . f e 4 5 5 5 5 4 e f . . . 
            . . f b 3 e 4 4 4 4 e 3 b f . . 
            . f e 3 3 3 3 3 3 3 3 3 3 e f . 
            . f 3 3 e b 3 e e 3 b e 3 3 f . 
            . f b 3 f f e e e e f f 3 b f . 
            f f b b f b f e e f b f b b f f 
            f b b b e 1 f 4 4 f 1 e b b b f 
            . f b b f 4 4 4 4 4 e e b b f . 
            . . f e f b d d d e 4 4 4 f . . 
            . . e 4 c d d d d e 4 4 e f . . 
            . . e f b b d b d d e e f . . . 
            . . . f f 1 1 d 1 d 1 f f . . . 
            . . . . . f b b f f f . . . . . 
            `],
        100,
        true
        )
    }
})
function startStage0 () {
    scene.setBackgroundImage(img`
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccc44cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccc4cccccccccc444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccc444cccccccc4444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccc4444cccccc444ccccccccccccccccccccc44cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccc4444cccc444cccccccccccccccccccccc444cccccccccccccccccccccccc444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccc444444444444ccccc44cccc44ccccccccccccccccccccccc444ccccccccccccccccccccccc444444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccc4444444444444ccccc44ccccccccccccccccccccccccccccc444ccccccccccccccccccccccc444444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccc4444cccccccc4ccc44444444444444ccccccccccccccccccc444ccccc4cccccccccccccccc4444444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccc4444cccccccc4cc444444444444444ccccccccccc44cccccc444ccccc44ccccccccccccccc4444444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccc4444cccccccc4cc44ccccccccccc44ccccccccccc44cccccc444ccccc44ccccccccccccccc4444444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccc4444cccccccc4cc444ccccccccc444ccccccccccc444ccccc444ccccc444cccccccccccccc4444444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccc4444cccccccc4cc444ccccccccc444cccccccccc4444ccccc444ccccc4444ccccccccccccc4444444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccc44444444444c4cc444ccccccccc444ccccccccccc444ccccc444ccccc4444ccccccccccccc4444444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccc44444444444c4ccc44ccccccccc444ccccccccccc44444444444444444444ccccccccccccc4444444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccc4444cccccccc4ccc44cccccccc4444ccccccccccc44444444444444444444ccccccccccccc4444444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccc4444ccccccc44ccc44444444444444ccccccccccccccccccc444ccc44444cccccccccccccc4444444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccc444cccccccc44ccc444444444444ccccccccccccccccccccc444ccccccccccccccccccccc44444444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccc444cccccccc44ccccccc44cc444cccccccccccccccccccccc444ccccccccccccccccccccc44444444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccc444c444444444cccccc444cc444cccccccccccccccccccccc444ccccccccccccccccccccc4444444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccc4444444444c44cccccc444cc444cccccccccccccccccccccc444cccccccccccccccccccccc444444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccc4444cccccccc44cccccc444ccc44ccccccccccccccccccccc4444cccccccccccccccccccccc444444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccc444ccccccccc44ccccc4444ccc44ccccccccccccccccccccc4444cccccc4ccccccccccccccc444444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccc444ccccccccc44ccccc4444ccc44ccccccccccccccc4ccccc4444ccccccc4cccccccccccccccc444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccc444cccccccccc44ccccc4444ccc44cccccccc4ccccc444cccc4444ccccccc44cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccc444cccccccccc44ccccc444cccc44cccccccc4ccccc444cccc4444cccccc4444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccc44cccc444ccccc44ccccccc444cccc444cccc4444cccccc4444cccccccccccccc4444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccc44444cc4444cccccc44ccccccc444cccc444cccc4444ccccccc4444cccccccccccc444444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccc4444c4444ccccccc44444444444ccccc4444444444444444444444cccccccccccc44444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccc4444cccccccccccc44444444444ccccc4444444444444444444444ccccccccccc44444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccc44cccccccccccccccccccccccccccccccccccccccccccccccc444ccccccccccc44444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc44cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccc44ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccc4ccc44ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccc44444444444444cccc44cc444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccc444444444444444ccc44ccc44cccccc44cccccccccccccccccccccccc444ccccccccccccccccccc4ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccc444ccccccccc444cccc44ccc4cccccc4444cccccccccccccccccccccc444444cccccccccccccccc44cccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccc4444ccccccccc444cccc44cccccccccc4444444cccccccccccccccccccc44444ccccccccccc4cccc444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccc4444cccccccccc444cccccccccccccccc4444444cccccccccccccccccccccc4444cccccccccc44ccc444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccc4444cccccccccc444ccccccccccccccccc444444cccccccccccccccccccccccccccccccccccc444ccc44ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccc444ccccccccccc444cccccccccccccccccc4444ccccccccccccccccccccccccccccccccccccc444ccc4cccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccc444ccc44ccccccc444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc44cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccc44ccc44444ccccc444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc4cccccccccccccccccccccccccc44444444ccccccccccc4cccccccccccccccc
        ccccccccccccccccc44ccccc444444ccc444cccccccccccccccccccccccccccccccccccccccccc44444ccccccccccccccccccccccccccccccccccccccccc44444444ccccccccccc4cccccccccccccccc
        ccccccccccccccccccccccccc444444cc444cccccccccccccccccccccccccccccccc44ccccccc4444444ccccccccccccccccccccccccccccccccccccccccc4444444cccccccccc444ccccccccccccccc
        ccccccccccccccccccccccccccc44444c44cccccccccccccccccccccccccccccccc444cccccccc444444cccccccccc44ccccccccccccccccccccccccccccccccc44ccccccccccc444ccccccccccccccc
        ccccccccccccccccccccccccccccc444444ccccccccccccccccccccccccccccccc4444ccccccccccccccccccccccc4444ccccccccccccccccccccccccccccccccccccccccccccc444ccccccccccccccc
        cccccccccccccccccccccccccccccc44444ccccccccccccccccccccccccccccccc444cccccccccccccccccccccccc4444cccccccccccccccccccccccccccccccccccccccccccc444cccccccccccccccc
        cccccccccccccccccccccccccccccc44444cccccccccccccccccccccccccccccc444ccccccccccccccccccccccccc4444cccccccccccccccccccccccccccccccccccccccccccc444cccccccccccccccc
        cccccccccccccccccccccccccccccccc44cccccccccccccccccccccccccccccc444ccccccccccccccccccccccccc44444ccccccccccccccccccccccccccccccccccccccccccc444ccccccccccccccccc
        ccccccccccccccccccccccccccccccc444ccccccccccccccccccccccccccccc444cccccccccccccccccccccccc444444cccccccccccccccccccccccccccccccccccccccccccc444ccccccccccccccccc
        cccccccccccccccccccccccccccccc4444ccccccccccccccccccccccccccc4444cccccccccccccccccccccccc444444ccccccccccccccccccccccccccccccccccccccccccccc444ccccccccccccccccc
        ccccccccccccccccccccccccccccc4444ccccccccccccccccccccccccccc4444ccccccccccccccccccccccccc44444ccccccccccccccccccccccccccccccccccccccccccccc444cccccccccccccccccc
        cccccccccccccccccccccccccccc44444ccccccccccccccc4444cccccc444444ccccccccccccccccccccccc444444cccccccccccccccccccccccccccccccccccccccccccccc44ccccccccccccccccccc
        cccccccccccccccccccccccccccc4444cccccccccccccccc44444444444444cccccccccccccccccccccccc444444ccccccccccccc4444444444cccccccccccccccccccccc444cccccccccccccccccccc
        cccccccccccccccccccccccccc444444ccccccccccccccccc44444444444ccccccccccccccccccccccc44444444cccccccccccccc4444444444ccccccccccccccccccccc4444cccccccccccccccccccc
        ccccccccccccccccccccc4ccc44444cccccccccccccccccccc4444444ccccccccccccccccccc44444444444ccccccccccccccccccc444444444cccccccccccccccccccc4444ccccccccccccccccccccc
        ccccccccccccccccccccc4444444cccccccccccccccccccccccccccccccccccccccccccccccc4444444ccccccccccccccccccccccccccccc444cccccccccccccccccc44444cccccccccccccccccccccc
        cccccccccccccccccccc4444444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc444cccccccccccccccc444444ccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc44444444cccccccccccc44444444ccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc4444444444cccccccccc444444444cccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc4444444444cccccccccc44444444ccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc444ccccccccccc44444ccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc444ccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc44444444ccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc4444444444ccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffcccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2ccccccccccccccccccccccccccccccccccccccccccccccccccccccccff44ffcccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2222cccccccccccccccccccccccccccccccccccccccccccccccccccccf545545fccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc22222ccccccccccccccccccccccccccccccccccccccccccccccccccccfe455554efcccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccfffffffcccccccccccccffccccccccccccccccc222222ccccccccccccccccccccccccccccccccccccccccccccccccccfb3e4444e3bfccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccfffffffcccccccccccccffcccccccccccccccc2222222cccccccccccccccccccccccccccccccccccccccccccccccccfe3333333333efcccccccccccccc
        cccccccccccccccccccccccccccccccccccccfffcccfffccccccccccccffcccccccccccccccc22222222ccccccccccccccccccccccccccccccccccccccccccccccccf33eb3ee3be33fcccccccccccccc
        cccccccccccccccccccccccccccccccccccccfffcccfffccccccccccccffccccccccccccccc222ccc2222cccccccccccccccccccccccccccccccccccccccccccccccfb3ffeeeeff3bfcccccccccccccc
        cccccccccccccccccccccccccccccccccccccfffffffffccccccccccccffcccccccccccccc222ccccc222ccccccccccccccccccccccccccccccccccccccccccccccffbbfbfeefbfbbffccccccccccccc
        cccccccccccccccccccccccccccccccccccccfffffffcccccccccffffcffffffcccccccccc222cccccc22ccccccccccccccccccccccccccccccccccccccccccccccfbbbe1f44f1ebbbfccccccccccccc
        cccccccccccccccccccccccccccccccccccccfffccccccfccffcfffcccffffffccccccccc2222cccccc222ccccccccccccccccccccccccccccccccccccccccccccccfbbee44444fbbfcccccccccccccc
        cccccccccccccccccccccccccccccccccccccfffccccccfccffcffccccffccfffcccccccc2222222222222cccccccccccccccccccccccccccccccccccccccccccccccf444edddbfefccccccccccccccc
        cccccccccccccccccccccccccccccccccccccfffccccccfccffcfffffcffccfffccccccc2222cccccccc222ccccccccccccccccccccccccccccccccccccccccccccccfe44eddddc4eccccccccccccccc
        cccccccccccccccccccccccccccccccccccccfffccccccfccffccccffcffcccffccccccc222ccccccccc2222ccccccccccccccccccccccccccccccccccccccccccccccfeeddbdbbfeccccccccccccccc
        cccccccccccccccccccccccccccccccccccccfffccccccffffffcccffcffcccffccccccc222cccccccccc222ccccccccccccccccccccccccccccccccccccccccccccccff1d1d11ffcccccccccccccccc
        cccccccccccccccccccccccccccccccccccccfffccccccffffcffffffcffcccffcccccccccccccccccccc222ccccccccccccccccccccccccccccccccccccccccccccccccfffbbfcccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        `)
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffff44ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffff4ffffffffff444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffff444ffffffff4444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffff4444ffffff444fffffffffffffffffffff44ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffff4444ffff444ffffffffffffffffffffff444ffffffffffffffffffffffff444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffff444444444444fffff44ffff44fffffffffffffffffffffff444fffffffffffffffffffffff444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffff4444444444444fffff44fffffffffffffffffffffffffffff444fffffffffffffffffffffff444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffff4444ffffffff4fff44444444444444fffffffffffffffffff444fffff4ffffffffffffffff4444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffff4444ffffffff4ff444444444444444fffffffffff44ffffff444fffff44fffffffffffffff4444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffff4444ffffffff4ff44fffffffffff44fffffffffff44ffffff444fffff44fffffffffffffff4444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffff4444ffffffff4ff444fffffffff444fffffffffff444fffff444fffff444ffffffffffffff4444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffff4444ffffffff4ff444fffffffff444ffffffffff4444fffff444fffff4444fffffffffffff4444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffff44444444444f4ff444fffffffff444fffffffffff444fffff444fffff4444fffffffffffff4444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffff44444444444f4fff44fffffffff444fffffffffff44444444444444444444fffffffffffff4444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffff4444ffffffff4fff44ffffffff4444fffffffffff44444444444444444444fffffffffffff4444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffff4444fffffff44fff44444444444444fffffffffffffffffff444fff44444ffffffffffffff4444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffff444ffffffff44fff444444444444fffffffffffffffffffff444fffffffffffffffffffff44444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffff444ffffffff44fffffff44ff444ffffffffffffffffffffff444fffffffffffffffffffff44444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffff444f444444444ffffff444ff444ffffffffffffffffffffff444fffffffffffffffffffff4444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffff4444444444f44ffffff444ff444ffffffffffffffffffffff444ffffffffffffffffffffff444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffff4444ffffffff44ffffff444fff44fffffffffffffffffffff4444ffffffffffffffffffffff444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffff444fffffffff44fffff4444fff44fffffffffffffffffffff4444ffffff4fffffffffffffff444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffff444fffffffff44fffff4444fff44fffffffffffffff4fffff4444fffffff4ffffffffffffffff444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffff444ffffffffff44fffff4444fff44ffffffff4fffff444ffff4444fffffff44ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffff444ffffffffff44fffff444ffff44ffffffff4fffff444ffff4444ffffff4444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffff4444ffffffffff44ffff444fffff44fffffff444ffff444ffff4444ffffff4444ffffffffffffff4444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffff444ffffffff44444ff4444ffffff44fffffff444ffff444ffff4444fffffff4444ffffffffffff444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffff44ffffffffff4444f4444fffffff44444444444fffff4444444444444444444444ffffffffffff44444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffff4fffffffffff4444ffffffffffff44444444444fffff4444444444444444444444fffffffffff44444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffff44ffffffffffffffffffffffffffffffffffffffffffffffff444fffffffffff44444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff44fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffff4fff44fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffff44444444444444ffff44ff444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffff444444444444444fff44fff44ffffff44ffffffffffffffffffffffff444fffffffffffffffffff4fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffff444fffffffff444ffff44fff4ffffff4444ffffffffffffffffffffff444444ffffffffffffffff44ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffff4444fffffffff444ffff44ffffffffff4444444ffffffffffffffffffff44444fffffffffff4ffff444fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffff4444ffffffffff444ffffffffffffffff4444444ffffffffffffffffffffff4444ffffffffff44fff444fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffff4444ffffffffff444fffffffffffffffff444444ffffffffffffffffffffffffffffffffffff444fff44fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffff444fffffffffff444ffffffffffffffffff4444fffffffffffffffffffffffffffffffffffff444fff4ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffff444fff44fffffff444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffff44fff44444fffff444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4ffffffffffffffffffffffffff44444444fffffffffff4ffffffffffffffff
        fffffffffffffffff44fffff444444fff444ffffffffffffffffffffffffffffffffffffffffff44444fffffffffffffffffffffffffffffffffffffffff44444444fffffffffff4ffffffffffffffff
        fffffffffffffffffffffffff444444ff444ffffffffffffffffffffffffffffffff44fffffff4444444fffffffffffffffffffffffffffffffffffffffff4444444ffffffffff444fffffffffffffff
        fffffffffffffffffffffffffff44444f44ffffffffffffffffffffffffffffffff444ffffffff444444ffffffffff44fffffffffffffffffffffffffffffffff44fffffffffff444fffffffffffffff
        fffffffffffffffffffffffffffff444444fffffffffffffffffffffffffffffff4444fffffffffffffffffffffff4444fffffffffffffffffffffffffffffffffffffffffffff444fffffffffffffff
        ffffffffffffffffffffffffffffff44444fffffffffffffffffffffffffffffff444ffffffffffffffffffffffff4444ffffffffffffffffffffffffffffffffffffffffffff444ffffffffffffffff
        ffffffffffffffffffffffffffffff44444ffffffffffffffffffffffffffffff444fffffffffffffffffffffffff4444ffffffffffffffffffffffffffffffffffffffffffff444ffffffffffffffff
        ffffffffffffffffffffffffffffffff44ffffffffffffffffffffffffffffff444fffffffffffffffffffffffff44444fffffffffffffffffffffffffffffffffffffffffff444fffffffffffffffff
        fffffffffffffffffffffffffffffff444fffffffffffffffffffffffffffff444ffffffffffffffffffffffff444444ffffffffffffffffffffffffffffffffffffffffffff444fffffffffffffffff
        ffffffffffffffffffffffffffffff4444fffffffffffffffffffffffffff4444ffffffffffffffffffffffff444444fffffffffffffffffffffffffffffffffffffffffffff444fffffffffffffffff
        fffffffffffffffffffffffffffff4444fffffffffffffffffffffffffff4444fffffffffffffffffffffffff44444fffffffffffffffffffffffffffffffffffffffffffff444ffffffffffffffffff
        ffffffffffffffffffffffffffff44444fffffffffffffff4444ffffff444444fffffffffffffffffffffff444444ffffffffffffffffffffffffffffffffffffffffffffff44fffffffffffffffffff
        ffffffffffffffffffffffffffff4444ffffffffffffffff44444444444444ffffffffffffffffffffffff444444fffffffffffff4444444444ffffffffffffffffffffff444ffffffffffffffffffff
        ffffffffffffffffffffffffff444444fffffffffffffffff44444444444fffffffffffffffffffffff44444444ffffffffffffff4444444444fffffffffffffffffffff4444ffffffffffffffffffff
        fffffffffffffffffffff4fff44444ffffffffffffffffffff4444444fffffffffffffffffff44444444444fffffffffffffffffff444444444ffffffffffffffffffff4444fffffffffffffffffffff
        fffffffffffffffffffff4444444ffffffffffffffffffffffffffffffffffffffffffffffff4444444fffffffffffffffffffffffffffff444ffffffffffffffffff44444ffffffffffffffffffffff
        ffffffffffffffffffff4444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444ffffffffffffffff444444fffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44444444ffffffffffff44444444fffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4444444444ffffffffff444444444ffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4444444444ffffffffff44444444fffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444fffffffffff44444fffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444fffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44444444fffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4444444444fffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44ffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222ffffffffffffffffffffffffffffffffffffffffffffffffffffff545545ffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222fffffffffffffffffffffffffffffffffffffffffffffffffffffe455554efffffffffffffffff
        ffffffffffffffffffffffffffffffffffffff5555555fffffffffffff55fffffffffffffffff222222fffffffffffffffffffffffffffffffffffffffffffffffffffb3e4444e3bffffffffffffffff
        ffffffffffffffffffffffffffffffffffffff5555555fffffffffffff55ffffffffffffffff2222222ffffffffffffffffffffffffffffffffffffffffffffffffffe3333333333efffffffffffffff
        fffffffffffffffffffffffffffffffffffff555fff555ffffffffffff55ffffffffffffffff22222222fffffffffffffffffffffffffffffffffffffffffffffffff33eb3ee3be33fffffffffffffff
        fffffffffffffffffffffffffffffffffffff555fff555ffffffffffff55fffffffffffffff222fff2222ffffffffffffffffffffffffffffffffffffffffffffffffb3ffeeeeff3bfffffffffffffff
        fffffffffffffffffffffffffffffffffffff555555555ffffffffffff55ffffffffffffff222fffff222ffffffffffffffffffffffffffffffffffffffffffffffffbbfbfeefbfbbfffffffffffffff
        fffffffffffffffffffffffffffffffffffff5555555fffffffff5555f555555ffffffffff222ffffff22fffffffffffffffffffffffffffffffffffffffffffffffbbbe1f44f1ebbbffffffffffffff
        fffffffffffffffffffffffffffffffffffff555ffffff5ff55f555fff555555fffffffff2222ffffff222fffffffffffffffffffffffffffffffffffffffffffffffbbee44444fbbfffffffffffffff
        fffffffffffffffffffffffffffffffffffff555ffffff5ff55f55ffff55ff555ffffffff2222222222222ffffffffffffffffffffffffffffffffffffffffffffffff444edddbfeffffffffffffffff
        fffffffffffffffffffffffffffffffffffff555ffffff5ff55f55555f55ff555fffffff2222ffffffff222fffffffffffffffffffffffffffffffffffffffffffffffe44eddddc4ffffffffffffffff
        fffffffffffffffffffffffffffffffffffff555ffffff5ff55ffff55f55fff55fffffff222fffffffff2222fffffffffffffffffffffffffffffffffffffffffffffffeeddbdbbfffffffffffffffff
        fffffffffffffffffffffffffffffffffffff555ffffff555555fff55f55fff55fffffff222ffffffffff222ffffffffffffffffffffffffffffffffffffffffffffffff1d1d11ffffffffffffffffff
        fffffffffffffffffffffffffffffffffffff555ffffff5555f555555f55fff55ffffffffffffffffffff222fffffffffffffffffffffffffffffffffffffffffffffffffffbbfffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.goal, function (sprite, otherSprite) {
    if (stageNo == 1) {
        Book1.destroy(effects.disintegrate, 100)
        Book2.destroy(effects.disintegrate, 100)
        book3.destroy(effects.disintegrate, 100)
        otherSprite.destroy(effects.disintegrate, 100)
        sprite.destroy(effects.disintegrate, 100)
        effects.confetti.startScreenEffect(2000)
        music.baDing.play()
        stageNo = 2
        startStage2()
    } else if (stageNo == 2) {
        effects.confetti.startScreenEffect(2000)
        game.over(true)
    } else {
    	
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.key, function (sprite, otherSprite) {
    if (stageNo > 0) {
        otherSprite.destroy()
        music.baDing.play()
        countKey += 1
    }
})
function startStage1 () {
    tiles.setTilemap(tilemap`level`)
    chestBox = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . c c c c c c c c . . . . 
        . . c c b b 3 b 3 3 b b c c . . 
        . c 3 3 b 3 3 b 3 3 3 b 3 3 c . 
        c d d b 3 3 b 3 3 b 3 3 b d d c 
        f c c c d d c d d c d d c c c f 
        f b 3 c c c b c c b c c c 3 b f 
        . c b b 3 3 b 3 3 b 3 3 b b c . 
        . . f f f f f f f f f f f f . . 
        `, SpriteKind.chest)
    tiles.placeOnTile(chestBox, tiles.getTileLocation(13, 4))
    Book1 = sprites.create(img`
        .cccccccccccccc.
        cbddddddddddddbc
        cddddddddddddddc
        cbddddddddddddbc
        ccbbbbbbbbbbbbcc
        ccffffffffffffcc
        cbc44c7c66c3ccbc
        cbc44c7c66c3ccbc
        fbc44c7c66c3ccbf
        fdccccccccccccdf
        fdcbbddddddbbcdf
        fdffffffffffffdf
        fdcc4c44c3c7ccdf
        fdcc4c44c3c7ccdf
        fdcccc44ccc7ccdf
        fdccccccccccccdf
        fdcbbddddddbbcdf
        fdcbbddddddbbcdf
        fdffffffffffffdf
        ffffffffffffffff
        ................
        ................
        ................
        ................
        `, SpriteKind.book)
    tiles.placeOnTile(Book1, tiles.getTileLocation(1, 4))
    Book2 = sprites.create(img`
        .cccccccccccccc.
        cbddddddddddddbc
        cddddddddddddddc
        cbddddddddddddbc
        ccbbbbbbbbbbbbcc
        ccffffffffffffcc
        cbc44c7c66c3ccbc
        cbc44c7c66c3ccbc
        fbc44c7c66c3ccbf
        fdccccccccccccdf
        fdcbbddddddbbcdf
        fdffffffffffffdf
        fdcc4c44c3c7ccdf
        fdcc4c44c3c7ccdf
        fdcccc44ccc7ccdf
        fdccccccccccccdf
        fdcbbddddddbbcdf
        fdcbbddddddbbcdf
        fdffffffffffffdf
        ffffffffffffffff
        ................
        ................
        ................
        ................
        `, SpriteKind.book)
    tiles.placeOnTile(Book2, tiles.getTileLocation(3, 4))
    book3 = sprites.create(img`
        .cccccccccccccc.
        cbddddddddddddbc
        cddddddddddddddc
        cbddddddddddddbc
        ccbbbbbbbbbbbbcc
        ccffffffffffffcc
        cbc44c7c66c3ccbc
        cbc44c7c66c3ccbc
        fbc44c7c66c3ccbf
        fdccccccccccccdf
        fdcbbddddddbbcdf
        fdffffffffffffdf
        fdcc4c44c3c7ccdf
        fdcc4c44c3c7ccdf
        fdcccc44ccc7ccdf
        fdccccccccccccdf
        fdcbbddddddbbcdf
        fdcbbddddddbbcdf
        fdffffffffffffdf
        ffffffffffffffff
        ................
        ................
        ................
        ................
        `, SpriteKind.book)
    tiles.placeOnTile(book3, tiles.getTileLocation(1, 7))
    key2 = sprites.create(img`
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . 5 5 . . . 5 5 . . . . . 
        . . . . 5 5 . . . 5 5 . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . 5 5 5 5 5 . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . 5 5 5 5 5 . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . 5 5 5 5 5 . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.key)
    tiles.placeOnTile(key2, tiles.getTileLocation(13, 7))
    dog1 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        .........fffff..........
        ........f11111ff........
        .......fb111111bf.......
        .......f1111111dbf......
        ......fd111111dddf......
        ......fd11111ddddf......
        ......fd11dddddddf......
        ......f111dddddddf......
        ......f11fcddddddf......
        .....fb1111bdddbf.......
        .....f1b1bdfcfff........
        .....fbfbffffffff.......
        ......fffffffffff.ff....
        ...........ffffffff.....
        ........f1b1bffffff.....
        ........fbfbffffff......
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    tiles.placeOnTile(dog1, tiles.getTileLocation(8, 4))
    dog2 = sprites.create(img`
        . . . . . f f f f f f . . . . . 
        . . . . f 2 f e e e e f f . . . 
        . . . f 2 2 2 f e e e e f f . . 
        . . . f e e e e f f e e e f . . 
        . . f e 2 2 2 2 e e f f f f . . 
        . . f 2 e f f f f 2 2 2 e f . . 
        . . f f f e e e f f f f f f f . 
        . . f e e 4 4 f b e 4 4 e f f . 
        . . f f e d d f 1 4 d 4 e e f . 
        . f d d f d d d d 4 e e e f . . 
        . f b b f e e e 4 e e f f . . . 
        . f b b e d d 4 2 2 2 f . . . . 
        . . f b e d d e 2 2 2 e . . . . 
        . . . f f e e f 4 4 4 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(dog2, tiles.getTileLocation(10, 7))
    treasureGoal = sprites.create(img`
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b f f f f f f b b b b b 
        b b b f f f f f f f f f f b b b 
        b b b f f f f f f f f f f f b b 
        b b f f f f f f f f f f f f b b 
        b f f f f f f f f f f f f f b b 
        b f f f f f f f f f f f f f f b 
        b f f f f f f f f f f f f f f b 
        b f f f f f f f f f f f f f f b 
        b f f f f f f f f f f f f f f b 
        b f f f f f f f f f f f f f f b 
        b f f f f f f f f f f f f f f b 
        b f f f f f f f f f f f f f f b 
        b f f f f f f f f f f f f f f b 
        b f f f f f f f f f f f f f f b 
        `, SpriteKind.goal)
    tiles.placeOnTile(treasureGoal, tiles.getTileLocation(1, 10))
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . f 4 4 f f f f . . . . . . 
        . . f 4 5 5 4 5 f b f f . . . . 
        . . f 5 5 5 5 4 e 3 3 b f . . . 
        . . f e 4 4 4 e 3 3 3 3 b f . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 e e 3 b e 3 3 3 3 f . . 
        . f 3 3 e e e f f 3 3 3 3 f . . 
        . . f e e e f b f b b b b f f . 
        . . . e 4 4 f 1 e b b b b b f . 
        . . . f 4 4 4 4 f b b b b b f . 
        . . . f d d d e 4 4 b b b f . . 
        . . . f d d d e 4 4 f f f . . . 
        . . f d d d b b e e b b f . . . 
        . . f b d 1 d 1 d d b f . . . . 
        . . . f f f b b f f f . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(mySprite)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 4))
    scene.cameraFollowSprite(mySprite)
    countKey = 0
    RockList = [tiles.getTileLocation(9, 4), tiles.getTileLocation(5, 5), tiles.getTileLocation(11, 7), tiles.getTileLocation(7, 8)]
    for (let value of RockList) {
        tiles.setWallAt(value, true)
    }
    releaseRockIndex = 0
    nenzutuFlag = 0
    wrongTimes = 0
}
let treasureGoal: Sprite = null
let key3: Sprite = null
let key2: Sprite = null
let wrongTimes = 0
let nenzutuFlag = 0
let key1: Sprite = null
let book3: Sprite = null
let dog2: Sprite = null
let dog1: Sprite = null
let Book2: Sprite = null
let Book1: Sprite = null
let chestBox: Sprite = null
let secretCode = 0
let password = ""
let toachState3 = 0
let toachState2 = 0
let toach1State = 0
let releaseRockIndex = 0
let RockList: tiles.Location[] = []
let countKey = 0
let Irasuto1: Sprite = null
let pc1: Sprite = null
let passDoor: Sprite = null
let person3: Sprite = null
let person2: Sprite = null
let person1: Sprite = null
let dog3: Sprite = null
let toach3: Sprite = null
let toach2: Sprite = null
let toach1: Sprite = null
let mySprite: Sprite = null
let stageNo = 0
stageNo = 0
startStage0()
forever(function () {
    if (!(controller.left.isPressed() || (controller.right.isPressed() || (controller.up.isPressed() || controller.down.isPressed())))) {
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    }
})

StartupEvents.registry('block', event => {

    event.create('schist')
        .displayName('Schist')
        .hardness(5)
        .resistance(1)
        .soundType('stone')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_stone_tool')
        .textureAll('kubejs:block/stones/schist');

});
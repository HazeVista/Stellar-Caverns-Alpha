StartupEvents.registry('block', event => {

    event.create('reinforced_stone_bricks')
        .displayName('Reinforced Stone Bricks')
        .hardness(5)
        .resistance(1)
        .soundType('stone')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_stone_tool')
        .textureAll('kubejs:block/borrowed_from_start/reinforced_stone_bricks');

    event.create('high_steam_machine_casing')
        .displayName('Steel Encased Bricks')
        .hardness(5)
        .resistance(1)
        .soundType('stone')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_stone_tool')
        .textureAll('kubejs:block/borrowed_from_start/high_steam_machine_casing');

    event.create('futura_casing')
        .displayName('Futura Casing')
        .hardness(5)
        .resistance(1)
        .soundType('stone')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/futura_assembler_casing');

    event.create('corrosion_resist_machine_casing')
        .displayName('Corrosion Resistant Machine Casing')
        .hardness(6)
        .resistance(1)
        .soundType('stone')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/corrosion_resist_machine_casing');

    event.create('inert_pvc_casing')
        .displayName('Inert PVC-Coated Casing')
        .hardness(6)
        .resistance(1)
        .soundType('stone')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/inert_pvc_casings');
});
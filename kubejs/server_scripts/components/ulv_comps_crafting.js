ServerEvents.recipes(event => {
    event.shaped('kubejs:ulv_magnetic_motor', [
        'AAA',
        'BCD',
        'AAA'
    ], {
        A: 'minecraft:stone_slab',
        B: 'minecraft:deepslate',
        C: 'gtceu:low_grade_terralite_dust',
        D: 'minecraft:stone'

    })

    event.shaped('kubejs:ulv_electric_pump', [
        ' A ',
        'BCB',
        ' A '
    ], {
        A: 'minecraft:stone_slab',
        B: 'minecraft:deepslate',
        C: 'kubejs:ulv_magnetic_motor'
    })

    event.shaped('kubejs:ulv_electric_piston', [
        ' A ',
        'CBC',
        ' D '
    ], {
        A: 'minecraft:stone_bricks',
        B: 'minecraft:cobblestone_wall',
        C: 'kubejs:ulv_magnetic_motor',
        D: 'minecraft:stone_brick_slab'
    })

});



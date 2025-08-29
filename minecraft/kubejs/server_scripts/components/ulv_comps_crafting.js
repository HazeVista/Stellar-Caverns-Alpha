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

    event.shaped('kubejs:ulv_pump', [
        ' A ',
        'BCB',
        ' A '
    ], {
        A: 'minecraft:stone_slab',
        B: 'minecraft:deepslate',
        C: 'kubejs:ulv_magnetic_motor'
    })
});



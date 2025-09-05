ServerEvents.recipes(event => {
    event.shaped('gtceu:ulv_macerator', [
        'AAA',
        'BCB',
        'DDD'
    ], {
        A: 'minecraft:cobblestone',
        B: 'kubejs:ulv_magnetic_motor',
        C: '#minecraft:wooden_pressure_plates',
        D: 'minecraft:stone_bricks'
    });

    event.shaped('gtceu:ulv_mixer', [
        'AEA',
        'BCB',
        'DDD'
    ], {
        A: 'minecraft:cobblestone',
        B: 'kubejs:ulv_electric_pump',
        C: 'woodenbucket:wooden_bucket',
        D: 'minecraft:stone_bricks',
        E: 'minecraft:cobblestone_wall'
    });

    event.shaped('gtceu:ulv_extractor', [
        'AAA',
        'BCB',
        'AAA'
    ], {
        A: 'minecraft:cobblestone',
        B: 'kubejs:ulv_electric_pump',
        C: 'woodenbucket:wooden_bucket'
    })

    event.shaped('gtceu:ulv_compressor', [
        'AAA',
        'BCB',
        'DDD'
    ], {
        A: 'minecraft:cobblestone',
        B: 'minecraft:stone',
        C: 'minecraft:cobblestone_wall',
        D: 'minecraft:stone_bricks'
    });

    event.shaped('gtceu:ulv_forge_hammer', [
        ' D ',
        'BCB',
        'BAB'
    ], {
        A: 'minecraft:cobblestone',
        B: 'minecraft:stone',
        C: 'kubejs:ulv_electric_piston',
        D: 'minecraft:cobblestone_wall'
    });

    // Generators

    event.shaped('gtceu:ulv_thermal_generator', [
        'BAB',
        'CDC',
        'BBB'
    ], {
        A: 'kubejs:ulv_electric_pump',
        B: 'minecraft:stone_bricks',
        C: 'kubejs:ulv_magnetic_motor',
        D: 'woodenbucket:wooden_bucket'

    });

    event.shaped('gtceu:ulv_kiln', [
        'AAA',
        'BCB',
        'AAA'
    ], {
        A: 'minecraft:stone_bricks',
        B: 'kubejs:ulv_electric_piston',
        C: 'gtceu:low_grade_terralite_dust',
    });

    event.shaped('gtceu:ulv_sifter', [
        'ABA',
        'CBC',
        'AAA'
    ], {
        A: 'minecraft:stone_bricks',
        B: 'kubejs:wood_prospecting_sieve',
        C: 'kubejs:ulv_magnetic_motor'
    })

    event.shaped('gtceu:ulv_centrifuge', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'minecraft:stone_bricks',
        B: 'kubejs:ulv_magnetic_motor',
        C: 'gtceu:low_grade_terralite_dust'
    });


});     

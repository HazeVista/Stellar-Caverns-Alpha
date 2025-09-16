ServerEvents.recipes(event => {
    event.shaped('gtceu:hardened_blast_furnace', [
        'AAA',
        'CBC',
        'AAA'
    ], {
        A: 'gtceu:double_wrought_iron_plate',
        B: 'gtceu:ulv_kiln',
        C: 'minecraft:campfire'
    });

    event.shaped('gtceu:high_pressure_compressor', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'gtceu:steel_plate',
        B: 'gtceu:lv_electric_piston',
        C: '#gtceu:circuits/lv',
        D: 'kubejs:high_steam_machine_casing'
    })

    event.shaped('gtceu:hardened_core_drilling_rig',[
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'gtceu:steel_plate',
        B: 'gtceu:lv_electric_motor',
        C: 'gtceu:steel_drill_head'

    })

    event.shaped('gtceu:wetmill',[
        'ADA',
        'BCB',
        'ADA'
    ], {
        A: 'gtceu:steel_plate',
        B: 'gtceu:lv_electric_pump',
        C: 'gtceu:steel_pipe_casing',
        D: '#gtceu:circuits/lv',
        
    })

    event.shaped('gtceu:drymill',[
        'AEA',
        'DCD',
        'ABA'
    ], {
        A: 'gtceu:steel_plate',
        B: 'gtceu:lv_electric_pump',
        C: 'gtceu:steel_gearbox',
        D: '#gtceu:circuits/lv',
        E: 'kubejs:wood_prospecting_sieve'  
    })

    event.shaped('gtceu:greenhouse',[
        'BAB',
        'CDC',
        'BAB'
    ], {
        A: '#gtceu:circuits/mv',
        B: 'kubejs:high_steam_machine_casing',
        C: 'gtceu:mv_conveyor_module',
        D: 'gtceu:mv_machine_casing'
    })
});

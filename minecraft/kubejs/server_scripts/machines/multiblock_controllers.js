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
        D: 'gtceu:solid_machine_casing'
    })
});

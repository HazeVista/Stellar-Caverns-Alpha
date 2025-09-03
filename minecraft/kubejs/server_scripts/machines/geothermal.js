ServerEvents.recipes(event => {
    event.shaped('gtceu:lv_geothermal_generator', [
        'DAD',
        'BCB',
        'DED'
    ], {
        A: 'gtceu:tin_single_cable',
        B: 'gtceu:lv_electric_motor',
        C: 'gtceu:lv_machine_hull',
        D: 'gtceu:steel_plate',
        E: '#gtceu:circuits/lv'
    });
});
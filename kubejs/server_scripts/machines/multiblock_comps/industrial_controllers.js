ServerEvents.recipes(event => {
    event.shaped('gtceu:industrial_hammer_press', [
        'CDC',
        'AEB',
        'CDC'
    ], {
        A: 'gtceu:lv_bender',
        B: 'gtceu:lv_forge_hammer',
        C: 'gtceu:lv_electric_piston',
        D: '#gtceu:circuits/lv',
        E: 'gtceu:lv_conveyor_module'
    });

    event.shaped('gtceu:industrial_mold_press', [
        'ACA',
        'BED',
        'ACA'
    ], {
        A: 'gtceu:hv_electric_piston',
        B: 'gtceu:hv_forming_press',
        C: 'gtceu:tempered_glass',
        D: 'gtceu:hv_extruder',
        E: '#gtceu:circuits/hv',
    });

    event.shaped('gtceu:industrial_wiremill', [
        'DBD',
        'CAC',
        'DBD'
    ], {
        A: 'gtceu:lv_wiremill',
        B: 'gtceu:steel_plate',
        C: 'gtceu:aluminium_spring',
        D: 'gtceu:lv_electric_motor'

    });

    event.shaped('gtceu:industrial_arc_furnace', [
        'ECE',
        'BAB',
        'DDD'
    ], {
        A: 'gtceu:hv_arc_furnace',
        B: '#gtceu:circuits/hv',
        C: 'gtceu:graphite_dust',
        D: 'gtceu:invar_plate',
        E: 'gtceu:graphene_single_cable'
    });

    event.shaped('gtceu:industrial_lathe', [
        'ACA',
        'DBD',
        'EFE'
    ], {
        A: 'kubejs:terralite_grinding_head',
        B: 'gtceu:lv_lathe',
        C: '#gtceu:circuits/lv',
        D: 'gtceu:lv_conveyor_module',
        E: 'gtceu:lv_electric_motor',
        F: 'gtceu:tin_single_cable'
    });

    event.shaped('gtceu:industrial_electrolyzer', [
        'BDB',
        'BAB',
        'CDC'
    ], {
        A: 'gtceu:mv_electrolyzer',
        B: 'gtceu:electrum_double_wire',
        C: '#gtceu:circuits/lv',
        D: 'gtceu:steel_plate'
    });

    event.shaped('gtceu:industrial_solidifier', [
        'AEA',
        'CBC',
        'ADA'
    ], {
        A: 'gtceu:polyethylene_small_fluid_pipe',
        B: 'gtceu:hv_fluid_solidifier',
        C: 'gtceu:hv_electric_pump',
        D: '#gtceu:circuits/hv',
        E: 'gtceu:tempered_glass',               
    });

    event.shaped('gtceu:industrial_centrifuge', [
        'BDB',
        'AEC',
        'BDB'
    ], {
        A: 'gtceu:mv_centrifuge',
        B: 'gtceu:mv_electric_motor',
        C: 'gtceu:mv_thermal_centrifuge',
        D: 'gtceu:steel_plate',
        E: '#gtceu:circuits/mv',
    });

    event.shaped('gtceu:industrial_mixer', [
        'DAD',
        'CBC',
        'EAE'
    ], {
        A: 'gtceu:steel_rotor',
        B: 'gtceu:mv_mixer',
        C: '#gtceu:circuits/mv',
        D: 'gtceu:polyethylene_small_fluid_pipe',
        E: 'gtceu:mv_electric_motor'
    });

    event.shaped('gtceu:industrial_sifter', [
        'DAD',
        'EBE',
        'CAC'
    ], {
        A: 'gtceu:item_smart_filter',
        B: 'gtceu:mv_sifter',
        C: '#gtceu:circuits/mv',
        D: 'gtceu:steel_plate',
        E: 'gtceu:mv_electric_piston'
    });

    event.shaped('gtceu:industrial_ore_washer', [
        'CEC',
        'BAB',
        'DFD'
    ], {
        A: 'gtceu:mv_ore_washer',
        B: '#gtceu:circuits/mv',
        C: 'gtceu:mv_electric_pump',
        D: 'gtceu:mv_conveyor_module',
        E: 'gtceu:stainless_steel_rotor',
        F: 'gtceu:polyethylene_normal_fluid_pipe'
    });

    event.shaped('gtceu:industrial_autoclave', [
        'BDB',
        'BAB',
        'ECE'
    ], {
        A: 'gtceu:mv_autoclave',
        B: 'gtceu:double_stainless_steel_plate',
        C: '#gtceu:circuits/ev',
        D: 'gtceu:tempered_glass',
        E: 'gtceu:mv_electric_pump'
    });

    event.shaped('gtceu:industrial_macerator', [
        'CBC',
        'EAE',
        'FDF'
    ], {
        A: 'gtceu:mv_macerator',
        B: 'kubejs:terralite_grinding_head',
        C: 'gtceu:diamond_grinding_head',
        D: '#gtceu:circuits/mv',
        E: 'gtceu:mv_electric_motor',
        F: 'gtceu:mv_electric_piston'
    });
});
    ServerEvents.recipes(event => {
        event.shaped('gtceu:mv_macerator', [
            'DCF',
            'AAF',
            'BBA'
        ], {
            A: 'gtceu:copper_single_cable',
            B: '#gtceu:circuits/mv',
            C: 'gtceu:mv_electric_motor',
            D: 'gtceu:mv_electric_piston',
            E: 'gtceu:mv_machine_hull',
            F: 'kubejs:terralite_drilling_head'

        })

        event.shaped('gtceu:mv_lathe', [
            'ABA',
            'CEF',
            'BAD'
        ], {
            A: 'gtceu:copper_single_cable',
            B: '#gtceu:circuits/mv',
            C: 'gtceu:mv_electric_motor',
            D: 'gtceu:mv_electric_piston',
            E: 'gtceu:mv_machine_hull',
            F: 'kubejs:terralite_drilling_head'
        })

            event.shaped('gtceu:mv_rock_crusher', [
            'DCF',
            'AEA',
            'BBB'
        ], {
            A: 'gtceu:copper_single_cable',
            B: '#forge:glass',
            C: 'gtceu:mv_electric_motor',
            D: 'gtceu:mv_electric_piston',
            E: 'gtceu:mv_machine_hull',
            F: 'kubejs:terralite_drilling_head'
        })

            event.shaped('gtceu:lv_macerator', [
            'DCF',
            'AAE',
            'BBA'
        ], {
            A: 'gtceu:tin_single_cable',
            B: '#gtceu:circuits/lv',
            C: 'gtceu:lv_electric_motor',
            D: 'gtceu:lv_electric_piston',
            E: 'gtceu:lv_machine_hull',
            F: 'kubejs:terralite_drilling_head'
        })

        event.shaped('gtceu:lv_rock_crusher', [
            'DCF',
            'AEA',
            'BBB'
        ], {
            A: 'gtceu:tin_single_cable',
            B: '#forge:glass',
            C: 'gtceu:lv_electric_motor',
            D: 'gtceu:lv_electric_piston',
            E: 'gtceu:lv_machine_hull',
            F: 'kubejs:terralite_drilling_head'
        })

        event.shaped('gtceu:lv_lathe', [
            'ABA',
            'CEF',
            'BAD'
        ], {
            A: 'gtceu:tin_single_cable',
            B: '#gtceu:circuits/lv',
            C: 'gtceu:lv_electric_motor',
            D: 'gtceu:lv_electric_piston',
            E: 'gtceu:lv_machine_hull',
            F: 'kubejs:terralite_drilling_head'
        })
    });
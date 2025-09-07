    ServerEvents.recipes(event => {
        event.shaped('gtceu:mv_macerator', [
            'DCF',
            'AEF',
            'BBA'
        ], {
            A: 'gtceu:copper_single_cable',
            B: '#gtceu:circuits/mv',
            C: 'gtceu:mv_electric_motor',
            D: 'gtceu:mv_electric_piston',
            E: 'gtceu:mv_machine_hull',
            F: 'kubejs:terralite_grinding_head'

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
            F: 'kubejs:terralite_grinding_head'
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
            F: 'kubejs:terralite_grinding_head'
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
            F: 'kubejs:terralite_grinding_head'
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
            F: 'kubejs:terralite_grinding_head'
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
            F: 'kubejs:terralite_grinding_head'
        })

        event.shaped('toms_storage:ts.storage_terminal', [
            'ABA',
            'BCD',
            'ABA'
        ], {
            A: 'minecraft:stone_bricks',
            B: 'gtceu:tin_huge_item_pipe',
            C: 'gtceu:steel_crate',
            D: 'minecraft:glass'

        })

        event.shaped('toms_storage:ts.inventory_connector', [
            'ABA',
            'CDC',
            'AEA'
        ], {
            A: 'minecraft:stone_bricks',
            B: 'minecraft:redstone_block',
            C: 'gtceu:steel_crate',
            D: 'minecraft:diamond',
            E: 'gtceu:dense_low_grade_terralite_superconductor_quadruple_wire'
        })
    });
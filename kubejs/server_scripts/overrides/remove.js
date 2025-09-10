ServerEvents.recipes(event => {
    event.remove({id: 'gtceu:centrifuge/decomposition_centrifuging__redstone'})
    event.remove({id: 'gtceu:smelting/smelt_dust_dense_low_grade_terralite_superconductor_to_ingot'})

    event.remove({id: 'gtceu:shaped/mv_lathe'})
    event.remove({id: 'gtceu:shaped/mv_macerator'})
    event.remove({id: 'gtceu:shaped/mv_rock_crusher'})
    event.remove({id: 'gtceu:shaped/mv_block_breaker'})
    event.remove({id: 'gtceu:shaped/lv_macerator'})
    event.remove({id: 'gtceu:shaped/lv_rock_crusher'})
    event.remove({id: 'gtceu:shaped/lv_block_breaker'})
    
    event.remove({id: 'toms_storage:storage_terminal'})
    event.remove({id: 'toms_storage:inventory_connector'})

    event.remove({id:'ae2:smelting/silicon_from_certus_quartz_dust'})
    event.remove({id:'ae2:blasting/silicon_from_certus_quartz_dust'})

    event.remove({id: 'minecraft:shears'})
    event.remove({id: 'minecraft:observer'})
    event.remove({id: 'laserio:logic_chip_raw'})
    event.remove({id: 'laserio:laser_connector_advanced'})
    event.remove({id: 'laserio:card_fluid'})
    event.remove({id: 'laserio:card_item'})
    event.remove({id: 'laserio:card_redstone'})
    event.remove({id: 'laserio:card_energy'})
    event.remove({id: 'laserio:laser_wrench'})
});
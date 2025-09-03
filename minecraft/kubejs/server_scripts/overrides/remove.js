ServerEvents.recipes(event => {
    event.remove({id: 'gtceu:centrifuge/decomposition_centrifuging__redstone'})
    event.remove({id: 'gtceu:smelting/smelt_dust_dense_low_grade_terralite_superconductor_to_ingot'})

    event.remove({id: 'gtceu:shaped/mv_lathe'})
    event.remove({id: 'gtceu:shaped/mv_macerator'})
    event.remove({id: 'gtceu:shaped/mv_rcok_crusher'})
    event.remove({id: 'gtceu:shaped/mv_block_breaker'})
    event.remove({id: 'gtceu:shaped/lv_macerator'})
    event.remove({id: 'gtceu:shaped/lv_rock_crusher'})
    event.remove({id: 'gtceu:shaped/lv_block_breaker'})
    
    event.remove({id: 'toms_storage:storage_terminal'})
    event.remove({id: 'toms_storage:inventory_connector'})
});
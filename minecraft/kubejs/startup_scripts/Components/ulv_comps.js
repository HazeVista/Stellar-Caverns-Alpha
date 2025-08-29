StartupEvents.registry('item', event => {
    event.create('ulv_magnetic_motor')
        .displayName('ULV Magnetic Motor')
        .tooltip('A very weak motor powered off an unknown foreign element.')
        .texture('kubejs:item/components/ulv_motor')

    event.create('ulv_pump')
        .displayName('ULV Pump')
        .tooltip('A very weak pump powered off an unknown foreign element.')
        .tooltip('This pump is not capable of pumping fluids on its own.')
        .texture('kubejs:item/components/ulv_pump')

});
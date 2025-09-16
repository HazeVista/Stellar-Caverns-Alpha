StartupEvents.registry('item', event => {
    event.create('crude_cobblestone_hammer')
        .maxDamage(64)
        .displayName('Crude Cobblestone Hammer')
        .tooltip('Can be used to craft different stone dusts.')
        .texture('kubejs:item/tools/crude_cobblestone_hammer')

    event.create('wood_prospecting_sieve')
        .maxDamage(128)
        .displayName('Wood Prospecting Sieve')
        .tooltip('Can refine stone dust into its more rarer components')
        .texture('kubejs:item/tools/wood_prospecting_sieve')

    event.create('plant_fibers')
        .displayName('Plant Fibers')
        .texture('kubejs:item/materials/plant_fibers')

    event.create('plant_fabric')
        .displayName('Plant Fabric')
        .texture('kubejs:item/materials/plant_fabric')
});
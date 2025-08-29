StartupEvents.registry('item', event => {


    event.create('crude_cobblestone_hammer')
        .maxDamage(64)
        .displayName('Crude Cobblestone Hammer')
        .tooltip('A simple hammer made of cobblestone and wood. Used to crush stone into dust.')
        .texture('kubejs:item/tools/crude_cobblestone_hammer')

    event.create('cobblestone_mortar')
        .maxDamage(128)
        .displayName('Cobblestone Mortar')
        .tooltip('A basic tool for grinding materials into finer forms.')
        .texture('kubejs:item/tools/stone_mortar_and_pestle')

});

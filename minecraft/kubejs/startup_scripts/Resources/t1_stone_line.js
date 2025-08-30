GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('low_grade_terralite')
        .dust()
        .color(0x696969)

    event.create('concentrated_stone_slurry_residue')
        .dust()
        .color(0x2F4D69)

});

StartupEvents.registry('item', event => {
    event.create('stone_slurry_residue_cake')
        .texture('kubejs:item/materials/stone_slurry_residue_cake')
        .displayName('Stone Slurry Residue Cake')
        .tooltip('A thick blue cake with a great aftertaste : )')

});


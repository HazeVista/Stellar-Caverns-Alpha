GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('low_grade_terralite')
        .dust()
        .color(0x696969)


    event.create('dense_low_grade_terralite')
        .dust()
        .color(0x5B7564)
        .secondaryColor(0x019936)
        

    event.create('concentrated_calcareous_slurry_residue')
        .dust()
        .color(0x2F4D69)

    event.create('tuff')
        .dust()
        .color(0x7D9082)

    event.create('dirt')
        .dust()
        .color(0x94674A)

    event.create('limestone')
        .dust()
        .color(0xC1C1C1)

    event.create('concentrated_tuffaceous_slurry_residue')
        .dust()
        .color(0x506756)
    
    

   
});


StartupEvents.registry('item', event => {
    event.create('calcareous_slurry_residue_cake')
        .texture('kubejs:item/materials/calcareous_slurry_residue_cake')
        .displayName('Calcareous Slurry Residue Cake')
        .tooltip('A thick blue cake with a great aftertaste : )')

    event.create('tuffaceous_slurry_residue_cake')
        .texture('kubejs:item/materials/tuffaceous_slurry_residue_cake')
        .displayName('Tuffaceous Slurry Residue Cake')
        .tooltip('One Tuff Cake')


});


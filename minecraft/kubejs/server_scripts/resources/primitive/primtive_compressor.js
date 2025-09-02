ServerEvents.recipes(event => {
    event.recipes.gtceu.primitive_compressor('woodpulp_to_board')
        .itemInputs('gtceu:wood_dust')
        .itemOutputs('gtceu:wood_plate')
        .duration(300)
        .EUt(2)

    event.recipes.gtceu.primitive_compressor('dirt_dust_to_block')
        .itemInputs('4x gtceu:dirt_dust')
        .itemOutputs('minecraft:dirt')
        .duration(160)
        .EUt(2)
        
    event.recipes.gtceu.primitive_compressor('primtive_low_grade_terralite_to_dense')
        .itemInputs('4x gtceu:low_grade_terralite_dust')
        .itemOutputs('gtceu:dense_low_grade_terralite_dust')
        .duration(400)
        .EUt(2)
    
    event.recipes.gtceu.compressor('low_grade_terralite_to_dense')
        .itemInputs('4x gtceu:low_grade_terralite_dust')
        .itemOutputs('gtceu:dense_low_grade_terralite_dust')
        .duration(200)
        .EUt(2)
});
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

    event.recipes.gtceu.primitive_compressor('primitive_chad_to_paper')
        .itemInputs('3x gtceu:paper_dust')
        .itemOutputs('2x minecraft:paper')
        .duration(120)
        .EUt(2)

    event.recipes.gtceu.primitive_compressor('primitive_granite')
        .itemInputs('4x gtceu:granite_dust')
        .itemOutputs('1x granite')
        .duration(120)
        .EUt(2)

    event.recipes.gtceu.primitive_compressor('mud_to_clay')
        .itemInputs('minecraft:mud')
        .itemOutputs('minecraft:clay')
        .duration(20)
        .EUt(2)
    });
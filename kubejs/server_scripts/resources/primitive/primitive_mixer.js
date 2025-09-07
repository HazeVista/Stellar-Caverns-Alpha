ServerEvents.recipes(event => {
    event.recipes.gtceu.primitive_mixer('coarse_dirt')
        .itemInputs('minecraft:gravel', 'minecraft:dirt')
        .itemOutputs('2x minecraft:coarse_dirt')
        .duration(20)
        .EUt(2)

    event.recipes.gtceu.primitive_mixer('red_alloy_dust')
        .itemInputs('1x gtceu:copper_dust', '4x minecraft:redstone')
        .itemOutputs('gtceu:red_alloy_dust')
        .circuit(2)
        .duration(80)
        .EUt(4)
        
    event.recipes.gtceu.primitive_mixer('prim_clay_mix')
        .itemInputs('minecraft:sand')
        .inputFluids('minecraft:water 1000')
        .itemOutputs('minecraft:clay')
        .duration(40)
        .EUt(2)
    
    event.recipes.gtceu.primitive_mixer('prim_bronze_mix')
        .itemInputs('gtceu:tin_dust', 'x3 gtceu:copper_dust')
        .itemOutputs('4x gtceu:bronze_dust')
        .duration(400)
        .EUt(7)
});

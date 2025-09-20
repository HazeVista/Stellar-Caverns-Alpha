ServerEvents.recipes(event => {
    event.recipes.gtceu.primitive_maceration('granite_dustification')
        .itemInputs('minecraft:granite')
        .itemOutputs('4x gtceu:granite_dust')
        .duration(32)
        .EUt(2)

    event.recipes.gtceu.primitive_compressor('granite_formation')
        .itemInputs('gtceu:granite_dust')
        .itemOutputs('minecraft:granite')
        .duration(120)

    event.recipes.gtceu.primitive_mixer('light_granitic_slurry_synthesis')
        .itemInputs(Item.of('16x gtceu:granite_dust'))
        .inputFluids('minecraft:water')
        .outputFluids(Fluid.of('gtceu:light_granitic_slurry', 2000))
        .duration(20)
        .EUt(4)
});
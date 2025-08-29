ServerEvents.recipes(event => {
    event.recipes.gtceu.thermal_generator('stone_burning')
        .itemInputs(Item.of('4x gtceu:stone_dust'))
        .inputFluids('minecraft:water')
        .duration(120)
        .EUt(-2);

    event.recipes.gtceu.thermal_generator('light_stone_slurry_burning')
        .inputFluids('gtceu:light_stone_slurry')
        .outputFluids(Fluid.of('gtceu:light_stone_slurry_waste', 1000))
        .duration(80)
        .EUt(-8);

    
});
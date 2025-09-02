ServerEvents.recipes(event => {
    // Stone burning generator
    event.recipes.gtceu.thermal_generator('primitive_stone_burning')
        .itemInputs('4x gtceu:stone_dust')
        .inputFluids(Fluid.of('minecraft:water', 1000))
        .duration(120)
        .EUt(-2);

    // Light stone slurry burning
    event.recipes.gtceu.thermal_generator('primitive_light_calcareous_slurry_burning')
        .inputFluids(Fluid.of('gtceu:light_calcareous_slurry', 1000))
        .itemInputs('gtceu:dense_low_grade_terralite_dust')
        .outputFluids(Fluid.of('gtceu:light_calcareous_slurry_waste', 1000))
        .duration(1600)
        .EUt(-8);

    // Recycling slurry waste
    event.recipes.gtceu.primitive_extractor('primitive_light_calcareous_slurry_recycling')
        .inputFluids(Fluid.of('gtceu:light_calcareous_slurry_waste', 1000))
        .outputFluids(Fluid.of('minecraft:water', 750))
        .duration(160)
        .EUt(1);

    
    
});

ServerEvents.recipes(event => {
    // Stone burning generator
    event.recipes.gtceu.thermal_generator('primitive_stone_burning')
        .itemInputs('4x gtceu:stone_dust')
        .inputFluids(Fluid.of('minecraft:water', 250))
        .duration(240)
        .EUt(-8);

    // Light stone slurry burning
    event.recipes.gtceu.thermal_generator('primitive_light_calcareous_slurry_burning')
        .inputFluids(Fluid.of('gtceu:light_calcareous_slurry', 2000))
        .itemInputs('2x gtceu:dense_low_grade_terralite_dust')
        .outputFluids(Fluid.of('gtceu:light_calcareous_slurry_waste', 2000))
        .duration(4800)
        .EUt(-8);

    // Recycling slurry waste
    event.recipes.gtceu.primitive_extractor('primitive_light_calcareous_slurry_recycling')
        .inputFluids(Fluid.of('gtceu:light_calcareous_slurry_waste', 1000))
        .outputFluids(Fluid.of('minecraft:water', 500))
        .duration(160)
        .EUt(1);

    
    
});

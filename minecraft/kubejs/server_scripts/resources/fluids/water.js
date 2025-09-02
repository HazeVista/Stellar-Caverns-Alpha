ServerEvents.recipes(event => {
    event.recipes.gtceu.primitive_extractor('base_ore_dusts')
        .itemInputs('#minecraft:saplings')
		.outputFluids(Fluid.of('minecraft:water', 2000))
        .duration(320)

    event.recipes.gtceu.water_pump('stage_one_drilling')
        .circuit(1)
        .outputFluids('minecraft:water')
        .duration(20)
        .EUt(4)
    
});

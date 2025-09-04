ServerEvents.recipes(event => {
    event.recipes.gtceu.primitive_extractor('sapling_to_water')
        .itemInputs('#minecraft:saplings')
		.outputFluids(Fluid.of('minecraft:water', 2000))
        .duration(320)

    event.recipes.gtceu.primitive_extractor('apple_to_water')
        .itemInputs('minecraft:apple')
		.outputFluids(Fluid.of('minecraft:water', 250))
        .duration(80)

});

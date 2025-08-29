ServerEvents.recipes(event => {
    event.recipes.gtceu.primitive_extractor('base_ore_dusts')
        .itemInputs('#minecraft:saplings')
		.outputFluids(Fluid.of('minecraft:water', 100))
        .duration(320)
});

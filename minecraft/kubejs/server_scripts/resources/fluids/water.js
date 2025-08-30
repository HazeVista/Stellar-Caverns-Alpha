ServerEvents.recipes(event => {
    event.recipes.gtceu.primitive_extractor('base_ore_dusts')
        .itemInputs('#minecraft:saplings')
		.outputFluids(Fluid.of('minecraft:water', 2000))
        .duration(320)
});

ServerEvents.recipes(event => {
    event.recipes.gtceu.primitive_extractor('sapling_to_water')
        .itemInputs('#minecraft:saplings')
		.outputFluids(Fluid.of('minecraft:water', 2000))
        .duration(320)

    event.recipes.gtceu.primitive_extractor('apple_to_water')
        .itemInputs('minecraft:apple')
		.outputFluids(Fluid.of('minecraft:water', 250))
        .duration(80)
        
    event.recipes.gtceu.primitive_extractor('leaf_to_water')
        .itemInputs('#minecraft:leaves')
		.outputFluids(Fluid.of('minecraft:water', 250))
        .duration(80)

    event.recipes.gtceu.distillation_tower('distill_groundwater')
        .inputFluids('gtceu:saline_groundwater 3000')
        .outputFluids('gtceu:salt_water 2000', 'minecraft:water 900', 'gtceu:enriched_mineral_water 100')
        .itemOutputs('gtceu:rock_salt_dust')
        .duration(120)
        .EUt(24)
});

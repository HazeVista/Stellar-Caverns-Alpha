ServerEvents.recipes(event => {
    event.recipes.gtceu.centrifuge('redstone_to_silver_ruby_pyrite')
        .itemInputs('10x minecraft:redstone')
		.itemOutputs('gtceu:silver_dust', 'gtceu:ruby_dust', '5x gtceu:pyrite_dust')
        .outputFluids('gtceu:mercury 3000')
        .duration(800)
        .EUt(30)
});

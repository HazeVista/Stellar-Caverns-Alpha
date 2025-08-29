ServerEvents.recipes(event => {
    event.recipes.gtceu.primitive_mixer('light_stone_slurry_synthesis')
        .itemInputs(Item.of('gtceu:stone_dust', 4))
        .inputFluids('minecraft:water')
        .outputFluids('gtceu:light_stone_slurry')
        .duration(20)
        .EUt(4);
});

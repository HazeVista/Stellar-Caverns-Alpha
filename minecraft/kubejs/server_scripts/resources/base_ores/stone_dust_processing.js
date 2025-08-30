ServerEvents.recipes(event => {
    event.recipes.gtceu.primitive_maceration('base_ore_dusts')
        .itemInputs('minecraft:cobblestone')
        .itemOutputs('4x gtceu:stone_dust')
        .duration(32)
        .EUt(2)

    event.recipes.gtceu.primitive_compressor('deepslate_formation')
        .itemInputs('gtceu:deepslate_dust')
        .itemOutputs('minecraft:deepslate')
        .duration(120)

    event.recipes.gtceu.primitive_mixer('light_stone_slurry_synthesis')
        .itemInputs(Item.of('16x gtceu:stone_dust'))
        .inputFluids('minecraft:water')
        .outputFluids(Fluid.of('gtceu:light_stone_slurry', 2000))
        .duration(20)
        .EUt(4)

    event.recipes.gtceu.primitive_centrifuge('concentrated_stone_slurry')
        .inputFluids(Fluid.of('gtceu:light_stone_slurry', 2000))
        .outputFluids(Fluid.of('gtceu:concentrated_stone_slurry', 1500))
        .duration(100)
        .EUt(4)

    event.recipes.gtceu.primitive_kiln('stone_slurry_blast_cake')
        .inputFluids(Fluid.of('gtceu:concentrated_stone_slurry', 1000))
        .itemOutputs('kubejs:stone_slurry_residue_cake')
        .duration(200)
        .EUt(2)

    event.recipes.gtceu.primitive_maceration('stone_slurry_residue_dust')
        .itemInputs('kubejs:stone_slurry_residue_cake')
        .itemOutputs(Item.of('10x gtceu:concentrated_stone_slurry_residue_dust'))
        .duration(100)
        .EUt(2)

    event.recipes.gtceu.primitive_sifter('slurry_cake_maceration')
        .itemInputs('gtceu:concentrated_stone_slurry_residue_dust')
        .itemOutputs('gtceu:lead_dust')
        .itemOutputs(Item.of('2x gtceu:copper_dust'))
        .itemOutputs(Item.of('3x gtceu:iron_dust'))
        .itemOutputs(Item.of('4x gtceu:stone_dust'))
        .duration(100)
        .EUt(4)

});


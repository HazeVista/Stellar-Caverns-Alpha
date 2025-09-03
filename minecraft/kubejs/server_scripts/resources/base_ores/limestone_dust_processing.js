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

    event.recipes.gtceu.primitive_mixer('light_calcareous_slurry_synthesis')
        .itemInputs(Item.of('16x gtceu:dripstone_dust'))
        .inputFluids('minecraft:water')
        .outputFluids(Fluid.of('gtceu:light_calcareous_slurry', 2000))
        .duration(20)
        .EUt(4)

    event.recipes.gtceu.primitive_centrifuge('concentrated_calcareous_slurry')
        .inputFluids(Fluid.of('gtceu:light_calcareous_slurry', 2000))
        .outputFluids(Fluid.of('gtceu:concentrated_calcareous_slurry', 1500))
        .duration(100)
        .EUt(4)

    event.recipes.gtceu.primitive_kiln('calcareous_slurry_blast_cake')
        .inputFluids(Fluid.of('gtceu:concentrated_calcareous_slurry', 1000))
        .itemOutputs('kubejs:calcareous_slurry_residue_cake')
        .duration(200)
        .EUt(2)

    event.recipes.gtceu.primitive_maceration('calcareous_slurry_residue_dust')
        .itemInputs('kubejs:calcareous_slurry_residue_cake')
        .itemOutputs(Item.of('10x gtceu:concentrated_calcareous_slurry_residue_dust'))
        .duration(100)
        .EUt(2)

    event.recipes.gtceu.primitive_sifter('slurry_cake_maceration')
        .itemInputs('5x gtceu:concentrated_calcareous_slurry_residue_dust')
        .itemOutputs('gtceu:lead_dust')
        .itemOutputs(Item.of('2x gtceu:copper_dust'))
        .itemOutputs(Item.of('3x gtceu:iron_dust'))
        .itemOutputs(Item.of('4x gtceu:dripstone_dust'))
        .duration(100)
        .EUt(4)

});


ServerEvents.recipes(event => {
    event.recipes.gtceu.primitive_mixer('coarse_dirt')
        .itemInputs('minecraft:gravel', 'minecraft:dirt')
        .itemOutputs('2x minecraft:coarse_dirt')
        .duration(20)
        .EUt(2)

    event.recipes.gtceu.primitive_mixer('red_alloy_dust')
        .itemInputs('1x gtceu:copper_dust', 'minecraft:redstone')
        .itemOutputs('gtceu:red_alloy_dust')
        .circuit(2)
        .duration(80)
        .EUt(4)

});

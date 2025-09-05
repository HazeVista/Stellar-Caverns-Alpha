ServerEvents.recipes(event => {
    event.recipes.gtceu.primitive_maceration('wood_pulp')
        .itemInputs('#minecraft:logs')
        .itemOutputs('4x gtceu:wood_dust')
        .duration(320)
        .EUt(2)
});
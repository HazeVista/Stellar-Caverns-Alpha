ServerEvents.recipes(event => {
    event.recipes.gtceu.core_drilling('cobblestone_drilling')
        .circuit(1)
        .inputFluids('minecraft:water 50')
        .itemOutputs('4x minecraft:cobblestone')
        .duration(20)
        .EUt(16)
});
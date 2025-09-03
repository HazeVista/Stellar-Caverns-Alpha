ServerEvents.recipes(event => {
    event.recipes.gtceu.high_pressure_compression('sand_to_glass_logs')
        .itemInputs('64x minecraft:cobblestone')
        .outputFluids('minecraft:lava 750',)
        .duration(800)
        .EUt(32)

    event.recipes.gtceu.high_pressure_compression('carbon_to_diamond')
        .itemInputs('64x gtceu:carbon_dust')
        .itemOutputs('1x minecraft:diamond')
        .duration(600)
        .EUt(32)



});
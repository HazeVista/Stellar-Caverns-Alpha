ServerEvents.recipes(event => {
    event.recipes.gtceu.centrifuge('volcanic_ash_centri')
        .itemInputs('6x gtceu:volcanic_ash_dust')
        .itemOutputs('3x gtceu:ash_dust', "2x gtceu:obsidian_dust", "gtceu:arsenic_dust")
        .duration(40)
        .EUt(16)

    event.recipes.gtceu.electrolyzer('alumina_dust_elec')
        .itemInputs('5x gtceu:alumina_dust')
        .itemOutputs('2x gtceu:aluminium_dust')
        .outputFluids('gtceu:oxygen 3000')
        .duration(80)
        .EUt(96)

    event.recipes.gtceu.electrolyzer('dolomite_dust_elec')
        .itemInputs('11x gtceu:dolomite_dust')
        .itemOutputs('2x gtceu:carbon_dust', '2x gtceu:calcium_dust', '1x gtceu:magnesium_dust')
        .outputFluids('gtceu:oxygen 6000')
        .duration(80)
        .EUt(16)

    event.recipes.gtceu.electrolyzer('hornblende_dust_elec')
        .itemInputs('38x gtceu:hornblende_dust')
        .itemOutputs('2x gtceu:calcium_dust', '8x gtceu:sial_dust', '5x gtceu:magnesium_dust')
        .outputFluids('gtceu:oxygen 23000')
        .duration(120)
        .EUt(96)
    
    event.recipes.gtceu.electrolyzer('sial_dust_elec')
        .itemInputs('2x gtceu:sial_dust')
        .itemOutputs('1x gtceu:silicon_dust', '1x gtceu:aluminium_dust')
        .duration(60)
        .EUt(64)
});
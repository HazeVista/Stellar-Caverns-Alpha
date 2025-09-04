ServerEvents.recipes(event => {
    //LV
    event.recipes.gtceu.drymill('drymill_tuff_mixture')
        .inputFluids('gtceu:tuff_mixture 576')
        .itemOutputs('gtceu:silicon_dioxide_dust', '3x gtceu:volcanic_ash_dust')
        .outputFluids('gtceu:enriched_mineral_water 144')
        .duration(160)
        .EUt(16)

    event.recipes.gtceu.drymill('drymill_granite_mixture')
        .inputFluids('gtceu:granite_mixture 1440')
        .itemOutputs('7x gtceu:silicon_dioxide_dust', '2x gtceu:potassium_feldspar_dust', 'gtceu:alumina_dust')
        .outputFluids('gtceu:enriched_mineral_water 360')
        .duration(400)
        .EUt(16)

    event.recipes.gtceu.drymill('drymill_deepslate_mixture')
        .inputFluids('gtceu:deepslate_mixture 1440')
        .itemOutputs('6x gtceu:silicon_dioxide_dust', 'gtceu:hematite_dust', 'gtceu:dolomite_dust', '2x gtceu:alumina_dust')
        .outputFluids('gtceu:enriched_mineral_water 360')
        .duration(400)
        .EUt(16)

    //MV
    event.recipes.gtceu.drymill('drymill_diorite_mixture')
        .inputFluids('gtceu:diorite_mixture 1440')
        .itemOutputs('6x gtceu:plagioclase_dust', '2x gtceu:biotite_dust', 'gtceu:hornblende_dust')
        .outputFluids('gtceu:enriched_mineral_water 324')
        .duration(360)
        .EUt(64)

    event.recipes.gtceu.drymill('drymill_basalt_mixture')
        .inputFluids('gtceu:basalt_mixture 1440')
        .itemOutputs('5x gtceu:silicon_dioxide_dust', 'gtceu:biotite_dust', '2x gtceu:olivine_dust', '2x gtceu:alumina_dust')
        .outputFluids('gtceu:enriched_mineral_water 360')
        .duration(400)
        .EUt(64)

    event.recipes.gtceu.drymill('drymill_schist_mixture')
        .inputFluids('gtceu:schist_mixture 1728')
        .itemOutputs('6x gtceu:biotite_dust', '2x gtceu:silicon_dioxide_dust', '3x gtceu:hematite_dust', 'gtceu:hornblende_dust')
        .outputFluids('gtceu:enriched_mineral_water 432')
        .duration(480)
        .EUt(64)

});
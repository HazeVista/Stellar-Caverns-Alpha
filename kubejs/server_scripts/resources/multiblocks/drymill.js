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

    //HV
    event.recipes.gtceu.drymill('drymill_dripstone_mixture')
        .inputFluids('gtceu:dripstone_mixture 2304')
        .itemOutputs('10x gtceu:calcite_dust', '3x gtceu:dolomite_dust', '2x gtceu:manganese_dust', 'gtceu:silicon_dioxide_dust')
        .outputFluids('gtceu:enriched_mineral_water 576')
        .duration(640)
        .EUt(256)
    
    event.recipes.gtceu.drymill('drymill_plagioclase_mixture')
        .inputFluids('gtceu:plagioclase_mixture 1152')
        .itemOutputs('4x gtceu:sial_dust', '3x gtceu:rock_salt_dust', '2x gtceu:rare_earth_dust')
        .outputFluids('gtceu:enriched_mineral_water 288')
        .duration(320)
        .EUt(256)
    
    event.recipes.gtceu.drymill('drymill_andesite_mixture')
        .inputFluids('gtceu:andesite_mixture 1296')
        .itemOutputs('6x gtceu:plagioclase_dust', '2x gtceu:biotite_dust', 'gtceu:augite_blend_dust')
        .outputFluids('gtceu:enriched_mineral_water 324')
        .duration(360)
        .EUt(256)

    //EV    
    event.recipes.gtceu.drymill('drymill_blackstone_mixture')
        .inputFluids('gtceu:blackstone_mixture 1584')
        .itemOutputs('6x gtceu:plagioclase_dust', '3x gtceu:dark_ash_dust', 'gtceu:olivine_dust', 'gtceu:hornblende_dust')
        .outputFluids('gtceu:enriched_mineral_water 396')
        .duration(440)
        .EUt(1024)    

    event.recipes.gtceu.drymill('drymill.netherrack.mixture')
        .inputFluids('gtceu:netherrack_mixture 2592')
        .itemOutputs('9x gtceu:plagioclase_dust', '3x gtceu:saltpeter_dust', '2x gtceu:dolomite_dust', '2x gtceu:cinnabar_dust', '2x gtceu:titanaugite_dust')
        .outputFluids('gtceu:enriched_mineral_water 648')
        .duration(720)
        .EUt(1024) 
});
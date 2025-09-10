ServerEvents.recipes(event => {
    event.recipes.gtceu.high_pressure_compression('lv_super_con')
      .itemInputs('gtceu:dense_low_grade_terralite_superconductor_dust')
      .itemOutputs('gtceu:dense_low_grade_terralite_superconductor_ingot')
      .duration(400)
      .EUt(32)

   event.recipes.gtceu.mixer('lv_super_con_base')
      .itemInputs('2x gtceu:dense_low_grade_terralite_dust', '3x gtceu:copper_dust', '5x minecraft:redstone')
      .itemOutputs('10x gtceu:dense_low_grade_terralite_superconductor_dust')
      .duration(200)
      .EUt(16)
   
   event.recipes.gtceu.mixer('mv_super_con_base')
      .itemInputs('4x gtceu:dense_low_grade_terralite_dust', '2x gtceu:magnesium_dust')
      .itemOutputs('6x gtceu:magnesiated_terralite_superconductor_dust')
      .duration(200)
      .EUt(80)
});
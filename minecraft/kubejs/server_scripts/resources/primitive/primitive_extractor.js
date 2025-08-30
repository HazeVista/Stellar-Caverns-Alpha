ServerEvents.recipes(event => {
    event.recipes.gtceu.primitive_extractor('sticky_resin_to_raw_rubber')
        .itemInputs('gtceu:sticky_resin')
        .itemOutputs('3x gtceu:raw_rubber_dust')
        .duration(320)
        .EUt(2)
});
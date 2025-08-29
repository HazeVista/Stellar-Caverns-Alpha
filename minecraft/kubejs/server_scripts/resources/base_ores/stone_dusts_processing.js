ServerEvents.recipes(event => {
    // Use a string directly, or define your own id helper if needed
    event.recipes.gtceu.electrolyzer('base_ore_dusts')
        .itemInputs('16x gtceu:stone_dust')
        .itemOutputs('gtceu:copper_dust', '2x gtceu:iron_dust')
        .duration(32)
        .EUt(16);
});

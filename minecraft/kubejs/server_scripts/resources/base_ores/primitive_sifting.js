ServerEvents.recipes(event => {
    event.recipes.gtceu.primitive_sifter('stone_sifting_to_terralite')
        .itemInputs(Item.of('4x gtceu:stone_dust'))
        .itemOutputs('gtceu:low_grade_terralite_dust')
        .circuit(1)
        .duration(100)
        .EUt(4)

    event.recipes.gtceu.primitive_sifter('stone_sifting_to_deepslate')
        .itemInputs(Item.of('4x gtceu:stone_dust'))
        .itemOutputs(Item.of('2x gtceu:deepslate_dust'))
        .circuit(2)
        .duration(65)
        .EUt(4)
});

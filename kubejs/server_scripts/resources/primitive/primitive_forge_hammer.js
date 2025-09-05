ServerEvents.recipes(event => {
    event.recipes.gtceu.primitive_forge_hammer('stone_to_gravel')
        .itemInputs('minecraft:cobblestone')
        .itemOutputs('minecraft:gravel')
        .duration(20)
        .EUt(2)

    event.recipes.gtceu.primitive_forge_hammer('gravel_to_sand')
        .itemInputs('minecraft:gravel')
        .itemOutputs('minecraft:sand')
        .duration(20)
        .EUt(2)

});

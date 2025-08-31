/*const $GTRecipe = Java.loadClass("com.gregtech.gtceu.api.recipe.GTRecipe")
const $MetaMachine = Java.loadClass("com.gregtech.gtceu.api.machine.MetaMachine")
const $ContentModifier = Java.loadClass("com.gregtech.gtxeu.api.recipe.content.ContentModifier")
    

function DefaultParallels(machine, recipe, parallelAmount) {
    if (!(machine instanceof $MetaMachine)) return ModifierFunction.NULL
    if (!(recipe instanceof $GTRecipe)) return ModifierFunction.NULL

    var parallelModifier = ModifierFunction.builder()
        .modifyAllContents($ContentModifier.multiplier(parallelAmount)) 
        .parallels(parallelAmount)
        .build();

    return parallelModifier
}
*/


GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('high_pressure_compression')
        .category('simple')
        .setMaxIOSize(2, 2, 2, 2)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPRESSOR)


});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('high_pressure_compressor', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(() => Block.getBlock('gtceu: solid_machine_casing'))
        .recipeTypes(['high_pressure_compression','primitive_forge_hammer','forge_hammer'])
        .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CAAAC', 'CAAAC', 'CAAAC', 'C###C', 'C###C', '#CCC#')
            .aisle('ABBBA', 'A###A', 'A###A', '#####', '#####', 'C#A#C')
            .aisle('ABBBA', 'A###A', 'ADDDA', '##A##', '##A##', 'CAAAC')
            .aisle('ABBBA', 'A###A', 'A###A', '#####', '#####', 'C#A#C')
            .aisle('CAAAC', 'CA@AC', 'CAAAC', 'C###C', 'C###C', '#CCC#')
            .where('A', Predicates.blocks('gtceu:solid_machine_casing')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY)))
            .where('#', Predicates.any())
            .where('B', Predicates.blocks('minecraft:cauldron'))
            .where('C', Predicates.blocks('gtceu:steel_frame'))
            .where('D', Predicates.blocks('gtceu:steel_machine_casing'))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .build())


        .workableCasingModel(
            "gtceu:block/casings/solid/machine_casing_solid_steel",
            "gtceu:block/machines/forge_hammer"
        );
});

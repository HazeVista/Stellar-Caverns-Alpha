GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

     event.create('industrial_centrifuge')
        .category('industrial')
        .setMaxIOSize(2, 6, 1, 6)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPRESSOR )
    });

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('gtceu:industrial_centrifuge','multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(() => Block.getBlock('gtceu:solid_machine_casing'))
        .recipeTypes(['centrifuge','thermal_centrifuge'])
        .recipeModifiers([GTRecipeModifiers.OC_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('#CCC#','CCTCC','#CCC#')
            .aisle('CCRCC','C#P#C','CCRCC')
            .aisle('CRRRC','TP#PT','CRRRC')
            .aisle('CCRCC','C#P#C','CCRCC')
            .aisle('#CCC#','CC@CC','#CCC#')
            .where('C', Predicates.blocks('gtceu:solid_machine_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setPreviewCount(1).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where('R', Predicates.blocks('kubejs:corrosion_resist_machine_casing'))
            .where('P', Predicates.blocks('gtceu:steel_pipe_casing'))
            .where('T', Predicates.blocks('gtceu:tempered_glass'))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .where('#', Predicates.any())
        .build())

    .workableCasingRenderer(
            "gtceu:block/casings/solid/machine_casing_solid_steel",
            "gtceu:block/machines/centrifuge", false
        );
});
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

     event.create('industrial_autoclave')
        .category('industrial')
        .setMaxIOSize(1, 1, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPRESSOR )
    });

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('gtceu:industrial_autoclave','multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(() => Block.getBlock('kubejs:inert_pvc_casing'))
        .recipeTypes(['autoclave'])
        .recipeModifiers([GTRecipeModifiers.OC_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('FCCCF','CCCCC','#CCC#')
            .aisle('CCCCC','CP#PC','CCCCC')
            .aisle('FCCCF','CC@CC','#CCC#')
            .where('C', Predicates.blocks('kubejs:inert_pvc_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setPreviewCount(1).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where('F', Predicates.blocks('gtceu:stainless_steel_frame'))
            .where('P', Predicates.blocks('gtceu:steel_pipe_casing'))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .where('#', Predicates.any())
        .build())

    .workableCasingRenderer(
            "kubejs:block/casings/inert_pvc_casings",
            "gtceu:block/machines/autoclave", false
        );
});
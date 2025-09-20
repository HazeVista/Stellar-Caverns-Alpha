GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

     event.create('industrial_solidifier')
        .category('industrial')
        .setMaxIOSize(1, 1, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPRESSOR )
    });

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('gtceu:industrial_solidifier','multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(() => Block.getBlock('kubejs:high_steam_machine_casing'))
        .recipeTypes(['fluid_solidifier'])
        .recipeModifiers([GTRecipeModifiers.OC_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('SSSSS','STSTS','SSSSS')
            .aisle('CCCCC','C#P#C','CCCCC')
            .aisle('SSSSS','ST@TS','SSSSS')
            .where('S', Predicates.blocks('kubejs:high_steam_machine_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setPreviewCount(1).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where('C', Predicates.blocks('gtceu:clean_machine_casing'))
            .where('T', Predicates.blocks('gtceu:tempered_glass'))
            .where('P', Predicates.blocks('gtceu:steel_pipe_casing'))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .where('#', Predicates.any())
        .build())

    .workableCasingRenderer(
            "kubejs:block/borrowed_from_start/high_steam_machine_casing",
            "gtceu:block/machines/fluid_solidifier", false
        );
});
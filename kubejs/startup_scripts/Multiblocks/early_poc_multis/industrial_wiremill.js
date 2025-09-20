GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

     event.create('industrial_wiremill')
        .category('industrial')
        .setMaxIOSize(1, 1, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPRESSOR )
    });

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('gtceu:industrial_wiremill','multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(() => Block.getBlock('kubejs:high_steam_machine_casing'))
        .recipeTypes(['wiremill'])
        .recipeModifiers([GTRecipeModifiers.OC_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('FCF','CCC','CTC','CCC','#C#')
            .aisle('CCC','CGC','TGT','CGC','CCC')
            .aisle('F@F','CCC','CTC','CCC','#C#')
            .where('C', Predicates.blocks('kubejs:high_steam_machine_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setPreviewCount(1).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where('T', Predicates.blocks('gtceu:tempered_glass'))
            .where('F', Predicates.blocks('gtceu:steel_frame'))
            .where('G', Predicates.blocks('gtceu:bronze_gearbox'))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .where('#', Predicates.any())
        .build())

        .workableCasingRenderer(
            "kubejs:block/borrowed_from_start/high_steam_machine_casing",
            "gtceu:block/machines/wiremill", false
        );
});
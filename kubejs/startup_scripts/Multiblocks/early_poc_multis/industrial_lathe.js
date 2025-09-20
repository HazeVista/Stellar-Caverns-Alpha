GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

     event.create('industrial_lathe')
        .category('industrial')
        .setMaxIOSize(1, 1, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPRESSOR )
    });

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('gtceu:industrial_lathe','multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(() => Block.getBlock('kubejs:high_steam_machine_casing'))
        .recipeTypes(['lathe'])
        .recipeModifiers([GTRecipeModifiers.OC_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('FCF','CCC','#C#')
            .aisle('CCC','CPC','CCC')
            .aisle('CCC','TGT','CCC')
            .aisle('CCC','CPC','CCC')
            .aisle('FCF','C@C','#C#')
            .where('C', Predicates.blocks('kubejs:high_steam_machine_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setPreviewCount(1).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where('T', Predicates.blocks('gtceu:tempered_glass'))
            .where('F', Predicates.blocks('gtceu:steel_frame'))
            .where('G', Predicates.blocks('gtceu:bronze_gearbox'))
            .where('P', Predicates.blocks('gtceu:bronze_pipe_casing'))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .where('#', Predicates.any())
        .build())

    .workableCasingRenderer(
            "kubejs:block/borrowed_from_start/high_steam_machine_casing",
            "gtceu:block/machines/lathe", false
        );
});
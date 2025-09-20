GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('industrial_arc_furnace')
        .category('industrial')
        .setMaxIOSize(1, 1, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPRESSOR);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('industrial_arc_furnace','multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(() => Block.getBlock('gtceu:heatproof_machine_casing'))
        .recipeTypes(['arc_furnace'])
        .recipeModifiers([GTRecipeModifiers.OC_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('FFF','HHH','HHH','HHH')
            .aisle('FHF','H#H','H#H','HMH')
            .aisle('FFF','H@H','HHH','HHH')
            .where('H', Predicates.blocks('gtceu:heatproof_machine_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setPreviewCount(1).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where('F', Predicates.blocks('gtceu:steel_firebox_casing'))
            .where('M', Predicates.blocks('gtceu:lv_muffler_hatch')
                .or(Predicates.blocks('gtceu:mv_muffler_hatch'))
                .or(Predicates.blocks('gtceu:hv_muffler_hatch'))
                .or(Predicates.blocks('gtceu:ev_muffler_hatch'))
                .or(Predicates.blocks('gtceu:iv_muffler_hatch')))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .where('#', Predicates.any())
        .build())

        .workableCasingRenderer(
            "gtceu:block/casings/solid/machine_casing_heatproof",
            "gtceu:block/machines/arc_furnace", false
        );
});
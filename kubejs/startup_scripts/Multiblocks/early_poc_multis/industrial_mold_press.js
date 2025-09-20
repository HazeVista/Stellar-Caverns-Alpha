GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

     event.create('industrial_mold_press')
        .category('industrial')
        .setMaxIOSize(2, 1, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPRESSOR )
    });

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('gtceu:industrial_mold_press','multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(() => Block.getBlock('gtceu:clean_machine_casing'))
        .recipeTypes(['forming_press','extruder'])
        .recipeModifiers([GTRecipeModifiers.OC_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('F###F','F###F','FCCCF','F###F','#####','#####')
            .aisle('#####','#####','CCGCC','#CCC#','#CTC#','##C##')
            .aisle('#####','#####','CGGGC','#C#C#','#T#T#','#CGC#')
            .aisle('#####','#####','CCGCC','#CCC#','#C@C#','##C##')
            .aisle('F###F','F###F','FCCCF','F###F','#####','#####')
            .where('C', Predicates.blocks('gtceu:clean_machine_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setPreviewCount(1).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where('G', Predicates.blocks('gtceu:stainless_steel_gearbox'))
            .where('T', Predicates.blocks('gtceu:tempered_glass'))
            .where('F', Predicates.blocks('gtceu:stainless_steel_frame'))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .where('#', Predicates.any())
        .build())

    .workableCasingRenderer(
            "gtceu:block/casings/solid/machine_casing_clean_stainless_steel",
            "gtceu:block/machines/forming_press", false
        );
});
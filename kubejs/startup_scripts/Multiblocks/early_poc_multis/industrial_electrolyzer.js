GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

     event.create('industrial_electrolyzer')
        .category('industrial')
        .setMaxIOSize(2, 6, 1, 6)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPRESSOR )
    });

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('gtceu:industrial_electrolyzer','multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(() => Block.getBlock('gtceu:solid_machine_casing'))
        .recipeTypes(['electrolyzer'])
        .recipeModifiers([GTRecipeModifiers.OC_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCCCC','RRRRR','CCCCC')
            .aisle('CRRRC','RPPPR','CRRRC')
            .aisle('CRCCC','RPRRR','CRCCC')
            .aisle('C@C##','RRR##','CCC##')
            .where('C', Predicates.blocks('gtceu:solid_machine_casing')
            .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setPreviewCount(1).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where('R', Predicates.blocks('kubejs:corrosion_resist_machine_casing'))
            .where('P', Predicates.blocks('gtceu:steel_pipe_casing'))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .where('#', Predicates.any())
        .build())

        .workableCasingRenderer(
            "gtceu:block/casings/solid/machine_casing_solid_steel",
            "gtceu:block/machines/electrolyzer", false
        );
});
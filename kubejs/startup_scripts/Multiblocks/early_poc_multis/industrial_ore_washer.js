GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

     event.create('industrial_ore_washer')
        .category('industrial')
        .setMaxIOSize(2, 6, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPRESSOR )
    });

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('gtceu:industrial_ore_washer','multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(() => Block.getBlock('gtceu:solid_machine_casing'))
        .recipeTypes(['ore_washer'])
        .recipeModifiers([GTRecipeModifiers.OC_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('F###F','CCCCC','CRRRC','CCCCC')
            .aisle('#####','CRRRC','R#P#R','C###C')
            .aisle('#####','CRRRC','R#P#R','C###C')
            .aisle('#####','CRRRC','R#P#R','C###C')
            .aisle('#####','CRRRC','R#P#R','C###C')
            .aisle('F###F','CC@CC','CRRRC','CCCCC')
            .where('C', Predicates.blocks('gtceu:solid_machine_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setPreviewCount(1).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where('P', Predicates.blocks('gtceu:steel_pipe_casing'))
            .where('F', Predicates.blocks('gtceu:steel_frame'))
            .where('R', Predicates.blocks('kubejs:corrosion_resist_machine_casing'))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .where('#', Predicates.any())
        .build())

    .workableCasingRenderer(
            "gtceu:block/casings/solid/machine_casing_solid_steel",
            "gtceu:block/machines/ore_washer", false
        );
});
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

     event.create('industrial_mixer')
        .category('industrial')
        .setMaxIOSize(6, 1, 2, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPRESSOR )
    });

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('gtceu:industrial_mixer','multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(() => Block.getBlock('gtceu:solid_machine_casing'))
        .recipeTypes(['mixer'])
        .recipeModifiers([GTRecipeModifiers.OC_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('#CCC#','#CCC#','#CCC#','##F##','#####')
            .aisle('CCCCC','CG#GC','C###C','#####','##F##')
            .aisle('CCCCC','C#P#C','C#P#C','F#P#F','#FPF#')
            .aisle('CCCCC','CG#GC','C###C','#####','##F##')
            .aisle('#CCC#','#C@C#','#CCC#','##F##','#####')
            .where('C', Predicates.blocks('gtceu:solid_machine_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setPreviewCount(1).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where('P', Predicates.blocks('gtceu:steel_pipe_casing'))
            .where('G', Predicates.blocks('gtceu:steel_gearbox'))
            .where('F', Predicates.blocks('gtceu:steel_frame'))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .where('#', Predicates.any())
        .build())

    .workableCasingRenderer(
            "gtceu:block/casings/solid/machine_casing_solid_steel",
            "gtceu:block/machines/mixer", false
        );
});
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

     event.create('industrial_macerator')
        .category('industrial')
        .setMaxIOSize(2, 6, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPRESSOR )
    });

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('gtceu:industrial_macerator','multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(() => Block.getBlock('gtceu:solid_machine_casing'))
        .recipeTypes(['macerator'])
        .recipeModifiers([GTRecipeModifiers.OC_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('F###F','CCCCC','CCTCC','#CCC#')
            .aisle('#####','CCCCC','CG#GC','CAAAC')
            .aisle('F###F','CC@CC','CCTCC','#CCC#')
            .where('C', Predicates.blocks('gtceu:solid_machine_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setPreviewCount(1).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where('G', Predicates.blocks('gtceu:stainless_steel_gearbox'))
            .where('F', Predicates.blocks('gtceu:steel_frame'))
            .where('T', Predicates.blocks('gtceu:tempered_glass'))
            .where('A', Predicates.blocks('gtceu:assembly_line_grating'))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .where('#', Predicates.any())
        .build())

    .workableCasingRenderer(
            "gtceu:block/casings/solid/machine_casing_solid_steel",
            "gtceu:block/machines/macerator", false
        );
});
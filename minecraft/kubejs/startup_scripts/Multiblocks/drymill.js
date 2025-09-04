GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('drymill')
        .category('simple')
        .setEUIO('in')
        .setMaxIOSize(0, 6, 2, 2) // 6 item inputs, 6 outputs, no fluids
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.FURNACE);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('drymill', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS) 
        .appearanceBlock(() => Block.getBlock('gtceu:solid_machine_casing'))
        .recipeType('drymill')
        .recipeModifiers([GTRecipeModifiers.OC_PERFECT_SUBTICK])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('ABBBA','AAAAA','ADDDA','AADAA','MAAAM','MMMMM')
            .aisle('BAAAB','AMMCA','DCMMD','AMMCA','AAMAA','MAAAM')
            .aisle('BAAAB','AMEMA','DMEMD','DMEMD','AMEMA','MAFAM')
            .aisle('BAAAB','ACMMA','DMMCD','ACMMA','AAMAA','MAAAM')
            .aisle('ABBBA','AA@AA','ADDDA','AADAA','MAAAM','MMMMM')

            .where('A', Predicates.blocks('gtceu:solid_machine_casing')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setExactLimit(1)))
            .where('M', Predicates.any())
            .where('B', Predicates.blocks('gtceu:steel_firebox_casing'))
            .where('C', Predicates.blocks('gtceu:steel_pipe_casing'))
            .where('D', Predicates.blocks('gtceu:tempered_glass'))
            .where('E', Predicates.blocks('gtceu:steel_gearbox'))
            .where('F', Predicates.blocks('gtceu:lv_muffler_hatch')
                .or(Predicates.blocks('gtceu:mv_muffler_hatch'))
                .or(Predicates.blocks('gtceu:hv_muffler_hatch'))
                .or(Predicates.blocks('gtceu:ev_muffler_hatch'))
                .or(Predicates.blocks('gtceu:iv_muffler_hatch')))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .build()
        )
        .workableCasingRenderer(
            "gtceu:block/casings/solid/machine_casing_solid_steel",
            "gtceu:block/machines/centrifuge", false
        );
});

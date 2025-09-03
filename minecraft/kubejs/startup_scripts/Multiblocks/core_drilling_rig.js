GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('core_drilling')
        .category('simple')
        .setEUIO('in')
        .setMaxIOSize(1, 2, 1, 2)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.FURNACE);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('hardened_core_drilling_rig', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(() => Block.getBlock('gtceu:solid_machine_casing'))
        .recipeType('core_drilling')
        .recipeModifiers([GTRecipeModifiers.OC_PERFECT_SUBTICK])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('GMMMG', 'DMMMD', 'MDDDM', 'MAAAM', 'MAAAM')
            .aisle('MMMMM', 'MMMMM', 'DAAAD', 'AACAA', 'AAAAA')
            .aisle('MMCMM', 'MMCMM', 'DAAAD', 'ACCCA', 'AAFAA')
            .aisle('MMMMM', 'MMMMM', 'DAAAD', 'AACAA', 'AAAAA')
            .aisle('GMMMG', 'DMMMD', 'MDDDM', 'MA@AM', 'MAAAM')

            .where('A', Predicates.blocks('gtceu:solid_machine_casing')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setExactLimit(1)))
            .where('M', Predicates.any())
            .where('B', Predicates.blocks('gtceu:steel_firebox_casing'))
            .where('C', Predicates.blocks('gtceu:steel_pipe_casing'))
            .where('D', Predicates.blocks('gtceu:steel_frame'))
            .where('E', Predicates.blocks('gtceu:steel_gearbox'))
            .where('F', Predicates.blocks('gtceu:lv_muffler_hatch')
                .or(Predicates.blocks('gtceu:mv_muffler_hatch'))
                .or(Predicates.blocks('gtceu:hv_muffler_hatch'))
                .or(Predicates.blocks('gtceu:ev_muffler_hatch'))
                .or(Predicates.blocks('gtceu:iv_muffler_hatch')))
            .where('G', Predicates.blocks('gtceu:steel_machine_casing'))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .build())
        
        .workableCasingModel(
            "gtceu:block/casings/solid/machine_casing_solid_steel",
            "gtceu:block/machines/centrifuge"
        );
});

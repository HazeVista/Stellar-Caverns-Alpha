GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    
    event.create('wetmill')
        .category('simple')
        .setEUIO('in')
        .setMaxIOSize(2, 2, 1, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.FURNACE);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('wetmill', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS) 
        .appearanceBlock(() => Block.getBlock('gtceu:solid_machine_casing'))
        .recipeType('wetmill')
        .recipeModifiers([GTRecipeModifiers.OC_PERFECT_SUBTICK])
        .pattern(definition => FactoryBlockPattern.start()
                .aisle('#########', 'B#######B', 'B#######B', 'B#######B', '#########')
                .aisle('B#######B', 'A#AAAAA#A', 'AAADDDAAA', 'A#AAAAA#A', 'B#######B')
                .aisle('B#######B', 'AAAAAAAAA', 'ACCCCCCCA', 'AAAAAAAAA', 'B#######B')
                .aisle('B#######B', 'A#AAAAA#A', 'AAAD@DAAA', 'A#AAAAA#A', 'B#######B')
                .aisle('#########', 'B#######B', 'B#######B', 'B#######B', '#########')
                .where('A', Predicates.blocks('gtceu:solid_machine_casing')
                    .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                    .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                    .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setExactLimit(1)))
                .where('#', Predicates.any())
                .where('B', Predicates.blocks('gtceu:steel_frame'))
                .where('C', Predicates.blocks('gtceu:steel_pipe_casing'))
                .where('D', Predicates.blocks('gtceu:tempered_glass'))
                .where('@', Predicates.controller(Predicates.blocks(definition.get())))
                .build())


        .workableCasingModel(
            "gtceu:block/casings/solid/machine_casing_solid_steel",
            "gtceu:block/machines/ore_washer"                   
        );
});

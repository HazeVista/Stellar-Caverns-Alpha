GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('hardened_blast_furnace')
        .category('simple')
        .setMaxIOSize(2, 2, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.FURNACE)

});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('hardened_blast_furnace', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(() => Block.getBlock('minecraft:stone_bricks'))
        .recipeType('hardened_blast_furnace')
        .recipeModifiers([GTRecipeModifiers.OC_PERFECT_SUBTICK])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('BBB','AAA','AAA','AAA')
            .aisle('BBB','ACA','A#A','A#A')
            .aisle('BBB','A@A','AAA','AAA')
            .where('A', Predicates.blocks('minecraft:stone_bricks')
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('#', Predicates.any())
            .where('B', Predicates.blocks('minecraft:smooth_stone'))
            .where('C', Predicates.blocks('minecraft:campfire'))
            .where('D', Predicates.blocks('gtceu:tempered_glass'))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .build())


        .workableCasingRenderer(
            'minecraft:block/stone_bricks',
            "gtceu:block/machines/furnace", false
        );
});

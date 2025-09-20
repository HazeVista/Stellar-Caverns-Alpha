ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler('assembler_stack_starter')
        .itemInputs('sophisticatedbackpacks:upgrade_base', '#gtceu:circuits/lv', 'gtceu:copper_plate')
        .itemOutputs('sophisticatedbackpacks:stack_upgrade_starter_tier')
        .duration(400)
        .EUt(25)

    event.recipes.gtceu.assembler('assembler_stack_1')
        .itemInputs('sophisticatedbackpacks:stack_upgrade_starter_tier', '#gtceu:circuits/mv', 'gtceu:iron_plate')
        .itemOutputs('sophisticatedbackpacks:stack_upgrade_tier_1')
        .duration(400)
        .EUt(100)

    event.recipes.gtceu.assembler('assembler_stack_2')
        .itemInputs('sophisticatedbackpacks:stack_upgrade_tier_1', '#gtceu:circuits/hv', 'gtceu:gold_plate')
        .itemOutputs('sophisticatedbackpacks:stack_upgrade_tier_2')
        .duration(400)
        .EUt(400)

    event.recipes.gtceu.assembler('assembler_stack_3')
        .itemInputs('sophisticatedbackpacks:stack_upgrade_tier_2', '#gtceu:circuits/ev', 'gtceu:diamond_plate')
        .itemOutputs('sophisticatedbackpacks:stack_upgrade_tier_3')
        .duration(400)
        .EUt(1600)

    event.recipes.gtceu.assembler('assembler_stack_4')
        .itemInputs('sophisticatedbackpacks:stack_upgrade_tier_3', '#gtceu:circuits/iv', 'minecraft:netherite_ingot')
        .itemOutputs('sophisticatedbackpacks:stack_upgrade_tier_4')
        .duration(400)
        .EUt(6400)

    event.recipes.gtceu.assembler('assembler_stack_omega') 
        .itemInputs('sophisticatedbackpacks:stack_upgrade_tier_4', '#gtceu:circuits/luv', 'gtceu:naquadah_plate')
        .itemOutputs('sophisticatedbackpacks:stack_upgrade_omega_tier')
        .duration(400)
        .EUt(25600)
});
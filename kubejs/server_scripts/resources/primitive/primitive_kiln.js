ServerEvents.recipes(event => {
    event.recipes.gtceu.primitive_kiln('primitive_sand_to_glass_logs')
        .itemInputs('gtceu:glass_dust','#minecraft:logs')
        .itemOutputs('minecraft:glass')
        .duration(80)

    event.recipes.gtceu.primitive_kiln('primitive_sand_to_glass_planks')
        .itemInputs('gtceu:glass_dust','4x #minecraft:planks')
        .itemOutputs('minecraft:glass')
        .duration(80)

    event.recipes.gtceu.primitive_kiln('primitive_sand_to_glass_charcoal')
        .itemInputs('gtceu:glass_dust', 'minecraft:charcoal')
        .itemOutputs('minecraft:glass')
        .duration(60)

    event.recipes.gtceu.primitive_kiln('primitive_iron_dust_to_ingot')
        .itemInputs('gtceu:iron_dust')
        .itemOutputs('minecraft:iron_ingot')
        .duration(100)
        .EUt(4)

    event.recipes.gtceu.primitive_kiln('primitive_copper_dust_to_ingot')
        .itemInputs('gtceu:copper_dust')
        .itemOutputs('minecraft:copper_ingot')
        .duration(100)
        .EUt(4)

    event.recipes.gtceu.primitive_kiln('primitive_lead_dust_to_ingot')
        .itemInputs('gtceu:lead_dust')
        .itemOutputs('gtceu:lead_ingot')
        .duration(100)
        .EUt(4)

    event.recipes.gtceu.primitive_kiln('primitive_iron_to_wrought_iron')
        .itemInputs('minecraft:iron_ingot','minecraft:charcoal')
        .itemOutputs('gtceu:wrought_iron_ingot')
        .duration(60)
        .EUt(4)

    event.recipes.gtceu.primitive_kiln('primitive_raw_rubber_ingot')
        .itemInputs('3x gtceu:raw_rubber_dust', "gtceu:sulfur_dust")
        .itemOutputs('gtceu:rubber_ingot')
        .duration(160)
        .EUt(4)

    event.recipes.gtceu.primitive_kiln('primitive_charcoal')
        .itemInputs('#minecraft:logs','#minecraft:planks')
        .itemOutputs('minecraft:charcoal')
        .duration(160)
    
    event.recipes.gtceu.primitive_kiln('primitive_glass_tubes')
        .itemInputs('gtceu:glass_dust')
        .notConsumable('gtceu:ball_casting_mold',)
        .itemOutputs('gtceu:glass_tube')
        .duration(160)
        .EUt(4)

    event.recipes.gtceu.primitive_kiln('primitive_coke_bricks')
        .itemInputs('#minecraft:smelts_to_glass', 'minecraft:clay_ball')
        .itemOutputs('2x gtceu:coke_oven_brick')
        .duration(150)
        .EUt(7)
});       
ServerEvents.recipes(event => {
    event.recipes.gtceu.primitive_kiln('sand_to_glass_logs')
        .itemInputs('2x minecraft:sand','#minecraft:logs')
        .itemOutputs('minecraft:glass')
        .duration(80)

    event.recipes.gtceu.primitive_kiln('sand_to_glass_planks')
        .itemInputs('2x minecraft:sand','4x #minecraft:planks')
        .itemOutputs('minecraft:glass')
        .duration(80)

    event.recipes.gtceu.primitive_kiln('sand_to_glass_charcoal')
        .itemInputs('2x minecraft:sand', 'minecraft:charcoal')
        .itemOutputs('minecraft:glass')
        .duration(60)

    event.recipes.gtceu.primitive_kiln('iron_dust_to_ingot')
        .itemInputs('gtceu:iron_dust')
        .itemOutputs('minecraft:iron_ingot')
        .duration(100)
        .EUt(4)

    event.recipes.gtceu.primitive_kiln('copper_dust_to_ingot')
        .itemInputs('gtceu:copper_dust')
        .itemOutputs('minecraft:copper_ingot')
        .duration(100)
        .EUt(4)

    event.recipes.gtceu.primitive_kiln('lead_dust_to_ingot')
        .itemInputs('gtceu:lead_dust')
        .itemOutputs('gtceu:lead_ingot')
        .duration(100)
        .EUt(4)

    event.recipes.gtceu.primitive_kiln('iron_to_wrought_iron')
        .itemInputs('minecraft:iron_ingot','minecraft:charcoal')
        .itemOutputs('gtceu:wrought_iron_ingot')
        .duration(60)
        .EUt(4)

    event.recipes.gtceu.primitive_kiln('raw_rubber_ingot')
        .itemInputs('3x gtceu:raw_rubber_dust', "gtceu:sulfur_dust")
        .itemOutputs('gtceu:rubber_ingot')
        .duration(160)
        .EUt(8)

    event.recipes.gtceu.primitive_kiln('charcoal')
        .itemInputs('#minecraft:logs','#minecraft:planks')
        .itemOutputs('minecraft:charcoal')
        .duration(160)
});       
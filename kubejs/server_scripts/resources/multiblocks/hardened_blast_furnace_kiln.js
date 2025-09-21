ServerEvents.recipes(event => {
    event.recipes.gtceu.hardened_blast_furnace('sand_to_glass_logs')
        .itemInputs('8x minecraft:sand', '4x #minecraft:logs')
        .itemOutputs('4x minecraft:glass')
        .duration(80)

    event.recipes.gtceu.hardened_blast_furnace('sand_to_glass_planks')
        .itemInputs('8x minecraft:sand', '16x #minecraft:planks')
        .itemOutputs('4x minecraft:glass')
        .duration(80)

    event.recipes.gtceu.hardened_blast_furnace('sand_to_glass_charcoal')
        .itemInputs('8x minecraft:sand', '1x minecraft:charcoal')
        .itemOutputs('4x minecraft:glass')
        .duration(80)

    event.recipes.gtceu.hardened_blast_furnace('iron_dust_to_ingot')
        .itemInputs('4x gtceu:iron_dust', '1x minecraft:charcoal')
        .itemOutputs('4x minecraft:iron_ingot')
        .duration(80)

    event.recipes.gtceu.hardened_blast_furnace('copper_dust_to_ingot')
        .itemInputs('4x gtceu:copper_dust', '1x minecraft:charcoal')
        .itemOutputs('4x minecraft:copper_ingot')
        .duration(80)

    event.recipes.gtceu.hardened_blast_furnace('lead_dust_to_ingot')
        .itemInputs('4x gtceu:lead_dust', '1x minecraft:charcoal')
        .itemOutputs('4x gtceu:lead_ingot')
        .duration(80)

    event.recipes.gtceu.hardened_blast_furnace('iron_to_wrought_iron')
        .itemInputs('4x minecraft:iron_ingot', '1x minecraft:charcoal')
        .itemOutputs('4x gtceu:wrought_iron_ingot')
        .duration(80)

    event.recipes.gtceu.hardened_blast_furnace('raw_rubber_ingot')
        .itemInputs('12x gtceu:raw_rubber_dust', "4x gtceu:sulfur_dust")
        .itemOutputs('4x gtceu:rubber_ingot')
        .duration(160)

    event.recipes.gtceu.hardened_blast_furnace('charcoal')
        .itemInputs('4x #minecraft:logs', '4x #minecraft:planks')
        .itemOutputs('4x minecraft:charcoal')
        .duration(160)
    
    event.recipes.gtceu.hardened_blast_furnace('wrought_iron_to_steel')
        .itemInputs('1x minecraft:charcoal', 'gtceu:wrought_iron_ingot')
        .itemOutputs('gtceu:steel_ingot')
        .duration(600)
        
});


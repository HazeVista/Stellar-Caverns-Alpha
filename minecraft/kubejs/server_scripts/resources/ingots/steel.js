ServerEvents.recipes(event => {
    event.recipes.gtceu.hardened_blast_furnace('sticky_resin_to_raw_rubber')
        .itemInputs('2x minecraft:charcoal', 'minecraft:iron_ingot')
        .itemOutputs('gtceu:steel_ingot')
        .duration(400)
});
ServerEvents.recipes(event => {
    event.shaped(Item.of('gtceu:stone_dust'), [
        'BA'
    ], {
        A: 'minecraft:cobblestone',
        B: 'kubejs:crude_cobblestone_hammer'
 

    }).damageIngredient("kubejs:crude_cobblestone_hammer", 1)


    event.shaped(Item.of('gtceu:low_grade_terralite_dust'), [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'gtceu:stone_dust',
        B: 'kubejs:wood_prospecting_sieve'
    }).damageIngredient("kubejs:wood_prospecting_sieve", 1);
});
ServerEvents.recipes(event => {
    event.shaped(Item.of('2x gtceu:stone_dust'), [
        'BA'
    ], {
        A: 'minecraft:cobblestone',
        B: 'kubejs:cobblestone_mortar'
    });
});

ItemEvents.crafted(event => {
    if (event.item.id == 'gtceu:stone_dust') {
        event.ingredients.forEach(ingredient => {
            if (ingredient.id == 'kubejs:cobblestone_mortar') {
                ingredient.damageItem(1, event.player);
            }
        });
    }
});

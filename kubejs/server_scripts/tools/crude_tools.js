ServerEvents.recipes(event => {
    event.shaped('kubejs:crude_cobblestone_hammer', [
        'AAA',
        'ABA',
        ' B '
    ], {
        A: 'minecraft:cobblestone',
        B: 'minecraft:stick'
    });

    event.shaped('kubejs:wood_prospecting_sieve', [
        'ABA',
        'BBB',
        'ABA'
    ], {
        A: '#minecraft:planks',
        B: 'minecraft:stick'
    });
});

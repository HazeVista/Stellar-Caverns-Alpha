ServerEvents.recipes(event => {
    event.shaped('gtceu:hardened_blast_furnace', [
        'AAA',
        'CBC',
        'AAA'
    ], {
        A: 'gtceu:double_wrought_iron_plate',
        B: 'gtceu:ulv_kiln',
        C: 'minecraft:campfire'
    });
});

ServerEvents.recipes(event => {
    event.shaped('gtceu:rubber_plate', [
        ' A ',
        ' B ',
        ' B '
    ], {
        A: '#forge:tools/hammers',
        B: 'gtceu:rubber_ingot'
    });
});

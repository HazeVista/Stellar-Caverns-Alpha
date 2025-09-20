GTCEuServerEvents.fluidVeins(event => {

    event.add('gtceu:saline_groundwater_vein', vein => {
        vein.dimensions('minecraft:overworld')
        vein.fluid(() => Fluid.of('gtceu:saline_groundwater').fluid)
        vein.weight(10)
        vein.minimumYield(150)
        vein.maximumYield(400)
        vein.depletionAmount(2)
        vein.depletionChance(1)
        vein.depletedYield(100)
    });

});
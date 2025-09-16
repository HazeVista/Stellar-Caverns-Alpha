GTCEuStartupEvents.registry('gtceu:material', event => {
event.create('futura_alloy')
        .ingot()
        .blastTemp(1700, 'low', 400, 1200)
        .color(0xebb7ea)
        .secondaryColor(0x000000)
        .flags(GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_DENSE)
});
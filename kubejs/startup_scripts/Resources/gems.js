GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('silmaril')
        .gem() 
        .liquid()
        .color(0xf5d9d7)
        .secondaryColor(0x430252)
        .iconSet(GTMaterialIconSet.EMERALD)

    event.create('soul_lava')
        .liquid(2000)
        .color(0x00DAFF)
});
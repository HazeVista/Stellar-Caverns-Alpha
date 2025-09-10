GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('silmaril')
        .gem() 
        .liquid()
        .color(0x430252)
        GTMaterialIconSet.EMERALD

    event.create('soul_lava')
        .liquid(2000)
        .color(0x00DAFF)
        GTMaterialIconSet.BRIGHT
});
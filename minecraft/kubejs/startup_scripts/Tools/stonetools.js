GTCEuStartupEvents.registry('gtceu:material', event => {
	event.create('woodest')
		.color(0x4F2E00)
		.toolStats(ToolProperty.Builder.of(1, 1, 32, 1, [
			GTToolType.SAW,
			GTToolType.HARD_HAMMER,
			GTToolType.WRENCH,
			GTToolType.KNIFE,
			GTToolType.FILE,
		]).build());
});
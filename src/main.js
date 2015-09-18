var game = new Phaser.Game(ESCAPE.CONFIG.SCREEN.width, ESCAPE.CONFIG.SCREEN.height, ESCAPE.CONFIG.SCREEN.container);

game.state.add('Boot', ESCAPE.STATE.Boot);
game.state.add('Preloader', ESCAPE.STATE.Preloader);
game.state.add('Menu', ESCAPE.STATE.Menu);
game.state.add('Lobby', ESCAPE.STATE.Lobby);

game.state.start('Boot');
var _0x3a66=['create','default','/coding-2-try-phaser-adamjohnson29/dev','webpackJsonp','bind','slice','__extends','setPrototypeOf','__proto__','MainScene','playerSpeed','background','add','scale','width','height','graphics','beginPath','moveTo','lineTo','scoreLabel','Score:\x20','lifeLabel','text','Lives:\x20','scoreCount','lifeCount','scoreCountLabel','toString','lifeCountLabel','ship1','ship','ship2','ship3','sprite','powerUps','physics','power-up','setRandomPosition','game','random','play','red','grey','setVelocity','ship1_anim','ship3_anim','enemies','group','setInteractive','input','gameobjectdown','destroyShip','player','thrust','cursorKeys','keyboard','createCursorKeys','spacebar','addKey','Input','Keyboard','KeyCodes','projectile','overlap','hitEnemy','hurtPlayer','pickPowerUp','collider','destroy','update','moveShip','tilePositionX','JustDown','active','shootBeam','getChildren','movePlayerManager','left','isDown','setVelocityX','right','setVelocityY','down','resetShipPos','Math','Between','setTexture','explosion','explosion_anim','Beam','disableBody','scaleX','scaleY','setText','Explosion','time','addEvent','resetPlayer','enableBody','scene','Scene','constructor','beam','beam_anim','world','body','velocity','GameObjects','Sprite','existing','PreloadScene','preload','load','image','spacegif','./assets/images/spacegif.gif','spritesheet','./assets/spritesheets/ship.png','./assets/spritesheets/ship3.png','./assets/spritesheets/explosion.png','./assets/spritesheets/power-up.png','./assets/spritesheets/player.png','./assets/spritesheets/beam.png','start','anims','ship2_anim','generateFrameNumbers','gray','__importDefault','phaser-game','Scale','FIT','CENTER_BOTH','addEventListener','Game','length','call','push','prototype','hasOwnProperty','apply','splice','exports','defineProperty','undefined','Module','__esModule','object'];(function(_0x43bdfc,_0x52e4c6){var _0xb67384=function(_0x27295a){while(--_0x27295a){_0x43bdfc['push'](_0x43bdfc['shift']());}};_0xb67384(++_0x52e4c6);}(_0x3a66,0x1b2));var _0x14ee=function(_0x20c4ce,_0x54fd1f){_0x20c4ce=_0x20c4ce-0x0;var _0x342b01=_0x3a66[_0x20c4ce];return _0x342b01;};!function(_0x54a535){function _0x7f485(_0x7f485){for(var _0x1ee4bd,_0x4e62ae,_0x30a371=_0x7f485[0x0],_0x189ce7=_0x7f485[0x1],_0x55b361=_0x7f485[0x2],_0x436de2=0x0,_0x464da7=[];_0x436de2<_0x30a371[_0x14ee('0x0')];_0x436de2++)_0x4e62ae=_0x30a371[_0x436de2],Object['prototype']['hasOwnProperty'][_0x14ee('0x1')](_0x2c4169,_0x4e62ae)&&_0x2c4169[_0x4e62ae]&&_0x464da7[_0x14ee('0x2')](_0x2c4169[_0x4e62ae][0x0]),_0x2c4169[_0x4e62ae]=0x0;for(_0x1ee4bd in _0x189ce7)Object[_0x14ee('0x3')][_0x14ee('0x4')]['call'](_0x189ce7,_0x1ee4bd)&&(_0x54a535[_0x1ee4bd]=_0x189ce7[_0x1ee4bd]);for(_0x1c464c&&_0x1c464c(_0x7f485);_0x464da7[_0x14ee('0x0')];)_0x464da7['shift']()();return _0x21b72c['push'][_0x14ee('0x5')](_0x21b72c,_0x55b361||[]),_0x34159b();}function _0x34159b(){for(var _0x54a535,_0x7f485=0x0;_0x7f485<_0x21b72c['length'];_0x7f485++){for(var _0x34159b=_0x21b72c[_0x7f485],_0x349748=!0x0,_0x34b8f7=0x1;_0x34b8f7<_0x34159b[_0x14ee('0x0')];_0x34b8f7++){var _0x5ab4f6=_0x34159b[_0x34b8f7];0x0!==_0x2c4169[_0x5ab4f6]&&(_0x349748=!0x1);}_0x349748&&(_0x21b72c[_0x14ee('0x6')](_0x7f485--,0x1),_0x54a535=_0x580d82(_0x580d82['s']=_0x34159b[0x0]));}return _0x54a535;}var _0x5c3b19={},_0x2c4169={0:0x0},_0x21b72c=[];function _0x580d82(_0x7f485){if(_0x5c3b19[_0x7f485])return _0x5c3b19[_0x7f485][_0x14ee('0x7')];var _0x34159b=_0x5c3b19[_0x7f485]={'i':_0x7f485,'l':!0x1,'exports':{}};return _0x54a535[_0x7f485][_0x14ee('0x1')](_0x34159b[_0x14ee('0x7')],_0x34159b,_0x34159b[_0x14ee('0x7')],_0x580d82),_0x34159b['l']=!0x0,_0x34159b[_0x14ee('0x7')];}_0x580d82['m']=_0x54a535,_0x580d82['c']=_0x5c3b19,_0x580d82['d']=function(_0x54a535,_0x7f485,_0x34159b){_0x580d82['o'](_0x54a535,_0x7f485)||Object[_0x14ee('0x8')](_0x54a535,_0x7f485,{'enumerable':!0x0,'get':_0x34159b});},_0x580d82['r']=function(_0x54a535){_0x14ee('0x9')!=typeof Symbol&&Symbol['toStringTag']&&Object[_0x14ee('0x8')](_0x54a535,Symbol['toStringTag'],{'value':_0x14ee('0xa')}),Object[_0x14ee('0x8')](_0x54a535,_0x14ee('0xb'),{'value':!0x0});},_0x580d82['t']=function(_0x54a535,_0x7f485){if(0x1&_0x7f485&&(_0x54a535=_0x580d82(_0x54a535)),0x8&_0x7f485)return _0x54a535;if(0x4&_0x7f485&&_0x14ee('0xc')==typeof _0x54a535&&_0x54a535&&_0x54a535['__esModule'])return _0x54a535;var _0x34159b=Object[_0x14ee('0xd')](null);if(_0x580d82['r'](_0x34159b),Object[_0x14ee('0x8')](_0x34159b,_0x14ee('0xe'),{'enumerable':!0x0,'value':_0x54a535}),0x2&_0x7f485&&'string'!=typeof _0x54a535)for(var _0x5c3b19 in _0x54a535)_0x580d82['d'](_0x34159b,_0x5c3b19,function(_0x7f485){return _0x54a535[_0x7f485];}['bind'](null,_0x5c3b19));return _0x34159b;},_0x580d82['n']=function(_0x54a535){var _0x7f485=_0x54a535&&_0x54a535[_0x14ee('0xb')]?function(){return _0x54a535['default'];}:function(){return _0x54a535;};return _0x580d82['d'](_0x7f485,'a',_0x7f485),_0x7f485;},_0x580d82['o']=function(_0x54a535,_0x7f485){return Object['prototype'][_0x14ee('0x4')]['call'](_0x54a535,_0x7f485);},_0x580d82['p']=_0x14ee('0xf');var _0x20dcc6=window[_0x14ee('0x10')]=window['webpackJsonp']||[],_0x21b999=_0x20dcc6[_0x14ee('0x2')][_0x14ee('0x11')](_0x20dcc6);_0x20dcc6[_0x14ee('0x2')]=_0x7f485,_0x20dcc6=_0x20dcc6[_0x14ee('0x12')]();for(var _0x1b8852=0x0;_0x1b8852<_0x20dcc6[_0x14ee('0x0')];_0x1b8852++)_0x7f485(_0x20dcc6[_0x1b8852]);var _0x1c464c=_0x21b999;_0x21b72c[_0x14ee('0x2')]([0x225,0x1]),_0x34159b();}({1469:function(_0x52f322,_0x4aa57b,_0x575bc5){'use strict';var _0x528c45,_0x3b31ac=this&&this[_0x14ee('0x13')]||(_0x528c45=function(_0x52f322,_0x4aa57b){return(_0x528c45=Object[_0x14ee('0x14')]||{'__proto__':[]}instanceof Array&&function(_0x52f322,_0x4aa57b){_0x52f322[_0x14ee('0x15')]=_0x4aa57b;}||function(_0x52f322,_0x4aa57b){for(var _0x575bc5 in _0x4aa57b)_0x4aa57b[_0x14ee('0x4')](_0x575bc5)&&(_0x52f322[_0x575bc5]=_0x4aa57b[_0x575bc5]);})(_0x52f322,_0x4aa57b);},function(_0x52f322,_0x4aa57b){function _0x575bc5(){this['constructor']=_0x52f322;}_0x528c45(_0x52f322,_0x4aa57b),_0x52f322[_0x14ee('0x3')]=null===_0x4aa57b?Object['create'](_0x4aa57b):(_0x575bc5[_0x14ee('0x3')]=_0x4aa57b[_0x14ee('0x3')],new _0x575bc5());});Object['defineProperty'](_0x4aa57b,_0x14ee('0xb'),{'value':!0x0});var _0x95b824=_0x575bc5(0x5be),_0x3b7963=_0x575bc5(0x5bf),_0xc26abb=function(_0x52f322){function _0x4aa57b(){var _0x4aa57b=_0x52f322[_0x14ee('0x1')](this,{'key':_0x14ee('0x16')})||this;return _0x4aa57b['playerSize']=0x1,_0x4aa57b[_0x14ee('0x17')]=0xc8,_0x4aa57b;}return _0x3b31ac(_0x4aa57b,_0x52f322),_0x4aa57b[_0x14ee('0x3')][_0x14ee('0xd')]=function(){this[_0x14ee('0x18')]=this[_0x14ee('0x19')]['tileSprite'](0x0,0x0,this['game'][_0x14ee('0x1a')][_0x14ee('0x1b')],this['game'][_0x14ee('0x1a')][_0x14ee('0x1c')],'spacegif'),this[_0x14ee('0x18')]['setOrigin'](0x0,0x0);var _0x52f322=this['add'][_0x14ee('0x1d')]();_0x52f322['fillStyle'](0x0,0x1),_0x52f322[_0x14ee('0x1e')](),_0x52f322[_0x14ee('0x1f')](0x0,0x0),_0x52f322[_0x14ee('0x20')](this[_0x14ee('0x1a')][_0x14ee('0x1b')],0x0),_0x52f322[_0x14ee('0x20')](this[_0x14ee('0x1a')][_0x14ee('0x1b')],0x14),_0x52f322[_0x14ee('0x20')](0x0,0x14),_0x52f322[_0x14ee('0x20')](0x0,0x0),_0x52f322['closePath'](),_0x52f322['fillPath'](),this[_0x14ee('0x21')]=this[_0x14ee('0x19')]['text'](0x0,0x0,_0x14ee('0x22')),this[_0x14ee('0x23')]=this[_0x14ee('0x19')][_0x14ee('0x24')](0x64,0x0,_0x14ee('0x25')),this[_0x14ee('0x26')]=0x0,this[_0x14ee('0x27')]=0x3,this[_0x14ee('0x28')]=this['add'][_0x14ee('0x24')](0x3c,0x0,this[_0x14ee('0x26')][_0x14ee('0x29')]()),this[_0x14ee('0x2a')]=this[_0x14ee('0x19')][_0x14ee('0x24')](0xa0,0x0,this[_0x14ee('0x27')]['toString']()),this[_0x14ee('0x2b')]=this[_0x14ee('0x19')]['sprite'](this[_0x14ee('0x1a')][_0x14ee('0x1b')]/0x2-0x32,this['scale']['height']/0x2,_0x14ee('0x2c')),this[_0x14ee('0x2d')]=this['add']['sprite'](this[_0x14ee('0x1a')]['width']/0x2,this[_0x14ee('0x1a')][_0x14ee('0x1c')]/0x2,_0x14ee('0x2d')),this[_0x14ee('0x2e')]=this[_0x14ee('0x19')][_0x14ee('0x2f')](this[_0x14ee('0x1a')][_0x14ee('0x1b')]/0x2+0x32,this[_0x14ee('0x1a')][_0x14ee('0x1c')]/0x2,'ship3'),this[_0x14ee('0x30')]=this[_0x14ee('0x31')][_0x14ee('0x19')]['group']();for(var _0x4aa57b=0x0;_0x4aa57b<=0x4;_0x4aa57b++){var _0x575bc5=this[_0x14ee('0x31')][_0x14ee('0x19')][_0x14ee('0x2f')](0x10,0x10,_0x14ee('0x32'));this['powerUps']['add'](_0x575bc5),_0x575bc5[_0x14ee('0x33')](0x0,0x0,this[_0x14ee('0x34')][_0x14ee('0x1a')]['width'],this[_0x14ee('0x34')]['scale']['height']),Math[_0x14ee('0x35')]()>0.5?_0x575bc5[_0x14ee('0x36')](_0x14ee('0x37')):_0x575bc5[_0x14ee('0x36')](_0x14ee('0x38')),_0x575bc5[_0x14ee('0x39')](0x64,0x64),_0x575bc5['setCollideWorldBounds'](!0x0),_0x575bc5['setBounce'](0x1);}this[_0x14ee('0x2b')][_0x14ee('0x36')](_0x14ee('0x3a')),this[_0x14ee('0x2d')][_0x14ee('0x36')]('ship2_anim'),this[_0x14ee('0x2e')]['play'](_0x14ee('0x3b')),this[_0x14ee('0x3c')]=this['physics'][_0x14ee('0x19')][_0x14ee('0x3d')](),this['enemies'][_0x14ee('0x19')](this[_0x14ee('0x2b')]),this['enemies'][_0x14ee('0x19')](this['ship2']),this['enemies']['add'](this[_0x14ee('0x2e')]),this[_0x14ee('0x2b')][_0x14ee('0x3e')](),this[_0x14ee('0x2d')][_0x14ee('0x3e')](),this[_0x14ee('0x2e')]['setInteractive'](),this[_0x14ee('0x3f')]['on'](_0x14ee('0x40'),this[_0x14ee('0x41')],this),this[_0x14ee('0x42')]=this[_0x14ee('0x31')][_0x14ee('0x19')]['sprite'](this[_0x14ee('0x1a')][_0x14ee('0x1b')]/0x2-0x8,this[_0x14ee('0x1a')][_0x14ee('0x1c')]-0x40,_0x14ee('0x42')),this['player'][_0x14ee('0x36')](_0x14ee('0x43')),this[_0x14ee('0x44')]=this[_0x14ee('0x3f')][_0x14ee('0x45')][_0x14ee('0x46')](),this[_0x14ee('0x42')]['setCollideWorldBounds'](!0x0),this[_0x14ee('0x47')]=this[_0x14ee('0x3f')]['keyboard'][_0x14ee('0x48')](Phaser[_0x14ee('0x49')][_0x14ee('0x4a')][_0x14ee('0x4b')]['SPACE']),this[_0x14ee('0x4c')]=this[_0x14ee('0x19')][_0x14ee('0x3d')](),this['physics'][_0x14ee('0x19')][_0x14ee('0x4d')](this['projectile'],this['enemies'],this[_0x14ee('0x4e')],function(){},this),this[_0x14ee('0x31')][_0x14ee('0x19')][_0x14ee('0x4d')](this['player'],this[_0x14ee('0x3c')],this[_0x14ee('0x4f')],function(){},this),this[_0x14ee('0x31')][_0x14ee('0x19')]['overlap'](this[_0x14ee('0x42')],this['powerUps'],this[_0x14ee('0x50')],function(){},this),this['physics'][_0x14ee('0x19')][_0x14ee('0x51')](this[_0x14ee('0x4c')],this['powerUps'],function(_0x52f322,_0x4aa57b){_0x52f322[_0x14ee('0x52')](),_0x4aa57b[_0x14ee('0x52')]();});},_0x4aa57b[_0x14ee('0x3')][_0x14ee('0x53')]=function(){this[_0x14ee('0x54')](this['ship1'],0x1),this[_0x14ee('0x54')](this[_0x14ee('0x2d')],0x2),this[_0x14ee('0x54')](this[_0x14ee('0x2e')],0x3),this[_0x14ee('0x18')]['tilePositionY']-=0.5,this[_0x14ee('0x18')][_0x14ee('0x55')]-=0.5,this['movePlayerManager'](),Phaser[_0x14ee('0x49')][_0x14ee('0x4a')][_0x14ee('0x56')](this['spacebar'])&&this[_0x14ee('0x42')][_0x14ee('0x57')]&&this[_0x14ee('0x58')]();for(var _0x52f322=0x0;_0x52f322<this[_0x14ee('0x4c')]['getChildren']()[_0x14ee('0x0')];_0x52f322++){this['projectile'][_0x14ee('0x59')]()[_0x52f322]['update']();}},_0x4aa57b[_0x14ee('0x3')][_0x14ee('0x5a')]=function(){var _0x52f322,_0x4aa57b,_0x575bc5,_0x528c45;(null===(_0x52f322=this[_0x14ee('0x44')][_0x14ee('0x5b')])||void 0x0===_0x52f322?void 0x0:_0x52f322[_0x14ee('0x5c')])?this[_0x14ee('0x42')][_0x14ee('0x5d')](-this[_0x14ee('0x17')]):(null===(_0x4aa57b=this[_0x14ee('0x44')][_0x14ee('0x5e')])||void 0x0===_0x4aa57b?void 0x0:_0x4aa57b['isDown'])&&this['player']['setVelocityX'](this['playerSpeed']),(null===(_0x575bc5=this[_0x14ee('0x44')]['up'])||void 0x0===_0x575bc5?void 0x0:_0x575bc5[_0x14ee('0x5c')])?this['player'][_0x14ee('0x5f')](-this[_0x14ee('0x17')]):(null===(_0x528c45=this[_0x14ee('0x44')][_0x14ee('0x60')])||void 0x0===_0x528c45?void 0x0:_0x528c45[_0x14ee('0x5c')])&&this[_0x14ee('0x42')][_0x14ee('0x5f')](this[_0x14ee('0x17')]);},_0x4aa57b[_0x14ee('0x3')][_0x14ee('0x54')]=function(_0x52f322,_0x4aa57b){_0x52f322['y']+=_0x4aa57b,_0x52f322['y']>this['scale'][_0x14ee('0x1c')]&&this[_0x14ee('0x61')](_0x52f322);},_0x4aa57b['prototype']['resetShipPos']=function(_0x52f322){_0x52f322['y']=0x0;var _0x4aa57b=Phaser[_0x14ee('0x62')][_0x14ee('0x63')](0x0,this[_0x14ee('0x1a')][_0x14ee('0x1b')]);_0x52f322['x']=_0x4aa57b;},_0x4aa57b[_0x14ee('0x3')][_0x14ee('0x41')]=function(_0x52f322,_0x4aa57b){_0x4aa57b[_0x14ee('0x64')](_0x14ee('0x65')),_0x4aa57b[_0x14ee('0x36')](_0x14ee('0x66'));},_0x4aa57b['prototype'][_0x14ee('0x58')]=function(){new _0x95b824[(_0x14ee('0x67'))](this);},_0x4aa57b[_0x14ee('0x3')][_0x14ee('0x50')]=function(_0x52f322,_0x4aa57b){_0x4aa57b[_0x14ee('0x68')](!0x0,!0x0),this[_0x14ee('0x17')]+=0x14,this['player'][_0x14ee('0x69')]+=0.5,this['player'][_0x14ee('0x6a')]+=0.5;},_0x4aa57b[_0x14ee('0x3')][_0x14ee('0x4f')]=function(_0x52f322,_0x4aa57b){this[_0x14ee('0x26')]-=0xf,this['scoreCountLabel'][_0x14ee('0x6b')](this[_0x14ee('0x26')][_0x14ee('0x29')]()),this[_0x14ee('0x61')](_0x4aa57b),this[_0x14ee('0x17')]=0xc8;new _0x3b7963[(_0x14ee('0x6c'))](this,_0x52f322['x'],_0x52f322['y']);_0x52f322[_0x14ee('0x68')](!0x0,!0x0),this[_0x14ee('0x6d')][_0x14ee('0x6e')]({'delay':0x3e8,'callback':this[_0x14ee('0x6f')],'callbackScope':this,'loop':!0x1});},_0x4aa57b[_0x14ee('0x3')][_0x14ee('0x4e')]=function(_0x52f322,_0x4aa57b){new _0x3b7963[(_0x14ee('0x6c'))](this,_0x4aa57b['x'],_0x4aa57b['y']);_0x52f322['destroy'](),this[_0x14ee('0x61')](_0x4aa57b),this['scoreCount']+=0xf,this['scoreCountLabel'][_0x14ee('0x6b')](this[_0x14ee('0x26')][_0x14ee('0x29')]());},_0x4aa57b[_0x14ee('0x3')][_0x14ee('0x6f')]=function(){var _0x52f322=this[_0x14ee('0x1a')][_0x14ee('0x1b')]/0x2-0x8,_0x4aa57b=this[_0x14ee('0x1a')][_0x14ee('0x1c')]+0x40;this['player'][_0x14ee('0x70')](!0x0,_0x52f322,_0x4aa57b,!0x0,!0x0),this[_0x14ee('0x42')][_0x14ee('0x69')]=0x1,this['player'][_0x14ee('0x6a')]=0x1,this[_0x14ee('0x27')]-=0x1,this['lifeCountLabel']['setText'](this[_0x14ee('0x27')][_0x14ee('0x29')]()),0x0==this['lifeCount']&&this[_0x14ee('0x71')]['stop'](_0x14ee('0x16'));},_0x4aa57b;}(Phaser[_0x14ee('0x72')]);_0x4aa57b[_0x14ee('0xe')]=_0xc26abb;},1470:function(_0x48d210,_0x250f4a,_0x4fa230){'use strict';var _0x5c2103,_0x433553=this&&this[_0x14ee('0x13')]||(_0x5c2103=function(_0x48d210,_0x250f4a){return(_0x5c2103=Object[_0x14ee('0x14')]||{'__proto__':[]}instanceof Array&&function(_0x48d210,_0x250f4a){_0x48d210['__proto__']=_0x250f4a;}||function(_0x48d210,_0x250f4a){for(var _0x4fa230 in _0x250f4a)_0x250f4a[_0x14ee('0x4')](_0x4fa230)&&(_0x48d210[_0x4fa230]=_0x250f4a[_0x4fa230]);})(_0x48d210,_0x250f4a);},function(_0x48d210,_0x250f4a){function _0x4fa230(){this[_0x14ee('0x73')]=_0x48d210;}_0x5c2103(_0x48d210,_0x250f4a),_0x48d210[_0x14ee('0x3')]=null===_0x250f4a?Object[_0x14ee('0xd')](_0x250f4a):(_0x4fa230['prototype']=_0x250f4a[_0x14ee('0x3')],new _0x4fa230());});Object[_0x14ee('0x8')](_0x250f4a,_0x14ee('0xb'),{'value':!0x0});var _0xa6e4de=function(_0x48d210){function _0x250f4a(_0x250f4a){var _0x4fa230=this,_0x5c2103=_0x250f4a[_0x14ee('0x42')]['x'],_0x433553=_0x250f4a[_0x14ee('0x42')]['y']-0x10;return _0x4fa230=_0x48d210[_0x14ee('0x1')](this,_0x250f4a,_0x5c2103,_0x433553,_0x14ee('0x74'))||this,_0x250f4a['add']['existing'](_0x4fa230),_0x250f4a[_0x14ee('0x4c')][_0x14ee('0x19')](_0x4fa230),_0x4fa230[_0x14ee('0x36')](_0x14ee('0x75')),_0x250f4a[_0x14ee('0x31')][_0x14ee('0x76')][_0x14ee('0x70')](_0x4fa230),_0x4fa230[_0x14ee('0x77')][_0x14ee('0x78')]['y']=-0xfa,_0x4fa230;}return _0x433553(_0x250f4a,_0x48d210),_0x250f4a[_0x14ee('0x3')][_0x14ee('0x53')]=function(){this['y']<0x20&&this[_0x14ee('0x52')]();},_0x250f4a;}(Phaser[_0x14ee('0x79')][_0x14ee('0x7a')]);_0x250f4a['Beam']=_0xa6e4de;},1471:function(_0x207f10,_0x1da6be,_0x221a69){'use strict';var _0x410461,_0x82179c=this&&this[_0x14ee('0x13')]||(_0x410461=function(_0x207f10,_0x1da6be){return(_0x410461=Object[_0x14ee('0x14')]||{'__proto__':[]}instanceof Array&&function(_0x207f10,_0x1da6be){_0x207f10[_0x14ee('0x15')]=_0x1da6be;}||function(_0x207f10,_0x1da6be){for(var _0x221a69 in _0x1da6be)_0x1da6be[_0x14ee('0x4')](_0x221a69)&&(_0x207f10[_0x221a69]=_0x1da6be[_0x221a69]);})(_0x207f10,_0x1da6be);},function(_0x207f10,_0x1da6be){function _0x221a69(){this['constructor']=_0x207f10;}_0x410461(_0x207f10,_0x1da6be),_0x207f10['prototype']=null===_0x1da6be?Object['create'](_0x1da6be):(_0x221a69[_0x14ee('0x3')]=_0x1da6be[_0x14ee('0x3')],new _0x221a69());});Object[_0x14ee('0x8')](_0x1da6be,'__esModule',{'value':!0x0});var _0x5d8b82=function(_0x207f10){function _0x1da6be(_0x1da6be,_0x221a69,_0x410461){var _0x82179c=_0x207f10[_0x14ee('0x1')](this,_0x1da6be,_0x221a69,_0x410461,_0x14ee('0x65'))||this;return _0x1da6be['add'][_0x14ee('0x7b')](_0x82179c),_0x82179c[_0x14ee('0x36')](_0x14ee('0x66')),_0x82179c;}return _0x82179c(_0x1da6be,_0x207f10),_0x1da6be;}(Phaser[_0x14ee('0x79')]['Sprite']);_0x1da6be[_0x14ee('0x6c')]=_0x5d8b82;},1472:function(_0x3e32fd,_0x24c80a,_0x533785){'use strict';var _0x566333,_0x58d4f1=this&&this[_0x14ee('0x13')]||(_0x566333=function(_0x3e32fd,_0x24c80a){return(_0x566333=Object[_0x14ee('0x14')]||{'__proto__':[]}instanceof Array&&function(_0x3e32fd,_0x24c80a){_0x3e32fd['__proto__']=_0x24c80a;}||function(_0x3e32fd,_0x24c80a){for(var _0x533785 in _0x24c80a)_0x24c80a[_0x14ee('0x4')](_0x533785)&&(_0x3e32fd[_0x533785]=_0x24c80a[_0x533785]);})(_0x3e32fd,_0x24c80a);},function(_0x3e32fd,_0x24c80a){function _0x533785(){this[_0x14ee('0x73')]=_0x3e32fd;}_0x566333(_0x3e32fd,_0x24c80a),_0x3e32fd[_0x14ee('0x3')]=null===_0x24c80a?Object[_0x14ee('0xd')](_0x24c80a):(_0x533785[_0x14ee('0x3')]=_0x24c80a[_0x14ee('0x3')],new _0x533785());});Object[_0x14ee('0x8')](_0x24c80a,_0x14ee('0xb'),{'value':!0x0});var _0x38abfd=function(_0x3e32fd){function _0x24c80a(){return _0x3e32fd[_0x14ee('0x1')](this,{'key':_0x14ee('0x7c')})||this;}return _0x58d4f1(_0x24c80a,_0x3e32fd),_0x24c80a[_0x14ee('0x3')][_0x14ee('0x7d')]=function(){this[_0x14ee('0x7e')][_0x14ee('0x7f')](_0x14ee('0x80'),_0x14ee('0x81')),this[_0x14ee('0x7e')][_0x14ee('0x82')](_0x14ee('0x2c'),_0x14ee('0x83'),{'frameWidth':0x10,'frameHeight':0x10}),this[_0x14ee('0x7e')]['spritesheet'](_0x14ee('0x2d'),'./assets/spritesheets/ship2.png',{'frameWidth':0x20,'frameHeight':0x10}),this[_0x14ee('0x7e')]['spritesheet'](_0x14ee('0x2e'),_0x14ee('0x84'),{'frameWidth':0x20,'frameHeight':0x20}),this[_0x14ee('0x7e')][_0x14ee('0x82')]('explosion',_0x14ee('0x85'),{'frameWidth':0x10,'frameHeight':0x10}),this[_0x14ee('0x7e')][_0x14ee('0x82')]('power-up',_0x14ee('0x86'),{'frameWidth':0x10,'frameHeight':0x10}),this[_0x14ee('0x7e')]['spritesheet'](_0x14ee('0x42'),_0x14ee('0x87'),{'frameWidth':0x10,'frameHeight':0x18}),this[_0x14ee('0x7e')]['spritesheet']('beam',_0x14ee('0x88'),{'frameWidth':0x10,'frameHeight':0x10});},_0x24c80a[_0x14ee('0x3')][_0x14ee('0xd')]=function(){this[_0x14ee('0x19')][_0x14ee('0x24')](0x14,0x14,'Loading\x20game...'),this['scene'][_0x14ee('0x89')]('MainScene'),this['anims']['create']({'key':'ship1_anim','frames':this['anims']['generateFrameNumbers']('ship',{'start':0x0,'end':0x1}),'frameRate':0x14,'repeat':-0x1}),this[_0x14ee('0x8a')][_0x14ee('0xd')]({'key':_0x14ee('0x8b'),'frames':this[_0x14ee('0x8a')][_0x14ee('0x8c')](_0x14ee('0x2d'),{'start':0x0,'end':0x1}),'frameRate':0x14,'repeat':-0x1}),this[_0x14ee('0x8a')]['create']({'key':_0x14ee('0x3b'),'frames':this[_0x14ee('0x8a')][_0x14ee('0x8c')](_0x14ee('0x2e'),{'start':0x0,'end':0x1}),'frameRate':0x14,'repeat':-0x1}),this['anims'][_0x14ee('0xd')]({'key':_0x14ee('0x66'),'frames':this['anims'][_0x14ee('0x8c')](_0x14ee('0x65'),{'start':0x0,'end':0x4}),'frameRate':0x14,'repeat':0x0,'hideOnComplete':!0x0}),this[_0x14ee('0x8a')][_0x14ee('0xd')]({'key':_0x14ee('0x37'),'frames':this[_0x14ee('0x8a')]['generateFrameNumbers'](_0x14ee('0x32'),{'start':0x0,'end':0x1}),'frameRate':0x14,'repeat':-0x1}),this[_0x14ee('0x8a')][_0x14ee('0xd')]({'key':_0x14ee('0x8d'),'frames':this['anims'][_0x14ee('0x8c')]('power-up',{'start':0x2,'end':0x3}),'frameRate':0x14,'repeat':-0x1}),this[_0x14ee('0x8a')][_0x14ee('0xd')]({'key':_0x14ee('0x43'),'frames':this[_0x14ee('0x8a')][_0x14ee('0x8c')](_0x14ee('0x42'),{'start':0x0,'end':0x1}),'frameRate':0x14,'repeat':-0x1}),this['anims'][_0x14ee('0xd')]({'key':_0x14ee('0x75'),'frames':this[_0x14ee('0x8a')]['generateFrameNumbers'](_0x14ee('0x74'),{'start':0x0,'end':0x1}),'frameRate':0x14,'repeat':-0x1});},_0x24c80a;}(Phaser[_0x14ee('0x72')]);_0x24c80a[_0x14ee('0xe')]=_0x38abfd;},549:function(_0x557274,_0x3193d2,_0x22c926){_0x557274[_0x14ee('0x7')]=_0x22c926(0x226);},550:function(_0x23e82b,_0x501fa5,_0x3d58ff){'use strict';var _0x244991=this&&this[_0x14ee('0x8e')]||function(_0x23e82b){return _0x23e82b&&_0x23e82b[_0x14ee('0xb')]?_0x23e82b:{'default':_0x23e82b};};Object['defineProperty'](_0x501fa5,_0x14ee('0xb'),{'value':!0x0}),_0x3d58ff(0x227);var _0x5d3c36=_0x244991(_0x3d58ff(0x5bd)),_0x10205b=_0x244991(_0x3d58ff(0x5c0)),_0x2eafe7={'backgroundColor':'#ffffff','scale':{'parent':_0x14ee('0x8f'),'mode':Phaser[_0x14ee('0x90')][_0x14ee('0x91')],'autoCenter':Phaser['Scale'][_0x14ee('0x92')],'width':0x190,'height':0x190},'scene':[_0x10205b['default'],_0x5d3c36[_0x14ee('0xe')]],'physics':{'default':'arcade','arcade':{'debug':!0x1}}};window[_0x14ee('0x93')](_0x14ee('0x7e'),function(){window[_0x14ee('0x34')]=new Phaser[(_0x14ee('0x94'))](_0x2eafe7);});}});
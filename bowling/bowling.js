require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var s=e[n]=new t.Module(n);r[n][0].call(s.exports,i,s,s.exports)}return e[n].exports}function o(r){this.id=r,this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.isParcelRequire=!0,t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({6:[function(require,module,exports) {
function t(t){this.calculateEquation=function(t){var n=t[0].x-t[1].x,u=(t[0].y-t[1].y)/n,i=t[0].y-u*t[0].x;return function(t){return(t-i)/u}},this.x=this.calculateEquation(t)}module.exports=t;
},{}],4:[function(require,module,exports) {
function t(t,h,i){this.width=t,this.height=h,this.throwLine=500,this.bottomLeftGutter={x:this.width/5,y:this.height},this.bottomRightGutter={x:4*this.width/5,y:this.height},this.topLeftGutter={x:3*this.width/8,y:0},this.topRightGutter={x:5*this.width/8,y:0},this.leftGutter=new i([this.bottomLeftGutter,this.topLeftGutter]),this.rightGutter=new i([this.bottomRightGutter,this.topRightGutter]),this.outOfLane=function(t){return t.x<this.leftGutter.x(t.y)||t.x>this.rightGutter.x(t.y)}}module.exports=t;
},{}],3:[function(require,module,exports) {
function t(t){this.x=t[0].x,this.y=t[0].y,this.dx=2.5*(t[1].x-t[0].x),this.dy=2.5*(t[1].y-t[0].y),this.radius=60,this.update=function(t){this._move(t),this._changeRadius()},this.getPosition=function(){return{x:this.x,y:this.y}},this.outOfBounds=function(){return this.y>800||this.y<0},this._move=function(t){this.x+=5e-4*this.dx*t,this.y+=5e-4*this.dy*t},this._changeRadius=function(t){this.radius=.03*this.y+20}}module.exports=t;
},{}],25:[function(require,module,exports) {
function t(t){this.x=t.x,this.y=t.y,this.dx=Math.random()-Math.random(),this.dy=Math.random()-Math.random(),this.update=function(t){this._move(t)},this._move=function(t){this.x+=this.dx*t,this.y+=this.dy*t}}module.exports=t;
},{}],5:[function(require,module,exports) {
var i=require("./Particle.js");function t(t,r,s){this.origin=t,this.colour=s,this.particles=[];for(var e=0;e<r;e++)this.particles.push(new i(this.origin));this.update=function(i){for(var t=0;t<this.particles.length;t++)this.particles[t].update(i)}}module.exports=t;
},{"./Particle.js":25}],7:[function(require,module,exports) {
function o(){this.all=[{position:{x:164,y:50},colour:"#0000FF"},{position:{x:188,y:50},colour:"#0000FF"},{position:{x:212,y:50},colour:"#0000FF"},{position:{x:236,y:50},colour:"#0000FF"},{position:{x:176,y:60},colour:"#7373FF"},{position:{x:200,y:60},colour:"#7373FF"},{position:{x:224,y:60},colour:"#7373FF"},{position:{x:188,y:70},colour:"#B5B5FF"},{position:{x:212,y:70},colour:"#B5B5FF"},{position:{x:200,y:80},colour:"#E5E5FF"}],this.calculateRicochets=function(o){toBeRemoved=[];for(var t=0;t<this.all.length;t++)chance=75*Math.pow(Math.random(),3),distance=this.getDistance(t,o),chance>=distance&&toBeRemoved.push(t);return toBeRemoved},this.getDistance=function(o,t){return xSquared=Math.pow(this.all[o].position.x-this.all[t].position.x,2),ySquared=Math.pow(this.all[o].position.y-this.all[t].position.y,2),Math.sqrt(xSquared+ySquared)}}module.exports=o;
},{}],8:[function(require,module,exports) {
function i(i,t,s,l){this.BowlingBall=l,this.Explosion=s,this.Pins=t,this.alley=i,this.ball=null,this.explosions=[],this._updatePins=function(){if(null!=this.ball)for(var i=0;i<this.pins.all.length;i++)this._ballHitsPin(this.ball,this.pins.all[i])&&(amountRemoved=this._pinCollision(i),i-=amountRemoved-1)},this._ballHitsPin=function(i,t){var s=i.getPosition(),l=i.radius,n=t.position,o=s.x-n.x,e=s.y-n.y;return Math.sqrt(Math.pow(o,2)+Math.pow(e,2))<l},this.newBall=function(i){this.ball=new this.BowlingBall(i)},this.newPins=function(){this.pins=new this.Pins},this._updateBall=function(i){if(null!=this.ball){this.ball.update(i);var t=this.ball.getPosition();this.alley.outOfLane(t)&&this._ballExplosion()}},this._updateExplosions=function(i){for(var t=0;t<this.explosions.length;t++)this.explosions[t].update(i)},this._ballExplosion=function(){var i=this,t=this.ball.getPosition();this.ball=null,ballExplosion=new s(t,70,"black"),this.explosions.push(ballExplosion),this.countPins(this.pins.all.length),setTimeout(function(){return i.explosions.shift()},2e3)},this._pinCollision=function(i){var t=this;toBeRemoved=this.pins.calculateRicochets(i);for(var l=0;l<toBeRemoved.length;l++)pinExplosion=new s(this.pins.all[toBeRemoved[l]].position,40,this.pins.all[toBeRemoved[l]].colour),this.explosions.push(pinExplosion);for(var n=0;n<toBeRemoved.length;n++)this.pins.all.splice(toBeRemoved[n],1);return setTimeout(function(){return t.explosions.shift()},2e3),toBeRemoved.length},this.update=function(i){this._updateBall(i),this._updateExplosions(i),this._updatePins()}}module.exports=i;
},{}],9:[function(require,module,exports) {
function t(t){this.alley=t,this.setContext=function(t){this.context=t},this.drawAnimatable=function(t){for(var i=0;i<t.pins.all.length;i++)this._drawPin(t.pins.all[i].position,t.pins.all[i].colour);this._drawBowlingBall(t.ball);for(var e=0;e<t.explosions.length;e++)this._drawExplosion(t.explosions[e])},this._drawPin=function(t,i){var e=t.x,o=t.y;this.context.beginPath(),this.context.moveTo(e,o),this.context.lineTo(e+3,o),this.context.quadraticCurveTo(e+10,o-15,e+3,o-30),this.context.lineTo(e,o-35),this.context.arc(e,o-35,5,0,2*Math.PI,!1),this.context.lineTo(e-3,o-30),this.context.quadraticCurveTo(e-10,o-15,e-3,o),this.context.lineTo(e-3,o),this.context.fillStyle=i,this.context.fill()},this._drawExplosion=function(t){for(var i=0;i<t.particles.length;i++)this.context.beginPath(),this.context.arc(t.particles[i].x,t.particles[i].y,2,0,2*Math.PI,!1),this.context.fillStyle=t.colour,this.context.fill()},this._drawBowlingBall=function(t){null!=t&&(this.context.beginPath(),this.context.arc(t.x,t.y,t.radius,0,2*Math.PI,!1),this.context.fillStyle="black",this.context.fill())},this.drawBowlingAlley=function(){this._drawLeftBound(this.context),this._drawLane(this.context),this._drawRightBound(this.context),this._drawThrowLine(this.context)},this._drawLeftBound=function(){this.context.beginPath(),this.context.moveTo(0,0),this.context.lineTo(this.alley.topLeftGutter.x,0),this.context.lineTo(this.alley.bottomLeftGutter.x,this.alley.height),this.context.lineTo(0,this.alley.height),this.context.fillStyle="#BFE5BB",this.context.fill()},this._drawLane=function(){this.context.beginPath(),this.context.moveTo(this.alley.bottomLeftGutter.x,this.alley.bottomLeftGutter.y),this.context.lineTo(this.alley.bottomRightGutter.x,this.alley.bottomRightGutter.y),this.context.lineTo(this.alley.topRightGutter.x,this.alley.topRightGutter.y),this.context.lineTo(this.alley.topLeftGutter.x,this.alley.topLeftGutter.y),this.context.fillStyle="#FFF2D1",this.context.fill()},this._drawRightBound=function(){this.context.beginPath(),this.context.moveTo(this.alley.topRightGutter.x,0),this.context.lineTo(this.alley.width,0),this.context.lineTo(this.alley.width,this.alley.height),this.context.lineTo(this.alley.bottomRightGutter.x,this.alley.height),this.context.fillStyle="#BFE5BB",this.context.fill()},this._drawThrowLine=function(){this.context.beginPath(),this.context.moveTo(this.alley.leftGutter.x(this.alley.throwLine),this.alley.throwLine),this.context.lineTo(this.alley.rightGutter.x(this.alley.throwLine),this.alley.throwLine),this.context.stroke()}}module.exports=t;
},{}],11:[function(require,module,exports) {
function a(a,t,e){var i=this;this.canvas=document.getElementById(a),this.context=this.canvas.getContext("2d"),this.ballColour="black",this.drawer=e,this.animatable=t,this.lastFrame=null,this.setSize=function(){this.canvas.width=400,this.canvas.height=600},this.clearCanvas=function(){this.context.clearRect(0,0,400,600)},this.updateCanvas=function(a){this.clearCanvas(),this.animatable.update(a),this.drawer.drawBowlingAlley(),this.drawer.drawAnimatable(this.animatable)},this.animate=function(a){requestAnimationFrame(i.animate),null===i.lastFrame&&(i.lastFrame=a);var t=a-i.lastFrame;i.updateCanvas(t),i.lastFrame=a}}module.exports=a;
},{}],23:[function(require,module,exports) {
function s(){this.rolls=[],this.bonuses=[],this.bonusesPromised=0,this.total=0,this.isComplete=!1,this.isFrameTen=!1,this.addRoll=function(s){this.rolls.push(s)},this.isStrike=function(){return 10==this.rolls[0]},this.isSpare=function(){return this.rolls[0]+this.rolls[1]==10},this.isFirstRoll=function(){return 1==this.rolls.length},this.isSecondRoll=function(){return 2==this.rolls.length},this.addBonus=function(s){this.bonuses.push(s),this.bonusesPromised--,0==this.bonusesPromised&&this.setFrameTotal()},this.promiseBonuses=function(s){this.bonusesPromised+=s},this.makeFrameTen=function(){this.isFrameTen=!0},this.setFrameTotal=function(){this.total=this.totalRolls(),this.bonuses.length>0&&(this.total+=this._totalBonuses()),this.isComplete=!0},this.totalRolls=function(){return this.rolls.reduce(function(s,t){return s+t})},this._totalBonuses=function(){return this.bonuses.reduce(function(s,t){return s+t})}}module.exports=s;
},{}],24:[function(require,module,exports) {
function e(){this.removeScores=function(){for(var e=document.getElementById("score_card");e.firstChild;)e.removeChild(e.firstChild)},this.printScores=function(e){for(var r=document.getElementById("score_card"),i="",n="-",d=0;d<e.frames.length-1;d++){n="-";if(e.frames[d].isComplete){n=0;for(var t=0;t<=d;t++)n+=e.frames[t].total}i+='\n      <div class="score_card_row">\n        <div>'+(d+1)+"</div>\n        <div>"+(e.frames[d].rolls[0]||"-")+"</div>\n        <div>"+(e.frames[d].rolls[1]||"-")+"</div>\n        <div>"+(e.frames[d].total||"-")+"</div>\n        <div>"+n+"</div>\n      </div>\n      "}length=e.frames.length;n="-";if(e.frames[length-1].isComplete){n=0;for(t=0;t<=length-1;t++)n+=e.frames[t].total}i+='\n    <div class="score_card_tenth_row">\n      <div>'+(d+1)+"</div>\n      <div>"+(e.frames[length-1].rolls[0]||"-")+"</div>\n      <div>"+(e.frames[length-1].rolls[1]||"-")+"</div>\n      <div>"+(e.frames[length-1].rolls[2]||"-")+"</div>\n      <div>"+(e.frames[length-1].total||"-")+"</div>\n      <div>"+n+"</div>\n    </div>\n    ",r.innerHTML=i}}module.exports=e;
},{}],10:[function(require,module,exports) {
var s=require("./Frame.js"),e=require("./Printer.js");function i(){this.printer=new e,this.frames=[];for(var i=0;i<9;i++)this.frames.push(new s);var r=new s;r.makeFrameTen(),this.frames.push(r),this.currentFrame=0,this.currentRoll=0,this.isFinished=!1,this.addRoll=function(s){var e=this.currentFrame,i=this.frames[e];i.isFrameTen?this.addRollToTenthFrame(i,s):this.addRollToFrame(i,s)},this.addRollToFrame=function(s,e){if(s.addRoll(e),s.isStrike())s.promiseBonuses(2);else if(s.isSpare())s.promiseBonuses(1);else if(s.isSecondRoll())s.setFrameTotal();else if(s.isFirstRoll())return;this.currentFrame++},this.addRollToTenthFrame=function(s,e){this.isFinished||s.addRoll(e),s.isStrike()||s.isSpare()?3==s.rolls.length&&(s.setFrameTotal(),this.isFinished=!0):2==s.rolls.length&&(s.setFrameTotal(),this.isFinished=!0)},this.addBonuses=function(s){for(var e=0;e<this.frames.length;e++)this.frames[e].bonusesPromised>0&&this.frames[e].addBonus(s)},this.update=function(s){this.printer.removeScores(),this.addBonuses(s),this.addRoll(s),this.printer.printScores(this)},this.printer.printScores(this)}module.exports=i;
},{"./Frame.js":23,"./Printer.js":24}],12:[function(require,module,exports) {
function t(t,n){var i=this;this.startingCoordinates=null,this.animatable=t,this.startPins=null,this.endPins=null,this.firstRoll=!0,this.scorecard=new n,this.startThrow=function(t){coordinates=i._getCoordinatesFromEvent(t),coordinates.y>500&&!i.onTimeout&&(i.startingCoordinates=coordinates)},this.endThrow=function(t){if(coordinates=i._getCoordinatesFromEvent(t),coordinates.y<500&&null==i.animatable.ball&&!i.onTimeout){var n=i.startingCoordinates,o=coordinates;i.animatable.newBall([n,o]),i.startPins=i.animatable.pins.all.length}},this._getCoordinatesFromEvent=function(t){return{x:t.pageX-window.innerWidth/10,y:t.pageY-50}},this.newGame=function(){this.scorecard.printer.removeScores(),this.animatable.newPins(),this.scorecard=new n},this.animatable.countPins=function(t){i.endPins=t;var n=i.startPins-i.endPins;10==n?(i.firstRoll=!0,i.onTimeout=!0,setTimeout(function(){i.animatable.newPins(),i.onTimeout=!1},1500)):i.firstRoll?i.firstRoll=!1:(i.firstRoll=!0,i.onTimeout=!0,setTimeout(function(){i.animatable.newPins(),i.onTimeout=!1},1500)),i.scorecard.update(n)},this.scorecard.resetPinsOnStrike=function(){i.onTimeout=!0,i.firstRoll=!0,setTimeout(function(){i.animatable.newPins(),i.onTimeout=!1},1500)},this.addScore=function(t){this.scorecard.update(t)}}module.exports=t;
},{}],1:[function(require,module,exports) {
var e=require("./Gutter"),a=require("./Alley"),r=require("./BowlingBall"),n=require("./Explosion"),i=require("./Pins"),t=require("./Animatable"),o=require("./Drawer"),l=require("./Animator"),w=require("./Scorecard"),m=require("./Bowler");alley=new a(400,600,e),animatable=new t(alley,i,n,r),animatable.newPins(),drawer=new o(alley),animator=new l("canvas",animatable,drawer),bowler=new m(animatable,w),animator.drawer.setContext(animator.context),animator.canvas.addEventListener("mousedown",bowler.startThrow),animator.canvas.addEventListener("mouseup",bowler.endThrow),animator.setSize(),animator.animate(animator);
},{"./Gutter":6,"./Alley":4,"./BowlingBall":3,"./Explosion":5,"./Pins":7,"./Animatable":8,"./Drawer":9,"./Animator":11,"./Scorecard":10,"./Bowler":12}]},{},[1])
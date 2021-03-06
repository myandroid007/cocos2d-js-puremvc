/**
 * Created by guoxiangyu on 16/5/14.
 */

var Layer2 = cc.Layer.extend({
    sprite:null,
    ctor:function (data) {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        /////////////////////////////
        // 3. add your codes below...
        // add a label shows "Hello World"
        // create and initialize a label
        var helloLabel = new cc.LabelTTF("Layer2 - " + data.layerId, "Arial", 38);
        // position the label on the center of the screen
        helloLabel.x = size.width / 2;
        helloLabel.y = size.height / 2 + Math.random() * size.height / 2;
        // add the label as a child to this layer
        this.addChild(helloLabel, 5);

        return true;
    }
});

module.exports = Layer2;
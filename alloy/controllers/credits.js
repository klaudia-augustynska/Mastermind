function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "credits";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    $.__views.credits = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "credits"
    });
    $.__views.credits && $.addTopLevelView($.__views.credits);
    $.__views.mainView = Ti.UI.createView({
        layout: "vertical",
        id: "mainView"
    });
    $.__views.credits.add($.__views.mainView);
    $.__views.navigation = Ti.UI.createView({
        layout: "vertical",
        height: 40,
        top: 20,
        id: "navigation"
    });
    $.__views.mainView.add($.__views.navigation);
    $.__views.gobackButton = Ti.UI.createButton({
        id: "gobackButton",
        title: "Powrót"
    });
    $.__views.navigation.add($.__views.gobackButton);
    $.__views.game = Ti.UI.createView({
        layout: "vertical",
        id: "game"
    });
    $.__views.mainView.add($.__views.game);
    $.__views.__alloyId0 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Nad projektem pracowali:",
        id: "__alloyId0"
    });
    $.__views.game.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "+ Paweł Marcin Chojnacki",
        id: "__alloyId1"
    });
    $.__views.game.add($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "+ Klaudia Julia Augustyńska",
        id: "__alloyId2"
    });
    $.__views.game.add($.__views.__alloyId2);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    $.gobackButton.addEventListener("click", function() {
        $.credits.close();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function Color(r, g, b) {
        this.r = r;
        this.b = b;
        this.g = g;
        this.hex = "#" + r.toString(16) + g.toString(16) + b.toString(16);
    }
    function GetColorId(hex) {
        for (i = 1; 8 >= i; ++i) if (hex == COLOR[i].hex) return i;
    }
    function NextTrial() {
        ++actualTrial;
        var row = Ti.UI.createView({
            layout: "horizontal",
            height: 30,
            top: 10,
            bottom: 10,
            width: "100%"
        });
        var btns = [];
        for (var i = 1; 4 >= i; ++i) {
            btns[i] = Ti.UI.createButton({
                width: 30,
                height: 30,
                left: 10,
                backgroundColor: defaultButtonColor
            });
            row.add(btns[i]);
            btns[i].addEventListener("click", btnsListener);
        }
        $.game.add(row);
        return row;
    }
    function CheckResult() {
        var numberOfGuessed = 0;
        var numberOfMistaken = 0;
        var colorIds = [];
        for (var i = 0; 4 > i; ++i) {
            newRow.children[i].removeEventListener("click", btnsListener);
            colorIds[i] = GetColorId(newRow.children[i].backgroundColor);
        }
        for (var i = 0; 4 > i; ++i) {
            if (colorToGuess[i] == colorIds[i]) {
                ++numberOfGuessed;
                continue;
            }
            for (var j = 0; 4 > j; ++j) if (i != j && colorToGuess[i] == colorIds[j]) {
                ++numberOfMistaken;
                break;
            }
        }
        labelGuessed = Ti.UI.createLabel({
            text: numberOfGuessed,
            left: 50,
            width: 50
        });
        labelMistaken = Ti.UI.createLabel({
            text: numberOfMistaken,
            left: 10,
            width: 50
        });
        newRow.add(labelGuessed);
        newRow.add(labelMistaken);
        if (4 == numberOfGuessed) {
            EndGame(WIN);
            return;
        }
        if (actualTrial + 1 >= NUMBER_OF_TRIALS) {
            EndGame(LOSE);
            return;
        }
        newRow = NextTrial();
    }
    function Initialize() {
        for (var i = 0; 4 > i; ++i) colorToGuess[i] = Math.floor(8 * Math.random() + 1);
        alert(colorToGuess[0] + "   " + colorToGuess[1] + "   " + colorToGuess[2] + "   " + colorToGuess[3]);
        newRow = NextTrial();
    }
    function EndGame(state) {
        alert(state == WIN ? "Wygrałeś!!!!!!!11onenone w " + actualTrial.toString() + ". rundzie" : "Przegrałeś!!!!!!!");
    }
    function ResetGame() {
        colorToGuess = [];
        defaultButtonColor = "#aaa";
        actualTrial = 0;
        for (var c = $.game.children.length - 1; c >= 0; c--) $.game.remove($.game.children[c]);
        Initialize();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
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
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "pink",
        backgroundImage: "Torun_pomnik_Kopernika_01.jpg",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.mainView = Ti.UI.createView({
        top: 20,
        left: 20,
        width: 350,
        height: 1e3,
        layout: "vertical",
        id: "mainView"
    });
    $.__views.index.add($.__views.mainView);
    $.__views.navigation = Ti.UI.createView({
        layout: "horizontal",
        height: 40,
        id: "navigation"
    });
    $.__views.mainView.add($.__views.navigation);
    $.__views.resetButton = Ti.UI.createButton({
        id: "resetButton",
        title: "Nowa gra"
    });
    $.__views.navigation.add($.__views.resetButton);
    $.__views.creditsButton = Ti.UI.createButton({
        left: 10,
        id: "creditsButton",
        title: "Osiągnięcia"
    });
    $.__views.navigation.add($.__views.creditsButton);
    $.__views.nextButton = Ti.UI.createButton({
        left: 10,
        id: "nextButton",
        title: "Dalej"
    });
    $.__views.navigation.add($.__views.nextButton);
    $.__views.game = Ti.UI.createView({
        layout: "vertical",
        backgroundColor: "rgba(255,255,255,.8)",
        borderRadius: 5,
        height: "auto",
        id: "game"
    });
    $.__views.mainView.add($.__views.game);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var disableselect = function() {
        return false;
    };
    document.onselectstart = disableselect;
    document.onmousedown = disableselect;
    var COLOR = [ null, new Color(30, 87, 153), new Color(239, 47, 51), new Color(48, 187, 242), new Color(95, 255, 50), new Color(255, 221, 50), new Color(58, 137, 27), new Color(255, 50, 176), new Color(29, 147, 106) ];
    var NUMBER_OF_TRIALS = 10;
    var WIN = 1;
    var LOSE = 0;
    var colorToGuess = [];
    var defaultButtonColor = "#aaa";
    var actualTrial = 0;
    var newRow;
    var btnsListener = function() {
        if (this.backgroundColor == defaultButtonColor) this.backgroundColor = COLOR[1].hex; else {
            var id = GetColorId(this.backgroundColor);
            this.backgroundColor = 8 == id ? COLOR[1].hex : COLOR[id + 1].hex;
        }
    };
    $.nextButton.addEventListener("click", function() {
        CheckResult();
    });
    $.resetButton.addEventListener("click", function() {
        ResetGame();
    });
    $.creditsButton.addEventListener("click", function() {
        Alloy.createController("credits").getView().open();
    });
    Initialize();
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
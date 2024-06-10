/**
 * Concrete Factories produce a family of products that belong to a single
 * variant. The factory guarantees that resulting products are compatible. Note
 * that signatures of the Concrete Factory's methods return an abstract product,
 * while inside the method a concrete product is instantiated.
 */
var WindowsFactory = /** @class */ (function () {
    function WindowsFactory() {
    }
    WindowsFactory.prototype.createButton = function () {
        return new WindowsButton();
    };
    WindowsFactory.prototype.createCheckbox = function () {
        return new WindowsCheckbox();
    };
    return WindowsFactory;
}());
/**
 * Each Concrete Factory has a corresponding product variant.
 */
var MacOSFactory = /** @class */ (function () {
    function MacOSFactory() {
    }
    MacOSFactory.prototype.createButton = function () {
        return new MacOSButton();
    };
    MacOSFactory.prototype.createCheckbox = function () {
        return new MacOSCheckbox();
    };
    return MacOSFactory;
}());
/**
 * These Concrete Products are created by corresponding Concrete Factories.
 */
var WindowsButton = /** @class */ (function () {
    function WindowsButton() {
    }
    WindowsButton.prototype.render = function () {
        console.log("Rendering a Windows button");
    };
    return WindowsButton;
}());
var MacOSButton = /** @class */ (function () {
    function MacOSButton() {
    }
    MacOSButton.prototype.render = function () {
        console.log("Rendering a macOS button");
    };
    return MacOSButton;
}());
/**
 * These Concrete Products are created by corresponding Concrete Factories.
 */
var WindowsCheckbox = /** @class */ (function () {
    function WindowsCheckbox() {
    }
    WindowsCheckbox.prototype.render = function () {
        console.log("Rendering a Windows checkbox");
    };
    return WindowsCheckbox;
}());
var MacOSCheckbox = /** @class */ (function () {
    function MacOSCheckbox() {
    }
    MacOSCheckbox.prototype.render = function () {
        console.log("Rendering a macOS checkbox");
    };
    return MacOSCheckbox;
}());
/**
 * The client code works with factories and products only through abstract
 * types: GUIFactory, Button, and Checkbox. This lets you pass any factory or
 * product subclass to the client code without breaking it.
 */
function clientCode(factory) {
    var button = factory.createButton();
    var checkbox = factory.createCheckbox();
    button.render();
    checkbox.render();
}
/**
 * The client code can work with any concrete factory class.
 */
console.log("Client: Testing client code with the Windows factory...");
clientCode(new WindowsFactory());
console.log("");
console.log("Client: Testing client code with the MacOS factory...");
clientCode(new MacOSFactory());

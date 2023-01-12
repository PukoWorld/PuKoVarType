"use strict";
exports.__esModule = true;
exports.Dict = void 0;
var Dict = /** @class */ (function () {
    function Dict() {
        this.keys = [];
        this.values = [];
    }
    Dict.prototype.Get = function (key, _default) {
        if (_default === void 0) { _default = null; }
        var index = this.GetToIndex(key);
        if (index == -1)
            return _default;
        else
            return this.values[index];
    };
    Dict.prototype.GetToIndex = function (key) {
        for (var i = 0; i < this.keys.length; i++) {
            if (this.keys[i] == key) {
                return i;
            }
        }
        return -1;
    };
    Dict.prototype.Add = function (key, value) {
        if (this.GetToIndex(key) == -1) {
            this.keys.push(key);
            this.values.push(value);
            return false;
        }
        return true;
    };
    Dict.prototype.Reomve = function (key) {
        var va = this.GetToIndex(key);
        if (va != -1) {
            this.keys.splice(va);
            this.values.splice(va);
            return true;
        }
        return false;
    };
    return Dict;
}());
exports.Dict = Dict;

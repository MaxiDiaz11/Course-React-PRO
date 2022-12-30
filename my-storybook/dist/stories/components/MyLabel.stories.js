"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FontColor = exports.Terciary = exports.Secondary = exports.AllCaps = exports.BasicLabel = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var MyLabel_1 = require("../../components/MyLabel");
exports.default = {
    title: "UI/Etiquetas/MyLabel",
    component: MyLabel_1.MyLabel,
    argTypes: {
        color: { control: "select" },
        fontColor: { control: "color" },
    },
};
var Template = function (args) { return ((0, jsx_runtime_1.jsx)(MyLabel_1.MyLabel, __assign({}, args))); };
exports.BasicLabel = Template.bind({});
exports.BasicLabel.args = {
    allCaps: false,
    size: "normal",
};
exports.AllCaps = Template.bind({});
exports.AllCaps.args = {
    size: "normal",
    allCaps: true,
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    size: "normal",
    color: "secondary",
};
exports.Terciary = Template.bind({});
exports.Terciary.args = {
    size: "normal",
    color: "terciary",
};
exports.FontColor = Template.bind({});
exports.FontColor.args = {
    size: "h1",
    fontColor: "#5517ac",
};

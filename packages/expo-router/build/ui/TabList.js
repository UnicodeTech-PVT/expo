"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTabList = exports.TabList = void 0;
const react_native_1 = require("react-native");
const common_1 = require("./common");
function TabList({ asChild, style, ...props }) {
    const Comp = asChild ? common_1.ViewSlot : react_native_1.View;
    return <Comp style={[styles.tabList, style]} {...props}/>;
}
exports.TabList = TabList;
function isTabList(child) {
    return child.type === TabList;
}
exports.isTabList = isTabList;
const styles = react_native_1.StyleSheet.create({
    tabList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    tabTrigger: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
//# sourceMappingURL=TabList.js.map
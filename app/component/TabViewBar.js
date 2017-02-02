const React = require('react');
const ReactNative = require('react-native');
const {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity
} = ReactNative;

const DefaultTabBar = React.createClass({
  propTypes: {
    goToPage: React.PropTypes.func,
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array,
    backgroundColor: React.PropTypes.string,
    activeTextColor: React.PropTypes.string,
    inactiveTextColor: React.PropTypes.string,
    textStyle: Text.propTypes.style,
    tabStyle: View.propTypes.style,
    renderTab: React.PropTypes.func,
    underlineStyle: View.propTypes.style,
  },

  getDefaultProps() {
    return {
      activeTextColor: '#0398ff',
      inactiveTextColor: '#666',
      backgroundColor: "#fff",
    };
  },

  renderTabOption(name, page) {
  },

  renderTab(name, page, isTabActive, onPressHandler) {
    const { activeTextColor, inactiveTextColor, textStyle, } = this.props;
    const textColor = isTabActive ? activeTextColor : inactiveTextColor;
    const fontWeight = isTabActive ? 'bold' : 'normal';

    return <TouchableOpacity
      style={{flex: 1, }}
      key={name}
      accessible={true}
      accessibilityLabel={name}
      accessibilityTraits='button'
      onPress={() => onPressHandler(page)}
    >
      <View style={[styles.tab, this.props.tabStyle, ]}>
        <Text style={[{color: textColor, fontWeight, fontSize: 13 }, textStyle, ]}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>;
  },

  render() {
    const containerWidth = this.props.containerWidth;
    const numberOfTabs = this.props.tabs.length;
    const tabUnderlineStyle = {
      position: 'absolute',
      width: containerWidth / numberOfTabs,
      bottom: 6,
      justifyContent: "center",
      alignItems: "center"
    };

    const left = this.props.scrollValue.interpolate({
      inputRange: [0, 1, ], outputRange: [0,  containerWidth / numberOfTabs, ],
    });
    return (
      <View style={[styles.tabs, {backgroundColor: this.props.backgroundColor, }, this.props.style, ]}>
        {this.props.tabs.map((name, page) => {
          const isTabActive = this.props.activeTab === page;
          const renderTab = this.props.renderTab || this.renderTab;
          return renderTab(name, page, isTabActive, this.props.goToPage);
        })}
        <Animated.View style={[tabUnderlineStyle, { left, }, this.props.underlineStyle, ]} >
          <View style={{height: 2, width: 35, backgroundColor: '#0398ff',}}></View>
        </Animated.View>
      </View>
    );
  },
});

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabs: {
    height: 36,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
});

module.exports = DefaultTabBar;

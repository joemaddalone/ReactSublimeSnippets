var fs=require('fs');
var addons = {
  imrcl: {package: "react-addons-clone-with-props", importName: "cloneWithProps"},
  imrcf: {package: "react-addons-create-fragment", importName: "createFragment"},
  imrcst: {package: "react-addons-css-transition-group", importName: "ReactCSSTransitionGroup"},
  imrlsm: {package: "react-addons-linked-state-mixin", importName: "LinkedStateMixin"},
  imrp: {package: "react-addons-perf", importName: "Perf"},
  imrpr: {package: "react-addons-pure-render-mixin", importName: "PureRenderMixin"},
  imrsc: {package: "react-addons-shallow-compare", importName: "shallowCompare"},
  imrtu: {package: "react-addons-test-utils", importName: "ReactTestUtils"},
  imrtg: {package: "react-addons-transition-group", importName: "ReactTransitionGroup"},
  imru: {package: "react-addons-update", importName: "update"}
};

Object.keys(addons).forEach(function(key) {
  var addon = addons[key]
  var e = "import " + addon.importName + " from '"+addon.package+"';"
  fs.writeFile('./snippets/react-addons/import/import-'+addon.importName+'.sublime-snippet',
    '<snippet>\n'+
    '<content><![CDATA[\n' +
     e + '$0\n' +
    ']]>\n' +
    '</content>\n' +
    '<tabTrigger>'+key+'</tabTrigger>\n' +
    '<scope>source.js</scope>\n' +
    '<description>import '+addon.importName+'</description>\n' +
    '</snippet>',
    function (err) {
      if (err) return console.log(err);
    }
  )
});

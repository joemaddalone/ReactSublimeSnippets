var fs=require('fs');
var reactEvents = {
  onco: "onCopy",
  onct: "onCut",
  onpa: "onPaste",
  onkd: "onKeyDown",
  onkp: "onKeyPress",
  onku: "onKeyUp",
  onfo: "onFocus",
  onbl: "onBlur",
  onch: "onChange",
  onin: "onInput",
  onsu: "onSubmit",
  oncl: "onClick",
  oncm: "onContextMenu",
  ondc: "onDoubleClick",
  ondr: "onDrag",
  onde: "onDragEnd",
  onden: "onDragEnter",
  ondex: "onDragExit",
  ondl: "onDragLeave",
  ondo: "onDragOver",
  onds: "onDragStart",
  ondr: "onDrop",
  onmd: "onMouseDown",
  onme: "onMouseEnter",
  onml: "onMouseLeave",
  onmm: "onMouseMove",
  onmo: "onMouseOut",
  onmov: "onMouseOver",
  onmu: "onMouseUp",
  ontc: "onTouchCancel",
  onte: "onTouchEnd",
  ontm: "onTouchMove",
  onts: "onTouchStart",
  onsc: "onScroll",
  onwh: "onWheel"
};

Object.keys(reactEvents).forEach(function(key) {
  var e = reactEvents[key]
  fs.writeFile('snippets/React/events/'+e+'.sublime-snippet',
    '<snippet>\n'+
    '<content><![CDATA[\n' +
     e + '$0\n' +
    ']]>\n' +
    '</content>\n' +
    '<tabTrigger>'+key+'</tabTrigger>\n' +
    '<scope>source.js</scope>\n' +
    '<description>'+e+'</description>\n' +
    '</snippet>',
    function (err) {
      if (err) return console.log(err);
    }
  )
});

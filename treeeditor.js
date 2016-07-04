//put a box around each node in the tree
//every name should have a plus next to it. when you click the plus, it will show a text box
//and whatever name you type in that text box will become a child of that name

var Node = function(name) {
    var that = this;
    that.name = name;
    that.children = [];
};

Node.prototype.addChild = function(name) {
    var that = this;
    var child = new Node(name);
    that.children.push(child);
    return child;
};

var cindy = new Node("cindy"); //parent
var moe = cindy.addChild("moe"); //child
var joe = cindy.addChild("joe"); //child
var chris = moe.addChild("chris"); //child
var jesse = moe.addChild("jesse"); //child
var alan = joe.addChild("alan"); //child
var tim = chris.addChild("tim"); //child
var egg = alan.addChild("egg");
var squab = moe.addChild("squab");
//console.log(cindy);
//console.log("moe", moe); //Node {name: "moe", children: Array[3]}

//push nodes into this array for later retrival with .length - 1
var data_tokens = [];

//store reference to node that was clicked on in the data-attribute

var printnames = function(tree, n, box) {
    data_tokens.push(tree);
    //console.log(tree); //Node {name: "cindy", children: Array[2]}
    // debugger;
    //console.log(tree.name, n);
    //console.log('|' + '-'.repeat(n) + ' ' + tree.name);
    //$() turns any string into an HTML object
    var p = $('<div class="node"><span class="add" style="color:#999;" data-node="'+ (data_tokens.length - 1) +'" class="' + tree.name +'" id="plus' + n + '">+ </span>' + tree.name + '</div>');
    //console.log("p", p);
    //The .append() method inserts the specified content as the last child of each element
    $(box).append(p);

    if (tree.children.length == 0) {
        return;
    } else {
        for (var i = 0; i < tree.children.length; i++) {
            printnames(tree.children[i], n + 1, p);
        }
    }

};

var add_child = function(t) {
    console.log("t", t);
    // var new_child = $(t).val();
    // console.log("new_child", new_child);
    var target = t;
    $(target).keypress(function(e) {
        event.target.stopPropagation;
        //console.log(e.keyCode);
        //console.log("hi");
        //console.log(target.keyCode);
        //console.log($(target).keyCode);
    if( e.keyCode == 13 ) {
      var new_child = $(e.target).val(); //value of text box
      //console.log("new_child", new_child);
      //console.log("target", $(event.target).attr('id')); //plus0
      var new_target = $(event.target).attr('id'); //plus0
      var data_node = $(event.target).attr('data-node');

      console.log("data-node", data_node);
      //var parent_name = $(event.target).attr('class');
     // console.log("parent_name", parent_name);
      var name_of_new_child = new_child;
      //Problem: parent_name.addChild is not a function!!
      // get reference to node in the data-attribute of the span
      var new_child2 = data_tokens[data_node].addChild(name_of_new_child);
      //console.log(new_child2);
      $(container).html('');
      printnames(cindy, 0, container);
      // set_handlers();
      }
    });

    // $(target).val('');
    // $(target).focus().val('');
}

var set_handlers = function() {
    $('body').on('click', '.add', function(event){
       event.stopPropagation();
       var target = $(event.target).attr('id');
       //console.log(target); //plus1
       var target2 = $(event.target).attr('data-node');
        console.log("target2", target2); //
       x = '';
       x = x + '<input type="text" id="'+ target  + '"" data-node="'+ target2 +'"name="add name" value="">';
       var target_new = $(event.target).html(x);
       add_child(target_new);
    })
}

var container = $('#container');


$(document).ready(function() {
printnames(cindy, 0, container);
set_handlers();
});

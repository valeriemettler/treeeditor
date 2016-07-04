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

var x = '';
var printnames = function(tree, n) {
    //console.log(tree.name, n);
    console.log('|' + '-'.repeat(n) + ' ' + tree.name);
    x = x + '<div> |' + '-'.repeat(n) + ' ' + tree.name + '</div>';
    $('#x').html(x);

    if (tree.children.length == 0) {
        return;
    } else {
        for (var i = 0; i < tree.children.length; i++) {
            printnames(tree.children[i], n + 1);
        }
    }

};
printnames(cindy, 0);
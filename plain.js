/* jshint eqnull: true */
void((function (){
    // a hash where id and the number of appearance are stored.
    var rec = {};

    function _traverse(node){
        var i;
        // self
        if(node.nodeType === 1/* element */){
            var attrs = node.attributes;
            for(i=0; i<attrs.length; i++){
                if(attrs[i].name === 'id'){
                    if(rec[attrs[i].value] == null) rec[attrs[i].value] = 0;
                    rec[attrs[i].value]++;
                    break;
                }
            }
        }
        
        // children
        var children = node.childNodes;
        for(i=0; i<children.length; i++){
            _traverse(children[i]);
        }
    }
    
    _traverse(document);

    // an array where the id which appears twice or more are stored.
    var dups = [];
    for(var key in rec){
        if(rec[key] > 1){
            dups.push(key);
        }
    }

    if(dups.length) {
        alert(dups.join(', '));
    } else {
        alert('OK');
    }

    return false;
})());

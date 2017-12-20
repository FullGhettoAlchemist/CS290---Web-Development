function generate_content(){
    //Table
    var body = document.getElementsByTagName('body')[0];
    var table = document.createElement("table");
    var table_contents = document.createElement("tbody");

    for (var i = 1; i < 5; i++){
        var head = document.createElement("th");
        var text = document.createTextNode("Header "+i+"");
        head.appendChild(text);
        table_contents.appendChild(head);
    }
    for (var j = 1; j < 4;j++){
        var row = document.createElement("tr");
        for (var k = 1; k < 5; k++){
            var data = document.createElement("td");
            var text = document.createTextNode(""+j+","+k+"");
            data.appendChild(text);
            row.appendChild(data);
        }
        table_contents.appendChild(row);
    }
    table.appendChild(table_contents);
    body.appendChild(table);
    table.setAttribute("border", "1");
    var x = 0;
    var y = 0;
    var selected = table.rows[x].cells[y];
    selected.style.border = "2px solid black";
    //Buttons
    var up = document.createElement("button");
    var up_text = document.createTextNode("Up");
    up.appendChild(up_text);
    body.appendChild(up);
    up.onclick = function(){
        var newX = x - 1;
        if (newX >= 0){
            unselect_cell(selected);
            selected =  table.rows[newX].cells[y];
            select_cell(selected);
            x = newX;
        }
    };

    var down = document.createElement("button");
    var down_text = document.createTextNode("Down");
    down.appendChild(down_text);
    body.appendChild(down);
    down.onclick = function(){
        var newX = x + 1;
        if (newX <= 3){
            unselect_cell(selected);
            selected =  table.rows[newX].cells[y];
            select_cell(selected);
            x = newX;
        }
    };

    var left = document.createElement("button");
    var left_text = document.createTextNode("Left");
    left.appendChild(left_text);
    body.appendChild(left);
    left.onclick = function(){
        var newY = y - 1;
        if (newY >= 0){
            unselect_cell(selected);
            selected =  table.rows[x].cells[newY];
            select_cell(selected);
            y = newY;
        }
    };

    var right = document.createElement("button");
    var right_text = document.createTextNode("Right");
    right.appendChild(right_text);
    body.appendChild(right);
    right.onclick = function(){
        var newY = y + 1;
        if (newY <= 3){
            unselect_cell(selected);
            selected =  table.rows[x].cells[newY];
            select_cell(selected);
            y = newY;
        }
    };

    var mark = document.createElement("button");
    var mark_text = document.createTextNode("Mark Cell");
    mark.appendChild(mark_text);
    body.appendChild(mark);
    mark.onclick = function(){
        selected.style.backgroundColor = "yellow";
    }
}

function unselect_cell(selected_cell){
    selected_cell.style.border = "1px solid black";
};

function select_cell(new_selection){
    new_selection.style.border = '2px solid black';
};

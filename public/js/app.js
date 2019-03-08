$(function () {

    /* ******************************************* */
    //CI Mismatch table display code
    /* ******************************************* */

    // rendering the mismatched CI Table
    const render = function (items) {
        $('#idKey').empty();

        //appending each item to the idKey #
        items.forEach(function (item) {
            $('#idKey').append(renderItemRow(item));
        });
    }

    //api call and render
    const getItems = function () {
        $.get('/api/mismatched').then(render);
    }

    const renderItemRow = function (item) {
        const tr = $('<tr>');


        //appending items to the div(Items should be the name of the table)
        tr.append(
            $('<td>').text(item.stufffromdb),
            $('<td>').text(item.stufffromdb),
            $('<td class="locked">').text(item.stufffromdb),
            $('<td>').text(item.stufffromdb),
            $('<td>').text(item.stufffromdb),
            $('<td>').text(item.stufffromdb)
        );
        return tr;
    }

    getItems();
    /* ******************************************* */

});

var state = [
    'Alaska', 'Alabama', 'Arkansas', 'Arizona', 'California', 'Colorado', 'Connecticut', 'Distinct of Columbia', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Iowa', 'Idaho', 'Illinois', 'Indiana',  'Kansas', 'Kentucky', 'Lousiana', 'Massachusetts', 'Maryland', 'Maine', 'Michigan', 'Minnesota', 'Missouri', 'Mississippi',  'Montana', 'North Carolina','North Dakota','Nebraska', 'New Hampshire','New Jersey','New Mexico','Nevada', 'New York',   'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Virginia','Vermont', 'Washington', 'Wisconsin', 'West Virginia',  'Wyoming'
]

// console.log(state.length);
var predicted = [];
var confirmed = [];
var state_name = [];
// var fullname = Object.keys(state);
// console.log(fullname);
// $("#corona_tb tbody tr").each(function () {
//     var a = $(this).children();//获取每一行
//     var arr = a[2].innerText;//取得第三列的值
//     a[2].innerText = statename
// });

// Change the value in the last colume to state
document.querySelectorAll('tr td:nth-child(1)')
    .forEach((x, i) => x.textContent = state[i]);


$.getJSON("./CSV/newjson.json", (data) => {
    json_data = data;
    var state = null;
    for (let i in data) {
        state = i;
        state = String(state);
        state_name.push(state);
        // console.log(state_name.length);
        // console.log(state);
        var arr = data[state];
        var last_ele = arr.slice(-1).pop();
        var predict_case = last_ele["Predicted Cases"];
        var confirmed_case = last_ele["Confirmed Cases"];
        confirmed.push(confirmed_case);
        predicted.push(predict_case);
    }

    // Change the value in the 2nd colume to predicted case

    // document.querySelectorAll('tr td:nth-child(2)')
    //     .forEach((x, i) => x.textContent = predicted[i]);
    // console.log(predicted);
    

    // Change the value in the 2nd colume to predicted case

    // document.querySelectorAll('tr td:nth-child(1)')
    //     .forEach((x, i) => x.textContent = confirmed[i]);
});


//   Add a new column of checkbox
$("#corona_tb tbody tr").append($("<td>"));
$('#corona_tb thead tr>td:last').html();
$('#corona_tb tbody tr').each(function () { $(this).children('td:last').append($('<input type="checkbox" class="check">')) });

// Check 3 checkbox and disabled the rest of them
$('.check').change(function () {
    if ($('input.check').filter(':checked').length == 3)
        $('input.check:not(:checked)').attr('disabled', 'disabled');
    else
        $('input.check').removeAttr('disabled');
});


function GetSelected() {
    var corona_tb = document.getElementById("corona_tb");
    var search_inp = document.getElementById('searchbox').value;
    var check_box = corona_tb.getElementsByTagName("INPUT");
    var message = "   State Name\n";
    //Loop through the CheckBoxes.
    for (var i = 0; i < check_box.length; i++) {
        if (check_box[i].checked) {
            var row = check_box[i].parentNode.parentNode;
            var val = row.cells[0].innerText;
            console.log(val);
            var checkbox = row.cells[3].innerHTML;
            message += "  " + val;
            message += "\n";
        }
    }
    // console.log(search_inp);
    // alert(message);
}

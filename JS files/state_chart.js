var state = [
    'Alabama', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Washington', 'Alaska', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Lousiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'West Virginia', 'Wisconsin', 'Wyoming'
]

// var fullname = Object.keys(state);
// console.log(fullname);
// $("#corona_tb tbody tr").each(function () {
//     var a = $(this).children();//获取每一行
//     var arr = a[2].innerText;//取得第三列的值
//     a[2].innerText = statename
// });

// Change the value in the last colume to state
document.querySelectorAll('tr td:nth-child(3)')
  .forEach((x, i) => x.textContent = state[i])

//   Add a new column of checkbox
$("#corona_tb tbody tr").append($("<td>"));
$('#corona_tb thead tr>td:last').html();
$('#corona_tb tbody tr').each(function(){$(this).children('td:last').append($('<input type="checkbox" class="check">'))});

// Check 3 checkbox and disabled the rest of them
$('.check').change(function(){
    if($('input.check').filter(':checked').length == 3)
        $('input.check:not(:checked)').attr('disabled', 'disabled');
    else
        $('input.check').removeAttr('disabled');
});

function GetSelected(){
    var corona_tb = document.getElementById("corona_tb");
    var search_inp = document.getElementById('searchbox').value;
    var check_box = corona_tb.getElementsByTagName("INPUT");
    var message = "   State Name\n";
        //Loop through the CheckBoxes.
        for (var i = 0; i < check_box.length; i++) {
            if (check_box[i].checked) {
                var row = check_box[i].parentNode.parentNode;
                var val = row.cells[2].innerHTML
                message += "  " + val;
                message += "\n";
            }
            
        }
        // console.log(search_inp);
        // alert(message);
}

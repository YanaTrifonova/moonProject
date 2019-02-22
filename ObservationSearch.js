function myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, j, txtValue, row, bol;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");

    tr = table.getElementsByTagName("tr");
    row = table.getElementsByTagName('th');
    // Loop through all table rows, and hide those who don't match the search query

    for (i = 1; i < tr.length; i++) {
        bol = false;
        for (j = 1; j < row.length; j++) {
            td = tr[i].getElementsByTagName("td")[j];
            if (td) {
                txtValue = td.textContent || td.innerText;
                bol = bol || (txtValue.toUpperCase().indexOf(filter) > -1)
            }
        }
        if (bol) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }
}

tr = undefined;

function sortFunction(n) {
    let table = document.getElementById("myTable");
    let tr = table.getElementsByTagName("tr");

    function toArray(tr) {
        let array = [];
        for (let i = tr.length >>> 0; i--;) {
            array[i] = tr[i];
        }
        return array;
    }

    let sortedRows = toArray(tr).slice(1, tr.length).sort(function compare(a, b) {


        let f = a.getElementsByTagName("td")[n];
        let s = b.getElementsByTagName("td")[n];

        let name1 = f.textContent.toUpperCase();
        let name2 = s.textContent.toUpperCase();
        if (n === 0) {
            name1 = parseInt(name1);
            name2 = parseInt(name2);
        }

        if (name1 < name2) {
            return -1;
        }
        if (name1 > name2) {
            return 1;
        }
        return 0;
    });
    for (let i = 1; i < tr.length; i++) {
        tr[i].outerHTML = sortedRows[i-1].outerHTML;
    }

}

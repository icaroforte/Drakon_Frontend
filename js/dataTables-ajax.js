$(document).ready(function() {
    $('#example').DataTable( {
        "ajax": {
            "url": "http://localhost:3000/api/v1/entorpecentes",
            "dataSrc": ""
        },
  "columnDefs": [{
    "defaultContent": "",
    "targets": "_all"
  }],
        "columns": [
            { "data": "userName" },
            { "data": "procedimento" },
            { "data": "n_proced" },
            { "data": "data_entrada" },
            { "data": "investigado" },
            { "data": "substancia" },
            { "data": "quant" },
            { "data": "und" },
            { "data": "laudo" },
            { "data": "vara" },
            { "data": "n_processo" },
            { "data": "lacre" },
            { "data": "data_autorizacao" },
            { "data": "caixa" },
            { "data": "oficio" },
            { "data": "delegacia" }
        ]
    } );
} );


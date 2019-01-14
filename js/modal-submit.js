$('#submitBtn').on('click', function() {
    if ($("#formEntorpecentes").valid()) {
        $('#confirm-submit').modal('toggle');
    }
});

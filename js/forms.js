function forms(nameForm, failMessage) {
    $(nameForm).on('submit', function () {
        $.ajax({
            url: $(this).attr('action'),
            method: $(this).attr('method'),
            data: $(this).serialize()
        }).done((data) => {
            if (data.success) {
                successMessageFunction(nameForm, data);
            } else {
                $(failMessage)
                    .html(data.error)
                    .fadeIn()
            }
        }).fail(() => customFail());
        return false;
    });
}

function successMessageFunction(nameForm, data) {
    return $(nameForm).parent()
        .empty()
        .append(
            $('<h2/>').html('Me contacter'),
            $('<p/>').html(data.successMessage)
                .fadeIn()
                .css({
                    display: 'flex',
                    'align-items': 'center',
                    'justify-content' : 'space-around',
                    'text-align': 'center',
                    color: '#2CC84D'
                })
                .append(
                    $('<img src="../files/img/validate.png" alt="Logo validé">')
                        .css({'width' : '3vw'})
                        .fadeIn()
                )
        )
}
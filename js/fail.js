function customFail() {
    $('main')
        .empty()
        .append(
            $('<div/>')
                .css({
                    'display': 'flex',
                    'flex-direction': 'column',
                    'align-items': 'center'
                })
                .append(
                    $('<p/>')
                        .html('Aïe, une erreur fatale est arrivée...cela a failli endommager le DOM !'),
                    $('<img src="../files/img/fail.png" alt="Image d\'erreur fatale"/>')
                        .css({
                            'width': '10vw',
                            'margin-top': '3vw'
                        })
                )
        );
}

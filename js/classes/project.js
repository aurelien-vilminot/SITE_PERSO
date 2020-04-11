class Project {
    constructor(projects, i) {
        this.id = i;
        this.title = projects[i][1];
        this.link = projects[i][2];
        this.shortDescription = projects[i][3];
        this.description = projects[i][4];
    }

    getID() {
        return this.id;
    }

    getTitle() {
        return this.title;
    }

    getLink() {
        return this.link;
    }

    getShortDescription() {
        return this.shortDescription;
    }

    getDescription() {
        return this.description;
    }

    show(div) {
        let self = this;
        $(div)
            .append(
                $('<div/>')
                    .css({
                        display: 'flex',
                        'flex-direction' : 'column',
                        'align-items': 'center',
                        'text-align': 'center',
                        'box-shadow': '0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)',
                        'border-radius': '1vw',
                        width: '27vw',
                        padding: '1vw'
                    })
                    .append(
                        $('<h3/>').html(self.title),
                        $('<img src="../../files/img_projects/' + self.id + '.png" alt="Ilustration Projet"/>')
                            .css({
                                width: '20vw',
                                'margin-bottom': '1vw'
                            }),
                        $('<p/>').html(self.shortDescription),
                        $('<div/>')
                            .css({
                                display: 'flex',
                                'align-items': 'flex-end',
                                'justify-content': 'center',
                                height: '100%'
                            })
                            .append(
                                $('<a href=""/>')
                                    .css({
                                        'margin-top': '1vw',
                                        'font-size': '1.3vw',
                                        'font-weight': 'bold'
                                    })
                                    .html('En savoir plus')
                            )
                    )
            )
    }
}
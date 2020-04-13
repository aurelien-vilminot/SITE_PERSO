class Project {
    constructor(projects, idFirstProject, i) {
        this.id = idFirstProject;
        this.title = projects[i][1];
        this.link = projects[i][2];
        this.shortDescription = projects[i][3];
        this.description = projects[i][4];
        this.languages = projects[i][5].split(',');
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

    getLanguages() {
        return this.languages;
    }

    show(div) {
        let self = this;
        $(div)
            .append(
                $('<div class="divProject"/>')
                    .css({
                        width: '27vw'
                    })
                    .append(
                        $('<h3/>').html(self.title),
                        $('<img src="../../files/img_projects/' + self.id + '.png" alt="Illustration Projet"/>')
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
                                $('<a/>')
                                    .css({
                                        cursor: 'pointer',
                                        'margin-top': '1vw',
                                        'font-size': '1.3vw',
                                        'font-weight': 'bold'
                                    })
                                    .html('En savoir plus')
                                    .on('click', () => self.bigShow())
                            )
                    )
            )
    }

    bigShow() {
        let self = this;
        this.disableScroll();
        $('main')
            .append(
                $('<div id="mainProject"/>')
                    .css({
                        display: 'flex',
                        'justify-content': 'center',
                        'align-items': 'center',
                        background: 'rgba(0,0,0,0.8)',
                        position: 'fixed',
                        width: '100vw',
                        height: '100%',
                        top: '0'
                    })
                    .append(
                        $('<div class="divProject"/>')
                            .css({
                                'margin-top': '0',
                                'padding-bottom': '2vw',
                                width: '60vw',
                                background: 'white'
                            })
                            .append(
                                $('<div/>')
                                    .css({
                                        display: 'flex',
                                        'justify-content': 'flex-end',
                                        width: '100%',
                                        'margin-right': '1vw',
                                    })
                                    .append(
                                        $('<a/>')
                                            .html('&times;')
                                            .css({
                                                cursor: 'pointer'
                                            })
                                            .on('click', () => {
                                                self.enableScroll();
                                                $('#mainProject').remove()
                                            }),
                                    ),
                                $('<h2/>')
                                    .html(self.title)
                                    .css({
                                        'margin-top': '0'
                                    }),
                                $('<div/>')
                                    .css({
                                        display: 'flex',
                                        'justify-content': 'space-between',
                                        'align-items': 'center',
                                        width: '90%'
                                    })
                                    .append(
                                        $('<img src="../../files/img_projects/' + self.id + '.png" alt="Illustration Projet"/>')
                                            .css({
                                                width: '24vw'
                                            }),
                                        $('<div/>')
                                            .css({
                                                display: 'flex',
                                                'flex-direction': 'column',
                                                'justify-content': 'center',
                                                'align-items': 'center',
                                                width: '24vw'
                                            })
                                            .append(
                                                $('<p/>')
                                                    .html(self.description)
                                                    .css({
                                                        'margin-bottom': '2vw',
                                                        'font-size': '1.2vw',
                                                        'text-align': 'justify'
                                                    }),
                                                $('<div/>')
                                                    .css({
                                                        display: 'flex',
                                                        'justify-content': 'center',
                                                        'align-items': 'center',
                                                    })
                                                    .append(
                                                        $('<p/>').html('Ressources :&nbsp;'),
                                                        $('<a href="' + self.link + '" target="_blank"/>')
                                                            .html('Github')
                                                            .css({
                                                                'font-style': 'italic'
                                                            })
                                                    ),
                                                $('<hr id="hrProject"/>'),
                                                $('<div id="projectLanguages"/>')
                                                    .css({
                                                        display: 'flex',
                                                        'justify-content': 'space-around',
                                                        'align-items': 'center',
                                                        width: '100%'
                                                    })
                                            )
                                    )
                            )
                    )
            );
        this.projectLanguage();
    }

    projectLanguage() {
        let self = this;
        for (let language in this.languages) {
            $('#projectLanguages').append(
                $('<img src="../../files/ic_languages/' + self.languages[language].toLowerCase() + '.png" alt="Logo langage" title="' + self.languages[language] + '"/>')
                    .css({
                        'min-width': '2vw',
                        'max-height': '3vw'
                    })
            )
        }
    }

    disableScroll() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
    }

    enableScroll() {
        window.onscroll = function() {};
    }
}
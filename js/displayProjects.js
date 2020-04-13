function displayProjects() {
    $.ajax({
        url: '../php/project.php',
        method: 'get',
        data: {requestType: 'nbProjects'}
    }).done((data) => {
        let nbPages = data.nbPages;
        let currentPage = 1;
        changePage(currentPage, nbPages);
    }).fail(() => customFail());

}

function changePage(currentPage, nbPages) {
    let idFirstProject = (currentPage - 1) * 2;
    getProjectsOfPage(idFirstProject);

    if (currentPage === 1) {
        $('#change_page')
            .empty()
            .hide()
            .fadeIn(350)
            .append(
                $('<a/>')
                    .html('Suivant')
                    .css({'margin-right': '0.5vw', cursor: 'pointer'})
                    .on('click', () => {
                        currentPage += 1;
                        changePage(currentPage, nbPages)
                    }),
                $('<img src="../files/img/next_page.png" alt="Next icon"/>')
                    .css({width: '1.5vw', cursor: 'pointer'})
                    .on('click', () => {
                        currentPage += 1;
                        changePage(currentPage, nbPages)
                    })
            );
    } else if (currentPage === nbPages) {
        $('#change_page')
            .empty()
            .hide()
            .fadeIn(350)
            .append(
                $('<img src="../files/img/prev_page.png" alt="Precédent icon"/>')
                    .css({width: '1.5vw', cursor: 'pointer'})
                    .on('click', () => {
                        currentPage -= 1;
                        changePage(currentPage, nbPages)
                    }),
                $('<a/>')
                    .html('Précédent')
                    .css({'margin-left': '0.5vw', cursor: 'pointer'})
                    .on('click', () => {
                        currentPage -= 1;
                        changePage(currentPage, nbPages)
                    }),
            );
    } else {
        $('#change_page')
            .empty()
            .hide()
            .fadeIn(350)
            .append(
                $('<img src="../files/img/prev_page.png" alt="Precédent icon"/>')
                    .css({width: '1.5vw', cursor: 'pointer'})
                    .on('click', () => {
                        currentPage -= 1;
                        changePage(currentPage, nbPages)
                    }),
                $('<a/>')
                    .html('Précédent')
                    .css({'margin-right': '0.5vw', 'margin-left': '0.5vw', cursor: 'pointer'})
                    .on('click', () => {
                        currentPage -= 1;
                        changePage(currentPage, nbPages)
                    }),
                $('<p/>')
                    .html ('|'),
                $('<a/>')
                    .html('Suivant')
                    .css({'margin-left': '0.5vw', 'margin-right': '0.5vw', cursor: 'pointer'})
                    .on('click', () => {
                        currentPage += 1;
                        changePage(currentPage, nbPages)
                    }),
                $('<img src="../files/img/next_page.png" alt="Next icon"/>')
                    .css({width: '1.5vw', cursor: 'pointer'})
                    .on('click', () => {
                        currentPage += 1;
                        changePage(currentPage, nbPages)
                    })
            );
    }
}

function getProjectsOfPage(idFirstProject) {
    $.ajax({
        url: '../php/project.php',
        method: 'get',
        data: {idFirstProject: idFirstProject}
    }).done((data) => {
        $('#list_projects')
            .empty()
            .hide()
            .fadeIn(350);
        for (let i = 0 ; i < 2 ; ++i) {
            idFirstProject += 1;
            let project = new Project(data.projects, idFirstProject, i);
            project.show('#list_projects');
        }
    }).fail(() => customFail());
}
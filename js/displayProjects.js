function displayProjects(idFirstProject) {
    $.ajax({
        url: '../php/project.php',
        method: 'get',
    }).done((data) => {
        for (let i = idFirstProject; i < idFirstProject + 2 ; ++i) {
            let project = new Project(data.projects, i);
            project.show('#list_projects');
        }
    }).fail(() => customFail());
}
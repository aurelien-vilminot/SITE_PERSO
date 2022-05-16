function displayProjects() {
	$.ajax({
		url: '../php/project.php',
		method: 'get',
		data: { requestType: 'nbProjects' }
	}).done((data) => {
		let nbPages = data.nbPages;
		let currentPage = data.nbPages;
		changePage(currentPage, nbPages);
	}).fail(() => customFail());
}

function changePage(currentPage, nbPages) {
	getProjectsOfPage(currentPage * 2);
	console.log(currentPage);

	if (currentPage === nbPages) {
		$('#change_page')
			.empty()
			.hide()
			.fadeIn(350)
			.append(
				$('<a/>')
					.html('Suiv.')
					.css({ 'margin-right': '0.5vw', cursor: 'pointer' })
					.on('click', () => {
						changePage(--currentPage, nbPages);
					}),
				$('<img src="../files/img/next_page.png" alt="Next icon"/>')
					.css({ width: '1.5vw', cursor: 'pointer' })
					.on('click', () => {
						changePage(--currentPage, nbPages);
					})
			);
	} else if (Math.round(currentPage) === 1) {
		$('#change_page')
			.empty()
			.hide()
			.fadeIn(350)
			.append(
				$('<img src="../files/img/prev_page.png" alt="Precédent icon"/>')
					.css({ width: '1.5vw', cursor: 'pointer' })
					.on('click', () => {
						changePage(++currentPage, nbPages);
					}),
				$('<a/>')
					.html('Prec.')
					.css({ 'margin-left': '0.5vw', cursor: 'pointer' })
					.on('click', () => {
						changePage(++currentPage, nbPages);
					})
			);
	} else {
		$('#change_page')
			.empty()
			.hide()
			.fadeIn(350)
			.append(
				$('<img src="../files/img/prev_page.png" alt="Precédent icon"/>')
					.css({ width: '1.5vw', cursor: 'pointer' })
					.on('click', () => {
						changePage(++currentPage, nbPages);
					}),
				$('<a/>')
					.html('Prec.')
					.css({ 'margin-right': '0.5vw', 'margin-left': '0.5vw', cursor: 'pointer' })
					.on('click', () => {
						changePage(++currentPage, nbPages);
					}),
				$('<p/>')
					.html('|'),
				$('<a/>')
					.html('Suiv.')
					.css({ 'margin-left': '0.5vw', 'margin-right': '0.5vw', cursor: 'pointer' })
					.on('click', () => {
						changePage(--currentPage, nbPages);
					}),
				$('<img src="../files/img/next_page.png" alt="Next icon"/>')
					.css({ width: '1.5vw', cursor: 'pointer' })
					.on('click', () => {
						changePage(--currentPage, nbPages);
					})
			);
	}
}

function getProjectsOfPage(idFirstProject) {
	$.ajax({
		url: '../php/project.php',
		method: 'get',
		data: { idFirstProject: idFirstProject }
	}).done((data) => {
		$('#list_projects')
			.empty()
			.hide()
			.fadeIn(350);
		data.projects.reverse();
		for (let i = 0; i < data.nbProjects; ++i) {
			let project = new Project(data.projects, idFirstProject--, i);
			project.show('#list_projects');
		}
	}).fail(() => customFail());
}

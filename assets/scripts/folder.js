
//Feature Rules
	const folderFeatureRulesToggle = document.querySelector('.folder-feature_rules-toggle');
	const folderFeatureRulesContent = document.querySelector('.folder-feature_rules-content');

	folderFeatureRulesToggle.addEventListener('click', () => {
		folderFeatureRulesContent.classList.toggle('open');
		folderFeatureRulesToggle.textContent = folderFeatureRulesContent.classList.contains('open') ? 'v' : '>';
});



//Ui
	const folderUiToggle = document.querySelector('.folder-ui-toggle');
	const folderUiContent = document.querySelector('.folder-ui-content');



	folderUiToggle.addEventListener('click', () => {
		folderUiContent.classList.toggle('open');
		folderUiToggle.textContent = folderUiContent.classList.contains('open') ? 'v' : '>';
});

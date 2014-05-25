docpadConfig = {
	watchOptions: preferredMethods: ['watchFile','watch']
	templateData: {
		site:
			title: 'Cumulocity'
		sections:  [
			{ title: 'Concepts Guide', folder: 'guides/concepts-guide', icon: 'glyphicon-certificate' },
			{ title: 'Devices', folder: 'guides/devices' ,icon: 'glyphicon-phone'},
			{ title: 'REST Developer\'s Guide', folder: 'guides/rest', icon: 'glyphicon-cog' },
			{ title: 'Java Developer\'s Guide', folder: 'guides/developers-guide', icon: 'glyphicon-th-list' },
			{ title: 'Reference Guide', folder: 'guides/reference-guide' ,icon : 'glyphicon-book'}
		]
  }
}

module.exports = docpadConfig;

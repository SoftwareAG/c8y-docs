docpadConfig = {
	watchOptions: preferredMethods: ['watchFile','watch']
	templateData: {
		site:
			title: 'Cumulocity'
		sections:  [
			{ title: 'Concepts Guide', folder: 'guides/concepts-guide' },
			{ title: 'Devices', folder: 'guides/devices' },
			{ title: 'REST Developer\'s Guide', folder: 'guides/rest' },
			{ title: 'Java Developer\'s Guide', folder: 'guides/java' },
			{ title: 'Reference Guide', folder: 'guides/reference-guide' }
		]
  }
}

module.exports = docpadConfig;

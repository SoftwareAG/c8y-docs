docpadConfig = {
	watchOptions: preferredMethods: ['watchFile','watch']
	templateData: {
		site:
			title: 'Cumulocity'
		sections:  [
			{ title: 'Concepts Guide', folder: 'guides/concepts-guide', icon: 'glyphicon-asterisk', description: 'The concept descriptions explain the architecture and technical concepts behind Cumulocity. They are intended for anyone technically interested in the machine-to-machine application platform, be it solution architects, system administrators or software developers.' },
			{ title: 'Devices', folder: 'guides/devices' ,icon: 'glyphicon-phone', description: '' },
			{ title: 'REST Developer\'s Guide', folder: 'guides/rest', icon: 'glyphicon-cog', description: '' },
			{ title: 'Java Developer\'s Guide', folder: 'guides/developers-guide', icon: 'glyphicon-th-list', description: '' },
			{ title: 'Reference Guide', folder: 'guides/reference-guide' ,icon : 'glyphicon-book', description: 'The reference guide contains the detailed technical specifications of the programming interfaces of Cumulocity as reference for software developers.'}
		]
  }
}

module.exports = docpadConfig;

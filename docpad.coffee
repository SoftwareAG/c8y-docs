redirects = require('./redirects')

docpadConfig = {
	watchOptions: preferredMethods: ['watchFile','watch']
	templateData: {
		site:
			title: 'Cumulocity'
		sections:  [
			{ title: 'Concepts Guide', folder: 'guides/concepts-guide', icon: 'glyphicon-asterisk', description: 'The concept descriptions explain the architecture and technical concepts behind Cumulocity. They are intended for anyone technically interested in the machine-to-machine application platform, be it solution architects, system administrators or software developers.' },
			{ title: 'Device Guides', folder: 'guides/devices' ,icon: 'glyphicon-phone', description: '' },
			{ title: 'REST Developer\'s Guide', folder: 'guides/rest', icon: 'glyphicon-cog', description: '' },
			{ title: 'REST Reference', folder: 'guides/reference-guide' ,icon : 'glyphicon-book', description: 'The reference guide contains the detailed technical specifications of the programming interfaces of Cumulocity as reference for software developers.'}
			{ title: 'Java Developer\'s Guide', folder: 'guides/java', icon: 'glyphicon-volume-up', description: '' },
			{ title: 'Web Developer\'s Guide', folder: 'guides/plugins', icon: 'glyphicon-fast-forward', description: '' },
		]
  }
	plugins:
		redirector:
			redirects:
				redirects
}

module.exports = docpadConfig;

function convert(str) {
  return  str.replace(/^\d+.\s*/,'')
    .replace(/\s+/g,'_');
    // .toLowerCase();
}

function simplifyPath (path) {
  return path.split('/')
    .map(convert)
    .join('/');
}

function log(item) {
  console.log('\n\n');
  console.log(item);
  console.log('\n\n');
}


var docpadConfig = {
	templateData: {
    site: {
      title: 'This is the title',
    },
    getTesting: function () {
      return 'Allright';
    }
  },
  collections: {
    pages: function () {
      return this.getCollection('html').on('add', function (model) {
        model.setMetaDefaults({
          layout: 'default'
        });
      });
    }
  },

  events : {
    writeBefore: function (opt) {
      opt.collection.forEach(function (file) {
        var path = file.get('outPath');

        if (file.get('render')) {
          path = simplifyPath(path);
          file.set('outPath', path);
        }
        log(path);
      });
    }
  }
};

module.exports = docpadConfig;

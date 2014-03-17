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

function humanize(str) {
  str = str.replace(/[-,_]+/g, ' ');
  return str.substr(0,1).toUpperCase() + str.substr(1);
}

function log(item) {
  console.log('\n\n');
  console.log(item);
  console.log('\n\n');
}

var sections = [],
  sectionMap = {};


var docpadConfig = {
	templateData: {
    site: {
      title: 'Cumulocity',
    },
    getSections: function () {
      return sections;
    },
    getPagesInSection: function (col, section) {
      col.filter(function (doc) {
        return section === doc.get('relativeDirPath');
      });
    }
  },
  collections: {
    pages: function () {
      return this.getCollection('html').on('add', function (model) {
        var tit = humanize(model.get('basename'));
        var dir = model.get('relativeDirPath');

        if (dir && !sectionMap[dir] && dir.length > 4) {
          sectionMap[dir] = {
            raw: dir,
            title: humanize(dir)
          };
          sections.push(sectionMap[dir]);
        }

        model.setMetaDefaults({
          layout: 'default',
          title: tit
        });
      });
    }
  },

  events : {
    writeBefore: function (opt) {
      //KEEP THIS COMMENT UNTIL WE FIGURE OUT ALL THE URL AND PATH CONFIG

      // opt.collection.forEach(function (file) {
      //   var path = file.get('outPath');

      //   if (file.get('render')) {
      //     path = simplifyPath(path);
      //     file.set('outPath', path);
      //   }
      //   log(path);
      // });
    }
  }
};

module.exports = docpadConfig;
